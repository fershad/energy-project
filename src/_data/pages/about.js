const site = require('../site');

const calculateYears = () => {
    const now = new Date();
    const thisYear = now.getFullYear();

    return Math.floor(thisYear - 2013);
};

const yearsInTW = calculateYears();

const intro = {
    en: `<p>The idea behind this project started one night while I was walking around the Guting district in Taipei. 
    Looking up at the multitude of illuminated billboards and advertising screens I found myself wondering 
    <em>'is any of this stuff powered by renewable energy?'</em>. That thought got my mind ticking, and I started wondering just
    how much of Taiwan's total electricity production came from renewables. This project is born out of that thought.</p>`,
    zh: `<p>一天晚上我在台北市古亭一帶散步時，抬頭看見路上一個又一個發亮的招牌和廣告屏幕, 不禁想著<em>『這些有多少是由再生能源供電的？』</em>。從這時候我開想知道台灣電力總產量中有多少來自再生能源。就是這樣的想法讓我開始這個計畫。`,
};

const aims = {
    heading: {
        en: 'Project aims',
        zh: '目標',
    },
    paragraph: {
        en: `${site.description.en} I hope that it will be able to track energy production all the way through to the day Taiwan achieves 100% 
            power generation from clean sources.`,
        zh: `${site.description.zh} 我希望能持續追踪，直到台灣100％使用乾淨的能源為止。
        計畫的另一個目的是使人們開始思考作為個人可以做些什麼以實現更永續的低碳生活。 至本網站的「行動」部分，看更多資訊, 方法和建議。`,
    },
    learning: {
        en: `Another aim of this project is to get people to start thinking about what they can do as individuals to live more sustainable, low-carbon lives.
        Head over to the <a href="/en/actions">actions</a> section of this website to find information, tips, and suggestions on ways to start.`,
        zh: `該項目的另一個目的是使人們開始思考他們作為個人可以做些什麼以實現更可持續的低碳生活。
        轉至本網站的<a href="/zh/actions">操作</a>部分，以找到有關啟動方法的信息，技巧和建議。`,
    },
    why: {
        en: `Why clean energy? Where does the data come from? These questions and more are answered in the <a href="/en/faq">FAQ</a>.`,
        zh: '',
    },
};

const who = {
    heading: { en: 'Who am I?', zh: '我是誰？' },
    paragraph: {
        en: `<p>I'm <a href='//fershad.com/about' data-external>Fershad Irani</a>, an Aussie who's been living in Taiwan for over ${yearsInTW} years.</p>
        <p>I work as a web performance consultant, meaning that I help companies build faster, smoother, better performing web experiences. This work also allows me to make websites more environmentally friendly - because the better 
        optimised a website, the less energy that's required to serve it for each user.</p>`,
        zh: `<p>我是<a href='//fershad.com/about' data-external>尹沛學</a>。我是澳洲人，住在台灣已經${yearsInTW}年多。<p>
        <p>我是一個網站效能顧問，我幫助企業網站提高運作效率以優化使用者體驗。 這項工作也使我能讓網站更加環保，因為網站的效能越好，每次造訪所需的能源就越少。</p>`,
    },
};

const roadmap = {
    heading: { en: 'Roadmap & costs', zh: '計劃和費用' },
    paragraph: {
        en: `You can find a roadmap of planned website features and content additions in <a href="https://www.notion.so/fershad/Clean-Energy-Project-a7d20c325f364304a42d1e0b69497aa0" data-external>this Notion document</a>.
         Within the same document, you'll also find a breakdown of any costs incurred while running this project.`,
        zh: `您可以在<a href="https://www.notion.so/fershad/Clean-Energy-Project-a7d20c325f364304a42d1e0b69497aa0" data-external>這個Notion頁面</a>中看到計劃的網站功能和未來將添加的內容。在這份文件中，您也能看到此項計畫產生的所有費用明細。`,
    },
};

const contribute = {
    heading: {
        en: 'Contribute',
        zh: '貢獻',
    },
    paragraph: {
        en: `Community contributions to this project are welcome. I'd love to hear from you if you:`,
        zh: `非常歡迎大家為該計畫做出貢獻。 我希望收到您的來信, 如果您：`,
    },
    list: {
        data: {
            en: 'Know of any other publicly available datasets that might be useful for this project.',
            zh: '知道可能對此計畫有用的任何其他公開可用的數據集。',
        },
        action: { en: `Have any content ideas you'd like to share.`, zh: '有任何您想分享的行動或想法。' },
        info: {
            en: 'Are involved in the clean energy sector in Taiwan, or have an understanding of that space.',
            zh: '從事台灣的乾淨能源行業，或對該產業有了解。',
        },
    },
    twitter: {
        en: 'Find me on Twitter',
        zh: '在Twitter上找到我',
    },
};

const support = {
    heading: { en: 'Support', zh: '支持' },
    paragraph: {
        en: `This project is self-funded. If you'd like to provide financial support, however small, I would really appreciate it! Funds will go towards:`,
        zh: `此計畫的資金完全由我個人支付。如果您想提供財務支持，無論多麼小，我將不勝感激！ 資金將用於：`,
    },
    list: [
        {
            en: `Covering the expenses incurred in running and maintaining this project`,
            zh: '支付營運和維護此計畫所產生的費用',
        },
        {
            en: `Purchasing carbon offsets through carbon removal projects`,
            zh: '透過購買一些碳排消除方案抵銷此計畫的碳排放',
        },
        { en: `Supporting local habitat restoration initiatives in Taiwan`, zh: '支持台灣當地的棲地恢復措施' },
        {
            en: `Allowing me to continue dedicating time and resources to maintaining this project`,
            zh: '讓我能繼續花時間和其他資源來維護此計畫',
        },
    ],
    ways: {
        heading: { en: `Ways to support`, zh: '支持方式' },
        paragraph: {
            en: `There are two ways you can send financial support to this project.`,
            zh: '您可以通過兩種方式向該項目提供財務支持。',
        },
        once: {
            heading: { en: `One-time contribution`, zh: '每月循環性捐款' },
            paragraph: {
                en: 'Make a one-off contribution to help cover the expenses of this project.',
                zh: '一次性捐款，以幫助支付該項目的費用。',
            },
        },
        monthly: {
            heading: { en: `Recurring monthly contribution`, zh: '每月小額資助此計畫。' },
            paragraph: {
                en: 'Support work on this project with a small, monthly contribution.',
                zh: '每月為該項目提供少量支持。',
            },
        },
    },
};

module.exports = { intro, aims, contribute, who, support, roadmap };
