const Image = require('@11ty/eleventy-img');

const dev = process.env.NODE_ENV !== 'production';

async function rasterImage(src, alt, widths, sizes) {
    const defaultWidths = [300, 600, 1200];
    let defaultFormats = ['webp', 'jpeg'];
    let srcset;

    if (!dev) {
        defaultFormats = ['avif', 'webp', 'jpeg'];
    }

    try {
        srcset = widths.split(',');
        srcset = srcset.map(x => +x);
    } catch {
        srcset = defaultWidths;
    }

    const metadata = await Image(src, {
        widths: srcset,
        formats: defaultFormats,
        outputDir: './_site/img/',
    });

    const imageAttributes = {
        alt,
        sizes,
        //! Disable these if you want to lint responsive images during development.
        loading: 'lazy',
        decoding: 'async',
    };

    // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
    return Image.generateHTML(metadata, imageAttributes);
}

async function svgImage(src, alt) {
    const metadata = await Image(src, {
        formats: ['svg'],
        outputDir: './_site/img/svg/',
        urlPath: '/img/svg/',
    });

    const imageAttributes = {
        alt,
        loading: 'lazy',
        decoding: 'async',
    };

    // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
    return Image.generateHTML(metadata, imageAttributes);
}

module.exports = { svgImage, rasterImage };
