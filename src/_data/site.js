const defaultLocale = 'en';

const locales = [
    { code: 'en', name: 'EN' },
    { code: 'zh', name: '中' },
];

const baseUrl =
    process.env.NODE_ENV === 'production' ? 'https://cleanenergyproject.tw' : 'https://staging.cleanenergyproject.tw';

const name = {
    en: 'Taiwan Clean Energy Project',
    zh: '台灣潔淨能源計畫',
};

const description = {
    en:
        "The Taiwan Clean Energy Project is an endeavour to track the contribution of low-carbon energy sources to Taiwan's overall energy generation mix.",
    zh: '台灣潔淨能源計畫嘗試去追踪低碳能源對台灣整體能源生產的貢獻.',
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
        action: { en: 'Support on Ko-fi', zh: '用Ko-fi支持' },
    },
    patreon: {
        url: 'https://www.patreon.com/cleanenergy_tw',
        action: { en: 'Support on Patreon', zh: '用Patreon支持' },
    },
};

const subscribe = {
    heading: {
        en: 'Stay updated',
        zh: '追蹤最新消息',
    },
    paragraph: {
        en: `I'll be periodically updating data and content on this site. If you'd like to stay updated with changes then subscribe for monthly email updates using the form below.`,
        zh:
            '我將定期更新此網站上的數據和內容。 如果您想隨時了解最新資訊，歡迎使用以下表格訂閱電子報。 我保證每個月只會發送一封郵件。（內容目前僅有英文版本）',
    },
    email: {
        en: 'Enter your email',
        zh: '書入您的電子郵件',
    },
    button: {
        en: 'Subscribe',
        zh: '訂閱',
    },
    buttondown: {
        en: `Powered by <a href="https://buttondown.email" target="_blank" rel="nofollow noopener">Buttondown.</a> If you're having trouble subscribing <a href="mailto:cleanenergyproject@fershad.com">email me directly</a>.`,
        zh: `服務由<a href="https://buttondown.email" target="_blank" rel="nofollow noopener">Buttondown</a>提供.`,
    },
};

const emailMe = {
    en: 'Email me',
    zh: '聯絡我',
};

const skipToMain = {
    en: 'Skip to main content',
    zh: '跳到主要內容',
};

module.exports = {
    defaultLocale,
    baseUrl,
    name,
    description,
    ogImgAlt,
    contact,
    support,
    locales,
    emailMe,
    subscribe,
    skipToMain,
};
