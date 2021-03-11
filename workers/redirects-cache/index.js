/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
    const url = new URL(request.url)
    const header = request.headers.get('accept-language')

    const init = {
        headers: {
            'content-type': 'text/html;charset=UTF-8',
        },
    }

    // Check if the user has already entered a specific language path (en or zh)
    const checkPath = await checkURLPath(url)

    // If they're using the root path then check their request header for language
    // See if they have Chinese (zh) set at a higher priority than English then return the ZH site
    // Otherwise English is the default
    if (checkPath.length < 1) {
        let language
        try {
            language = await getParsedAcceptLangs(header)
        } catch {
            language = 'en'
        }

        const redirectURL = handleLanguage(url, language)
        const response = await fetch(redirectURL, init)
        const results = await gatherResponse(response)
        return new Response(results, init)
    }
    const response = await fetch(url, init)
    const results = await gatherResponse(response)
    return new Response(results, init, options)
}

async function gatherResponse(response) {
    const { headers } = response
    const contentType = headers.get('content-type') || ''
    if (contentType.includes('application/json')) {
        return JSON.stringify(await response.json())
    }
    if (contentType.includes('application/text')) {
        return await response.text()
    }
    if (contentType.includes('text/html')) {
        return await response.text()
    }

    return await response.text()
}

/**
 * Parse HTTP accept-language header of the user browser.
 *
 * @param {string} hdr The string of accpet-language header
 * @return {Array} Array of language-quality pairs
 */
function getParsedAcceptLangs(hdr) {
    const pairs = hdr.split(',')
    const result = []
    for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i].split(';')
        if (pair.length == 1) result.push([pair[0], '1'])
        else result.push([pair[0], pair[1].split('=')[1]])
    }

    const languageFilter = result.filter(lang => lang[0] === 'en' || lang[0] === 'zh')

    if (languageFilter.length > 0) {
        const languageSort = languageFilter.sort((a, b) => b[1] - a[1])
        return languageSort[0][0]
    }
    return 'en'
}

function handleLanguage(url, language) {
    url.pathname = `/${language}${url.pathname}`

    return url
}

const checkURLPath = url => {
    const path = url.pathname.split('/')
    const languagePath = path.filter(p => p === 'en' || p === 'zh')
    return languagePath
}

addEventListener('fetch', async event => {
    const imagesRegex = /(.*\.(jpeg|avif|webp|svg|jpg|png))$/
    const cssRegex = /(.*\.(css))$/
    const jsRegex = /(.*\.(js))$/
    const xmlRegex = /(.*\.(xml))$/

    const url = new URL(event.request.url)

    if (
        !url.pathname.match(jsRegex) &&
        !url.pathname.match(cssRegex) &&
        !url.pathname.match(imagesRegex) &&
        !url.pathname.match(xmlRegex)
    ) {
        event.respondWith(handleRequest(event.request))
    }
})
