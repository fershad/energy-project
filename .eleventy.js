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

        // Shortcode to inline CSS
        eleventyConfig.addFilter("inlinecss", require("./src/_11ty/shortcodes/inline-css"));

        return cotent[defaultLocale]
      })
    
      eleventyConfig.setDataDeepMerge(true)
      return {
        dir: {
          input: 'src'
        },
      }
}