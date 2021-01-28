const defaultLocale = 'en';

const locales = [
    { code: 'en', name: 'EN' },
    { code: 'zh', name: '中' },
];

const baseUrl =
    process.env.NODE_ENV === 'production' ? 'https://cleanenergyproject.tw' : 'https://staging.cleanenergyproject.tw';

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
        zh: '保持最新',
    },
    paragraph: {
        en: `I'll be periodically updating data and content on this site. If you'd like to stay updated with changes then subscribe to email updates using the form below. I'll only send out one email per month, I promise.`,
        zh:
            '我將定期更新此站點上的數據和內容。 如果您想隨時了解更改，請使用以下表格訂閱電子郵件更新。 我保證，我每月只會發送一封電子郵件。',
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
        en: `<a href="https://buttondown.email" target="_blank" rel="nofollow noopener">Powered by Buttondown.</a> If you're having trouble subscribing <a href="mailto:cleanenergyproject@fershad.com">email me directly</a>.`,
        zh: `<a href="https://buttondown.email" target="_blank" rel="nofollow noopener">由Buttondown強力驅動.</a> 如果不能訂閱，<a href="mailto:cleanenergyproject@fershad.com">發電信給我</a>.`,
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
