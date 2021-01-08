const site = require ('./src/_data/site')
const purgeStyles = require('./src/_11ty/filter/purge-css')
const dev = process.env.NODE_ENV !== 'production';

const Image = require("@11ty/eleventy-img");
async function imageShortcode(src, alt, widths, sizes) {
  const defaultWidths = [300, 600, 1200]
  let defaultFormats = ["webp", "jpeg"]
  let srcset
  
  if (!dev) { 
    defaultFormats = ["avif", "webp", "jpeg"]
  }

  try {
    srcset = widths.split`", "`.map(x=>+x)
  } catch {
    srcset = defaultWidths
  }
  let metadata = await Image(src, {
    widths: srcset,
    formats: defaultFormats,
    outputDir: './_site/img/'
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
    public: './'
  })

  eleventyConfig.addPassthroughCopy({
    img: './'
  })

  eleventyConfig.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: false,
  })

  eleventyConfig.setLiquidOptions({
    dynamicPartials: true
  });

  eleventyConfig.addLiquidShortcode("image", imageShortcode);

  eleventyConfig.setDataDeepMerge(true)

      // Check if localized content for the current language exists.
      // Return the default (en) content if not present.
      eleventyConfig.addFilter("defaultLocale", (content, locale) => {
        const defaultLocale = site.defaultLocale
        if(content[locale]) {
          return content[locale]
        }

        return content[defaultLocale]
      });

      // Filter to return the localized news stories
      eleventyConfig.addFilter("getLocalized", function (arr, locale) {

        let localized = {}
    
        for (const key in arr) {
          if (arr.hasOwnProperty(key)) {
            const language = arr[key].language;
            if (language === locale) {
              localized[key] = arr[key]
            }
          }
        }
    
        return localized
      });

      // Filter to inline CSS
      // eleventyConfig.addFilter("inlinecss", require("./src/_11ty/filter/inline-css"));
      eleventyConfig.addShortcode("direction", require("./src/_11ty/shortcode/upDown"));

      // Create action collections to be used on the homepage
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

      eleventyConfig.addFilter("yearlyData", function (arr) {
        // Loop array to get each unique year
        // Loop through again & assign monthly data for each year
        const decades = [];
        let prevYear = 0;
        let prevDecade = 0;
        let years = [];
        let monthlyData = [];
        let decade;
    
        for (let i = 0; i < arr.length; i++) {
          const el = arr[i]
          const westernYear = el.fields.Year + 1911;
          let thisDecade = Math.floor(westernYear / 10) * 10;
    
          if (prevDecade == 0) {
            prevDecade = thisDecade
          }
    
          if (thisDecade != prevDecade) {
            years.push(monthlyData)
            // This removes the first empty element of the arrays that are reset below
            if (years[0].length == 0) {
              years.shift();
            }
            const data = {'decade': decade, 'years': years} 
            decades.push(data)
            years = []
            monthlyData = []
            prevDecade = thisDecade;
          }

          decade = thisDecade;
    
          if (prevYear == 0) {
            prevYear = westernYear
          }
    
          if (westernYear != prevYear) {
            years.push(monthlyData)
            monthlyData = [];
            prevYear = westernYear
          }
    
          monthlyData.push(el)
        }
        
        // const uniqueYears = years.filter(unique)
        years.push(monthlyData)
        // This removes the first empty element of the arrays that are reset below
        if (years[0].length == 0) {
          years.shift();
        }
        const data = {'decade': decade, 'years': years} 
        decades.push(data)
        return decades
      })

      eleventyConfig.addShortcode("analytics", function() {
        if(dev) {
          return `<!-- Fathom analytics code here -->`
        }
        return `<!-- Fathom - beautiful, simple website analytics --><script src="https://heron.cleanenergyproject.tw/script.js" data-site="ZRTUZXPV" defer></script><!-- / Fathom -->`
      })

      eleventyConfig.addTransform('purge-styles', purgeStyles);
    
      return {
        dir: {
          input: 'src'
        },
      }
}