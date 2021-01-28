module.exports = (arr, locale) => {
    const localised = {};

    for (const key in arr) {
        if (arr.hasOwnProperty(key)) {
            const { language } = arr[key];
            if (language === locale) {
                localised[key] = arr[key];
            }
        }
    }

    return localised;
};
