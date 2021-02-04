const intro = {
    paragraph: {
        en: `Data for this project is sourced from publicly available datasets. Below is historical data that can give you further insight into Taiwan's energy production mix, and carbon emissions.`,
        zh: '此計畫的數據皆來源於公開的數據集. 下面的歷史資料能提供你更多資訊來了解台灣能源生產的組成和碳排放量.',
    },
};

const moe = {
    heading: {
        en: 'Energy Production',
        zh: '能源生產',
    },
    paragraph: {
        en: 'Energy production for various sources as a percentage of total energy generation.',
        zh: '各種能源的生產量佔總生產量的百分比。',
    },
    source: {
        en: `Source: <a href="https://www.moeaboe.gov.tw/wesnq/Views/B01/wFrmB0102.aspx" data-external>Taiwan Ministry of Economic Affairs - Bureau of Energy</a>`,
        zh: `數據來源: <a href="https://www.moeaboe.gov.tw/wesnq/Views/B01/wFrmB0102.aspx" data-external>台灣經濟部能源局</a>`,
    },
    table: {
        caption: {
            en: 'Energy production (by type)',
            zh: '能源生產 (按類型)',
        },
    },
};

const globalCarbon = {
    heading: {
        en: 'Total Emissions',
        zh: '排放總量',
    },
    paragraph: {
        en: `Taiwan's yearly total carbon dioxide emissions (shown in million tonnes).`,
        zh: '台灣每年的二氧化碳總排放量（單位: 百萬噸）。',
    },
    source: {
        en: `Source: <a href="https://www.globalcarbonproject.org/" data-external>Global Carbon Project</a> -  Friedlingstein et al. 2020`,
        zh: `數據來源: <a href="https://www.globalcarbonproject.org/" data-external>Global Carbon Project</a> -  Friedlingstein et al. 2020`,
    },
    table: {
        caption: {
            en: 'Total CO<sub>2</sub> emissions for Taiwan.',
            zh: '台灣二氧化碳排放總量',
        },
        note: {
            en: `All values below are in <em>millions of tonnes</em> of CO<sub>2</sub> (i.e. add '000,000 to the end).`,
            zh: `下方數字皆以<em>百萬噸</em> (二氧化碳) 為單位。`,
        },
    },
};

module.exports = { intro, globalCarbon, moe };
