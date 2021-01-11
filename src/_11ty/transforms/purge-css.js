const { PurgeCSS } = require('purgecss');
const path = require('path');
const fs = require('fs');
const critical = require('critical');
const cheerio = require('cheerio');

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

    if (outputPath.endsWith('.html')) {
        // Return HTML with critical CSS inlined
        // Return uncritical CSS for further purge & file creation
        const { html, uncritical } = await extractCritical(content, outputPath);

        const $ = cheerio.load(html);
        const body = $('body');

        if (body.length > 0) {
            // for (let index = 0; index < sections.length; index++) {
            // const section = sections[index];
            const [{ css: output }] = await new PurgeCSS().purge({
                content: [{ raw: $(body).html(), extension: 'html' }],
                css: [{ raw: uncritical }],
                safelist: ['no-js'],
            });
            const result = output;
            const inlineStyle = `<style type="text/css">${result}</style>`;

            body.prepend(inlineStyle);
            // }
        }

        return $.html();
    }
    return content;
};
