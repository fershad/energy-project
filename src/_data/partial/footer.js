const site = require('../site');

const maintainer = {
    en: `<p>The ${site.name.en} is maintained by <a href="//fershad.com" data-external>Fershad Irani</a>.</p>
    <p>Community <a href="/en/about#contribute">contributions</a> and <a href="/en/about#support">support</a> are welcome.</p>`,
    zh: `<p>${site.name.zh}由 <a href="//fershad.com" data-external>Fershad Irani</a> 維護. </p>
    <p>歡迎大家所有的<a href="/zh/about#contribute">貢獻</a>和<a href="/zh/about#support">支持</a></p>`,
};

const source = {
    en: `Data for this project is sourced from <a href="/en/faq">publicly available datasets</a>.`,
    zh: `該項目的數據來自<a href="/zh/faq">公開可用數據集</a>`,
};

module.exports = { maintainer, source };
