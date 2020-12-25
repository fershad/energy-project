const path = require('path');
const postcss = require('postcss');

const dev = process.env.NODE_ENV !== 'production';

module.exports = async code => {
    if (!dev) {
        return postcss([
            require('precss'),
            require('postcss-import'),
            require('postcss-custom-selectors'),
            require('autoprefixer'),
            require('cssnano'),
        ])
            .process(code)
            .then(result => result.css);
    }
    return postcss([
        require('precss'),
        require('postcss-import'),
        require('postcss-custom-selectors'),
        require('autoprefixer'),
    ])
        .process(code)
        .then(result => result.css);
};
