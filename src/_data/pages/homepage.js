const site = require('../site');

const intro = {
    en: `${site.description.en} Data for this project is sourced from <a href="/en/about#data">publicly available datasets</a>.`,
    zh: `${site.description.zh} 該項目的數據來自<a href="/zh/about#data">公開可用數據集</a>`,
};

const data = {
    heading: {
        en: 'Latest Data',
        zh: '最新數據',
    },
    paragraph: {
        en: `The data below shows the energy generated using <b>low-carbon energy sources</b> as a percentage of total energy production.`,
        zh: `在下面的數據顯示了使用<b>低碳能源</b>生產的能源佔總能源生產的百分比.`,
    },
    paragraphRenewable: {
        en: `The data below shows the energy generated using only <b>renewable energy sources</b> as a percentage of total energy production.`,
        zh: `在下面的數據顯示了使用<b>再生能源</b>生產的能源佔總能源生產的百分比.`,
    },
    grid: {
        totalCleanTitle: {
            en: 'Total Clean Energy Generation',
            zh: '總清潔能源生產',
        },
        totalRenewableTitle: {
            en: 'Total Renewable Energy Generation',
            zh: '總再生能源生產',
        },
    },
    note: {
        en: 'Why this energy mix? <a href="/en/faq">Read the FAQ.</a>',
    },
    historical: {
        en: `Historical data.`,
        zh: `所有個月的數據.`,
    },
};

const action = {
    heading: {
        en: 'Reduce your footprint',
        zh: '減少你的碳足跡',
    },
    paragraph: {
        en: `<p>We can all do our part to reduce CO2 emissions through small changes in lifestyle and behaviour. More often than not these changes don't come at a large financial cost, and simply require a small change in mindset or habits.</p> <p>Here are just a few actions you can take to reduce your personal carbon footprint.</p>`,
        zh: '<p>您可以在日常生活中採取的行動, 開始邁向低碳, 低污染的生活方式.</p>',
    },
    cta: {
        en: 'See more actions',
        zh: '看更多',
    },
};

const news = {
    heading: {
        en: `News & articles`,
        zh: `新聞和文章`,
    },
    paragraph: {
        en: `A collection of news articles & blog posts in English/Chinese about the situation in Taiwan. <br>Find more in the <a href="/en/news">news archive</a>.`,
        zh: `有關台灣局勢的一些新聞文章和博客和 (中文 / 英文的). <br>看更多在 <a href="/zh/news">新聞檔案</a>.`,
    },
};

module.exports = { intro, data, action, news };
