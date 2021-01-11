const site = require('../../_data/site');

// Check if localized content for the current language exists.
// Return the default (en) content if not present.
module.exports = (content, locale) => {
    const { defaultLocale } = site;
    if (content[locale]) {
        return content[locale];
    }

    return content[defaultLocale];
};
