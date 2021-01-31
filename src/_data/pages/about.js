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
    zh: `<p>一天晚上在台北市的古亭區走一走的時候，我看著路上的照亮廣告牌和廣告屏突然發現自己在想<em>『這些東西中有哪些由可再生能源提供動力？』</em>。從這時候我開想知道台灣電力總產量中有多少來自可再生能源。這個項目就是出於這種想法。`,
};

const aims = {
    heading: {
        en: 'Project aims',
        zh: '目標',
    },
    paragraph: {
        en: `${site.description.en} I hope that it will be able to track energy production all the way through to the day Taiwan achieves 100% 
            power generation from clean sources.`,
        zh: `${site.description.zh} 我希望能繼續跟踪，直到台灣從清潔來源獲得100％的能源生產為止。`,
    },
    learning: {
        en: `Another aim of this project is to get people to start thinking about what they can do as individuals to live more sustainable, low-carbon lives.
        Head over to the <a href="/en/action">actions</a> section of this website to find information, tips, and suggestions on ways to start.`,
        zh: `該項目的另一個目的是使人們開始思考他們作為個人可以做些什麼以實現更可持續的低碳生活。
        轉至本網站的<a href="/zh/action">操作</a>部分，以找到有關啟動方法的信息，技巧和建議。`,
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
        zh: `<p>我是<a href='//fershad.com/about' data-external>尹沛學</a>。我是澳洲人，過了${yearsInTW}年多住在台灣。<p>
        <p>我是網絡性能顧問，這意味著我可以幫助公司提高訪問者的網站體驗。 這項工作還使我能夠使網站更加環保，因為網站的優化程度越高，為每個用戶提供服務所需的能源就越少。</p>`,
    },
};

const roadmap = {
    heading: { en: 'Roadmap & costs', zh: '計劃和費用' },
    paragraph: {
        en: `You can find a roadmap of planned website features and content additions in <a href="https://www.notion.so/fershad/Clean-Energy-Project-a7d20c325f364304a42d1e0b69497aa0" data-external>this Notion document</a>.
         Within the same document, you'll also find a breakdown of any costs incurred while running this project.`,
        zh: `您可以在<a href="https://www.notion.so/fershad/Clean-Energy-Project-a7d20c325f364304a42d1e0b69497aa0" data-external>這個Notion文檔中</a>找到計劃中的網站功能和內容添加的路線圖。在同一文檔中，您還將找到運行此項目時產生的所有費用的明細。`,
    },
};

const contribute = {
    heading: {
        en: 'Contribute',
        zh: '貢獻',
    },
    paragraph: {
        en: `Community contributions to this project are welcome. I'd love to hear from you if you:`,
        zh: `非常歡迎社區為該項目做出貢獻。 如果您有以下情況，我希望收到您的來信：`,
    },
    list: {
        data: {
            en: 'Know of any other publicly available datasets that might be useful for this project.',
            zh: '了解可能對該項目有用的任何其他公開可用的數據集。',
        },
        action: { en: `Have any content ideas you'd like to share.`, zh: '有任何您想分享的動作或想法。' },
        info: {
            en: 'Are involved in the clean energy sector in Taiwan, or have an understanding of that space.',
            zh: '參與台灣的清潔能源行業，或對此空間有了解。',
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
        zh: `該項目是自籌資金。 如果您想提供財政支持，無論多麼小，我將不勝感激！ 資金將用於：`,
    },
    list: [
        {
            en: `Covering the expenses incurred in running and maintaining this project`,
            zh: '支付運行和維護該項目所產生的費用',
        },
        {
            en: `Purchasing carbon offsets through carbon removal projects`,
            zh: '通過碳清除項目購買碳補償',
        },
        { en: `Supporting local habitat restoration initiatives in Taiwan`, zh: '支持台灣當地的棲息地恢復倡議' },
        {
            en: `Allowing me to continue dedicating time and resources to maintaining this project`,
            zh: '請允許我繼續花費時間和資源來維護該項目',
        },
    ],
    ways: {
        heading: { en: `Ways to support`, zh: '支持方法' },
        paragraph: {
            en: `There are two ways you can send financial support to this project.`,
            zh: '您可以通過兩種方式向該項目提供財務支持。',
        },
        once: {
            heading: { en: `One-time contribution`, zh: '一次性捐款' },
            paragraph: {
                en: 'Make a one-off contribution to help cover the expenses of this project.',
                zh: '一次性捐款，以幫助支付該項目的費用。',
            },
        },
        monthly: {
            heading: { en: `Recurring monthly contribution`, zh: '每月性捐款' },
            paragraph: {
                en: 'Support work on this project with a small, monthly contribution.',
                zh: '每月為該項目提供少量支持。',
            },
        },
    },
};

module.exports = { intro, aims, contribute, who, support, roadmap };
