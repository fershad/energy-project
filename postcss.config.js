const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [autoprefixer, require('postcss-import'), require('postcss-nesting')],
};
