const site = require('../site');

const maintainer = {
    en: `The ${site.name.en} is maintained by <a href="//fershad.com" data-external>Fershad Irani</a>. 
    Community <a href="en/about#contribute">contributions</a> and <a href="en/about#support">support</a> are welcome.`,
    zh: `${site.name.zh}由 <a href="//fershad.com" data-external>Fershad Irani</a> 維護. 
    歡迎大家所有的<a href="zh/about#contribute">貢獻</a>和<a href="zh/about#support">支持</a>`,
};

const subscribe = {
    intro: {
        en: `Subscribe for updates (I'll only email you once a month at most.)`,
        zh: '',
    },
    email: {
        en: 'Enter your email',
        zh: '加入你的電信',
    },
    button: {
        en: 'Subscribe',
        zh: '訂閱',
    },
    buttondown: {
        en: `<a href="https://buttondown.email" target="_blank" rel="nofollow">Powered by Buttondown.</a> If you're having trouble subscribing email me directly at <a href="mailto:cleanenergyproject@fershad.com">cleanenergyproject@fershad.com</a>.`,
        zh: `<a href="https://buttondown.email" target="_blank" rel="nofollow">由Buttondown強力驅動.</a> 如果不能訂閱，用<a href="mailto:cleanenergyproject@fershad.com">cleanenergyproject@fershad.com</a>發電信給我.`,
    },
};

const source = {
    en: `Data for this project is sourced from <a href="/en/about#data">publicly available datasets</a>.`,
    zh: `該項目的數據來自<a href="/zh/about#data">公開可用數據集</a>`,
};

module.exports = { maintainer, source, subscribe };
