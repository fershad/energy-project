module.exports = (arr, locale) => {
    const localised = arr.filter(article => article[1].language === locale);
    return localised;
};
