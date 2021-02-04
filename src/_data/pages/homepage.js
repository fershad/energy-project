const site = require('../site');

const intro = {
    en: `${site.description.en} Data for this project is sourced from <a href="/en/faq#data-source">publicly available datasets</a>.`,
    zh: `${site.description.zh} 此計畫的數據皆來源於<a href="/zh/faq#data-source">公開的數據集</a>.`,
};

const data = {
    heading: {
        en: 'Latest Data',
        zh: '最新數據',
    },
    paragraph: {
        en: `The data below shows the energy generated using <b>low-carbon energy sources</b> as a percentage of total energy production.`,
        zh: `下面的數據為以<b>低碳方式生產的能源</b>佔總生產能源的百分比.`,
    },
    paragraphRenewable: {
        en: `The data below shows the energy generated using only <b>renewable energy sources</b> as a percentage of total energy production.`,
        zh: `下面的數據為使用<b>再生能源生產的能源</b>佔總生產能源的百分比.`,
    },
    grid: {
        totalCleanTitle: {
            en: 'Total Clean Energy Generation',
            zh: '潔淨能源總產量佔比',
        },
        totalRenewableTitle: {
            en: 'Total Renewable Energy Generation',
            zh: '再生能源總產量佔比',
        },
    },
    note: {
        en: 'Why this energy mix? <a href="/en/faq">Read the FAQ.</a>',
        zh: '為什麼只列出這些能源類型？<a href="/zh/faq">請看FAQ</a>.',
    },
    historical: {
        en: `Historical data.`,
        zh: `歷史資料.`,
    },
    showClean: {
        en: 'Show only clean sources',
        zh: '看低碳能源',
    },
    showRenewables: {
        en: 'Show all renewables',
        zh: '看所有再生能源',
    },
};

const action = {
    cta: {
        en: 'See more actions',
        zh: '更多減碳行動',
    },
};

const news = {
    extra: {
        en: `Find more in the <a href="/en/news">news archive</a>.`,
        zh: `去 新聞檔案室 <a href="/zh/news">看更多</a>.`,
    },
};

module.exports = { intro, data, action, news };
