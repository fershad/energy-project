const critical = require('critical');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';

module.exports = async (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
        const { html } = await critical.generate({
            inline: true,
            base: path.dirname(outputPath),
            html: content,
            css: ['/.cache/css/critical-generic.css'],
            minify: !dev,
            height: 1080,
            width: 1920,
            rebase: ({ originalUrl }) => originalUrl,
        });

        return html;
    }

    return content;
};
