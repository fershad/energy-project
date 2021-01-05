const intro = {
    paragraph: {
        en: `Data for this project is sourced from publicly available datasets. Below is historical data that can give you a further insight into Taiwan's energy production mix, and carbon emissions.`,
        zh: '該項目的數據來自公開可用數據集.',
    },
};

const moe = {
    heading: {
        en: 'Energy Production',
        zh: '',
    },
    paragraph: {
        en: 'Energy production for various sources as a percentage of total energy generation.',
        zh: '',
    },
    source: {
        en: `Source: <a href="https://www.moeaboe.gov.tw/wesnq/Views/B01/wFrmB0102.aspx" data-external>Taiwan Ministry of Economic Affairs - Bureau of Energy</a>`,
        zh: ``,
    },
};

const globalCarbon = {
    heading: {
        en: 'Total Emissions',
        zh: '',
    },
    paragraph: {
        en: `Taiwan's yearly total carbon dioxide emissions (shown in million tonnes).`,
        zh: '',
    },
    source: {
        en: `Source: <a href="https://www.globalcarbonproject.org/" data-external>Global Carbon Project</a> -  Friedlingstein et al. 2020`,
        zh: ``,
    },
    table: {
        caption: {
            en: 'Total CO2 emissions for Taiwan.',
            zh: '',
        },
        note: {
            en: `All values below are in <em>millions of tonnes</em> of CO2 (i.e. add '000,000 to the end).`,
            zh: ``,
        },
    },
};

module.exports = { intro, globalCarbon, moe };
