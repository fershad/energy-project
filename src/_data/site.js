const defaultLocale = 'en';

const locales = [
    { code: 'en', name: 'EN' },
    { code: 'zh', name: '中' },
];

const baseUrl =
    process.env.NODE_ENV === 'production' ? 'https://cleanenergyproject.tw' : 'https://tw-energy.fershad.workers.dev';

const name = {
    en: 'Taiwan Clean Energy Project',
    zh: '台灣清潔能源項目',
};

const description = {
    en:
        "The Taiwan Clean Energy Project is an endeavour to track the contribution of low-carbon energy sources to Taiwan's overall energy generation mix.",
    zh: '台灣清潔能源項目是一個努力在追踪低碳能源的貢獻對台灣的整體能源生產組合.',
};

const ogImgAlt = {
    en: 'Illustrated image of blue globe with Taiwan drawn in the middle.',
    zh: '台灣在藍色地球中間的圖片.',
};

const contact = {
    email: 'cleanenergyproject@fershad.com',
    twitterURL: 'https://twitter.com/@cleanenergy_tw',
    twitterHandle: '@cleanenergy_tw',
};

const support = {
    kofi: {
        url: 'https://ko-fi.com/cleanenergy_tw',
        action: { en: 'Support on Ko-fi', zh: '' },
    },
    patreon: {
        url: 'https://www.patreon.com/cleanenergy_tw',
        action: { en: 'Support on Patreon', zh: '' },
    },
};

const subscribe = {
    heading: {
        en: 'Stay updated',
        zh: '',
    },
    intro: {
        en: `I'll be periodically updating and adding actions. If you'd like to stay updated with changes then subscribe to email updates using the form below. I'll only send out one email per month, I promise.`,
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

const emailMe = {
    en: 'Email me',
    zh: '聯絡我',
};

module.exports = { defaultLocale, baseUrl, name, description, ogImgAlt, contact, support, locales, emailMe, subscribe };
