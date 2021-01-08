const { PurgeCSS } = require('purgecss');
const path = require('path');
const fs = require('fs');
const critical = require('critical');

const dev = process.env.NODE_ENV !== 'production';

/*
 * Extract critical CSS for desktop & mobile. Inline that in the head (blocks render)
 * Take the remaining CSS for the page & run it through purgeCSS so that we only have used CSS remaining
 * With the remaining CSS & raw HTML
 *      - Search for <section>, <article>, <footer> tags
 *      - Run the tag content & unused CSS through purgeCSS
 *      - Return the block with HTML first
 *      - All remaining unused CSS is run one final time against the HTML & added to the end of the document.
 */
// REGEX for HTML tag search: /<\s*div[^>]*>(.*?)<\s*/\s*div>/gis
// Extract critical CSS for each page from main css file
// Inline critical CSS
// Return new HTML and unused CSS

const extractCritical = async (content, outputPath) => {
    const { html, uncritical } = await critical.generate({
        inline: true,
        base: path.dirname(outputPath),
        html: content,
        css: ['/.cache/main.css'],
        minify: !dev,
        height: 1080,
        width: 1920,
        rebase: ({ originalUrl }) => originalUrl,
    });

    return { html, uncritical };
};

module.exports = async (content, outputPath) => {
    // const styles = fs.readFileSync(path.join(__dirname, `/../../_css_cache/main.css`));
    const pattern = /<\s*section[^>]*>.*?<\s*\/\s*section>/gs;
    let result;

    if (outputPath.endsWith('.html')) {
        // Return HTML with critical CSS inlined
        // Return uncritical CSS for further purge & file creation
        const { html, uncritical } = await extractCritical(content, outputPath);

        let sections = html.matchAll(pattern);
        sections = Array.from(sections);

        if (!dev) {
            // Process uncritical CSS using PurgeCSS
            const [{ css: output }] = await new PurgeCSS().purge({
                content: [{ raw: content, extension: 'html' }],
                css: [{ raw: uncritical }],
                safelist: ['dark', 'hidden'],
            });
            result = output;
        }

        // Create a unique filename for the uncritical CSS file
        // const uncriticalCSSFileName = `${uid()}.css`;

        // // Create folder in assets for uncritical CSS to live
        // await createFolder(path.join(__dirname, `/../../dist/assets/css`));

        if (dev) {
            result = uncritical;
        }

        //     // Write uncritical CSS to file
        //     // Add it to HTML document
        //     // Return HTML
        //     await fs.writeFile(path.join(__dirname, `/../../dist/assets/css/${uncriticalCSSFileName}`), result, function(
        //         error,
        //         result
        //     ) {
        //         if (error) {
        //             console.log(error);
        //         }
        //     });
        //     const linkToFile = `<link href='/assets/css/${uncriticalCSSFileName}' rel="stylesheet" media="nope!" onload="this.media='all'">
        // <noscript><link href='/assets/css/${uncriticalCSSFileName}' rel='stylesheet'></noscript>`;
        //     return html.replace(pattern, `${linkToFile}</head>`);
    }
    return content;
};
