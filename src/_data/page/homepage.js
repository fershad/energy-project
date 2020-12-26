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
        en: `The data below shows the energy generated using clean energy sources as a percentage of total energy production. 
            See <a href="/en/data/">historical data here</a>.`,
        zh: '在下面的數據顯示了使用清潔能源生產的能源佔總能源生產的百分比. <a href="/zh/data/">看所有個月的數據</a>.',
    },
};

module.exports = { intro, data };
