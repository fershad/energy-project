const site = require ('./src/_data/site')

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
        const data = {'decade': decade, 'years': years} 
        decades.push(data)
        return decades
      })
    
      eleventyConfig.setDataDeepMerge(true)
      return {
        dir: {
          input: 'src'
        },
      }
}