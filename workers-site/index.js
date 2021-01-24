import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler';

/**
 * The DEBUG flag will do two things that help during development:
 * 1. we will skip caching on the edge, which makes it easier to
 *    debug.
 * 2. we will return an error message on exception in your Response rather
 *    than the default 404.html page.
 */
const DEBUG = false;

/**
 * Parse HTTP accept-language header of the user browser.
 *
 * @param {string} hdr The string of accpet-language header
 * @return {Array} Array of language-quality pairs
 */
function getParsedAcceptLangs(hdr) {
    const pairs = hdr.split(',');
    const result = [];
    for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i].split(';');
        if (pair.length == 1) result.push([pair[0], '1']);
        else result.push([pair[0], pair[1].split('=')[1]]);
    }

    const languageFilter = result.filter(lang => lang[0] === 'en' || lang[0] === 'zh');

    if (languageFilter.length > 0) {
        const languageSort = languageFilter.sort((a, b) => b[1] - a[1]);
        return languageSort[0][0];
    }
    return 'en';
}

function handleLanguage(language) {
    return request => {
        const defaultAssetKey = mapRequestToAsset(request);
        const url = new URL(defaultAssetKey.url);
        url.pathname = `/${language}${url.pathname}`;
        return new Request(url.toString(), defaultAssetKey);
    };
}

const checkURLPath = url => {
    const path = url.pathname.split('/');
    const languagePath = path.filter(p => p === 'en' || p === 'zh');
    return languagePath;
};

addEventListener('fetch', event => {
    try {
        event.respondWith(handleEvent(event));
    } catch (e) {
        if (DEBUG) {
            return event.respondWith(
                new Response(e.message || e.toString(), {
                    status: 500,
                })
            );
        }
        event.respondWith(new Response('Internal Error', { status: 500 }));
    }
});

async function handleEvent(event) {
    const url = new URL(event.request.url);
    const options = {};

    /**
     * You can add custom logic to how we fetch your assets
     * by configuring the function `mapRequestToAsset`
     */
    // options.mapRequestToAsset = handlePrefix(/^\/docs/)

    try {
        options.cacheControl = {
            bypassCache: false,
            browserTTL: 0,
        };

        const filesRegex = /(.*\.(jpeg|avif|webp|css|js))$/;

        if (DEBUG) {
            // customize caching
            options.cacheControl = {
                bypassCache: true,
            };
        }

        // Check if the user has already entered a specific language path (en or zh)
        const checkPath = await checkURLPath(url);

        // If they're using the root path then check their request header for language
        // See if they have Chinese (zh) set at a higher priority than English then return the ZH site
        // Otherwise English is the default
        if (checkPath.length < 1) {
            const header = event.request.headers.get('accept-language');
            const language = await getParsedAcceptLangs(header);
            options.mapRequestToAsset = handleLanguage(language);
        }

        if (url.pathname.match(filesRegex)) {
            options.cacheControl.edgeTTL = 7 * 60 * 24 * 60; /* 7 days */
            options.cacheControl.browserTTL = 7 * 60 * 24 * 60; /* 7 days */
        }

        return await getAssetFromKV(event, options);
    } catch (e) {
        // if an error is thrown try to serve the asset at 404.html
        if (!DEBUG) {
            try {
                const notFoundResponse = await getAssetFromKV(event, {
                    mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/404.html`, req),
                });

                return new Response(notFoundResponse.body, { ...notFoundResponse, status: 404 });
            } catch (e) {}
        }

        return new Response(e.message || e.toString(), { status: 500 });
    }
}

/**
 * Here's one example of how to modify a request to
 * remove a specific prefix, in this case `/docs` from
 * the url. This can be useful if you are deploying to a
 * route on a zone, or if you only want your static content
 * to exist at a specific path.
 */
function handlePrefix(prefix) {
    return request => {
        // compute the default (e.g. / -> index.html)
        const defaultAssetKey = mapRequestToAsset(request);
        const url = new URL(defaultAssetKey.url);

        // strip the prefix from the path for lookup
        url.pathname = url.pathname.replace(prefix, '/');

        // inherit all other props from the default request
        return new Request(url.toString(), defaultAssetKey);
    };
}
