const site = require('../site');

const maintainer = {
    en: `The ${site.name.en} is maintained by <a href="//fershad.com" data-external>Fershad Irani</a>. 
    Community <a href="en/about#contribute">contributions</a> and <a href="en/about#support">support</a> are welcome.`,
    zh: `${site.name.zh}由 <a href="//fershad.com" data-external>Fershad Irani</a> 維護. 
    歡迎大家所有的<a href="zh/about#contribute">貢獻</a>和<a href="zh/about#support">支持</a>`,
};

const source = {
    en: `Data for this project is sourced from <a href="/en/about#data">publicly available datasets</a>.`,
    zh: `該項目的數據來自<a href="/zh/about#data">公開可用數據集</a>`,
};

module.exports = { maintainer, source };
