const purgeStyles = require('./src/_11ty/transforms/purge-css')
const htmlMin = require('./src/_11ty/transforms/html-min')
const {
  rasterImage,
  svgImage
} = require('./src/_11ty/shortcode/image')
const localiser = require('./src/_11ty/filter/localiser')
const yearlyData = require('./src/_11ty/filter/byDecades')

const dev = process.env.NODE_ENV !== 'production';

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
    public: './'
  })

  eleventyConfig.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: false,
  })

  eleventyConfig.setLiquidOptions({
    dynamicPartials: true
  });

  eleventyConfig.setDataDeepMerge(true)
  // ! Shortcodes
  //* Image shortcodes
  eleventyConfig.addShortcode("image", rasterImage);
  eleventyConfig.addShortcode("svgImage", svgImage);

  //* Add direction arrow besides stats
  eleventyConfig.addShortcode("direction", require("./src/_11ty/shortcode/upDown"));

  //* Add fathom analytics tracking script in build
  eleventyConfig.addShortcode("analytics", function () {
    if (dev) {
      return `<!-- Fathom analytics code here -->`
    }

    if (process.env.NODE_ENV === 'staging') {
      return `<!-- Fathom - beautiful, simple website analytics -->
      <script src="https://heron.cleanenergyproject.tw/script.js" data-site="TMLDWNIR" defer></script>
      <!-- / Fathom -->`
    }
    
    return `<!-- Fathom - beautiful, simple website analytics --><script src="https://heron.cleanenergyproject.tw/script.js" data-site="ZRTUZXPV" defer></script><!-- / Fathom -->`
  })

  // ! Filters
  //*  Localisation filter - looks for current locale, defaults to EN
  eleventyConfig.addFilter('defaultLocale', localiser);

  //* Filter to take yearly data & group by decades (used for MOE data)
  eleventyConfig.addFilter("yearlyData", yearlyData)

  // ! Collections
  //* Create action collections to be used on the homepage
  eleventyConfig.addCollection("homepageActionsEN", function (collectionApi) {
    return collectionApi.getFilteredByTags("action", "homepage", "en");
  });

  eleventyConfig.addCollection("homepageActionsZH", function (collectionApi) {
    return collectionApi.getFilteredByTags("action", "homepage", "zh");
  });

  eleventyConfig.addCollection("ActionsZH", function (collectionApi) {
    return collectionApi.getFilteredByTags("action", "zh");
  });

  eleventyConfig.addCollection("ActionsEN", function (collectionApi) {
    return collectionApi.getFilteredByTags("action", "en");
  });

  // ! Transforms
  //* Inline critical CSS & purge all unused CSS per page
  eleventyConfig.addTransform('purge-styles', purgeStyles);

  //* Minify the HTML
  eleventyConfig.addTransform("htmlmin", htmlMin);

  return {
    dir: {
      input: 'src'
    },
  }
}