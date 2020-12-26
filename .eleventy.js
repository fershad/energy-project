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
      })

      // Filter to inline CSS
      // eleventyConfig.addFilter("inlinecss", require("./src/_11ty/filter/inline-css"));
      eleventyConfig.addShortcode("direction", require("./src/_11ty/shortcode/upDown"));
    
      eleventyConfig.setDataDeepMerge(true)
      return {
        dir: {
          input: 'src'
        },
      }
}