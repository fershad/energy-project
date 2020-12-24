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
      return {
        dir: {
          input: 'src'
        },
      }
}