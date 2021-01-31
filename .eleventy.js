const purgeStyles = require('./src/_11ty/transforms/purge-css')
const critical = require('./src/_11ty/transforms/critical')
const htmlMin = require('./src/_11ty/transforms/html-min')
const imgPlaceholder = require('./src/_11ty/transforms/img-placeholder')
const {
  rasterImage,
  svgImage
} = require('./src/_11ty/shortcode/image')
const analytics = require('./src/_11ty/shortcode/analytics')
const localiser = require('./src/_11ty/filter/localiser')
const getLocalised = require('./src/_11ty/filter/getLocalised')
const yearlyData = require('./src/_11ty/filter/byDecades')
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

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
  eleventyConfig.addShortcode("analytics", analytics)

  //* Shortcode to put noindex metadata into staging site
  eleventyConfig.addShortcode("noindex", () => { 
      if (dev) {
        return `<meta name="robots" content="noindex, nofollow, noarchive">`
      }
    })

  // ! Filters
  //*  Localisation filter - looks for current locale, defaults to EN
  eleventyConfig.addFilter('defaultLocale', localiser);

  //* Localisation filter used to get the localised versions of news stories for the homepage 
  eleventyConfig.addFilter('getLocalised', getLocalised);

  //* Filter to take yearly data & group by decades (used for MOE data)
  eleventyConfig.addFilter("yearlyData", yearlyData)

  eleventyConfig.addFilter("sortByPublished", function(news) {
    const arr = Object.entries(news);

    arr.sort(function(a, b) {
      aDate = new Date(a[1].publishedDate)
      bDate = new Date(b[1].publishedDate)
      return bDate - aDate;
    });

    return arr;
  })

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

  eleventyConfig.addCollection("sitemap", function(collectionApi) {
    return collectionApi
      .getAll()
      .map((item, index, all) => {
        return {
          url: item.url,
          date: item.date,
          data: {
            ...item.data,
            sitemap: {
              ...item.data.sitemap,
              links:
                all
                  // Find all the translations of the current item.
                  // This assumes that all translated items that belong together
                  // have the same `translationKey` value in the front matter.
                  .filter(other => other.data.translationKey === item.data.translationKey && other.data.locale !== item.data.locale)
   
                  // Map each translation into an alternate link. See https://github.com/ekalinin/sitemap.js/blob/master/api.md#ILinkItem
                  // Here we assume each item has a `lang` value in the front
                  // matter. See https://support.google.com/webmasters/answer/189077#language-codes
                  .map(translation => {
                    return {
                      url: translation.url,
                      lang: translation.data.locale,
                    };
                  }),
            },
          },
        }
      });
  });

  // ! Transforms
  //* Inline critical CSS & purge all unused CSS per page
  eleventyConfig.addTransform('critical', critical);

  //* Inline critical CSS & purge all unused CSS per page
  eleventyConfig.addTransform('purge-styles', purgeStyles);
  
  if (!dev) {
    //* Inline critical CSS & purge all unused CSS per page
    eleventyConfig.addTransform('imgPlaceholder', imgPlaceholder);
  }

  if (!dev) {
    //* Minify the HTML
    eleventyConfig.addTransform("htmlmin", htmlMin);
  }

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://example.com",
    },
  });

  return {
    dir: {
      input: 'src',
      output: process.env.NODE_ENV !== 'production' ? '_staging' : '_site'
    },
  }
}