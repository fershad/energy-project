const site = require('../site');

const calculateYears = () => {
    const now = new Date();
    const thisYear = now.getFullYear();

    return Math.floor(thisYear - 2013);
};

const yearsInTW = calculateYears();

const intro = {
    en: `<p>The idea behind this project started one night while I was walking around the Guting district in Taipei. 
    Looking up at the multitude of illuminate billboards and advertising screens I found myself wondering 
    <em>'is any of this stuff powered by renewable energy?'</em>. That thought got my mind ticking, and I started wondering just
    how much of Taiwan's total electricity production came from renewables. This project is born out of that thought.</p>`,
    zh: ``,
};

const aims = {
    heading: {
        en: 'Project Aims',
        zh: '',
    },
    paragraph: {
        en: `${site.description.en} I hope that it will be able to track energy production all the way through to the day Taiwan achieves 100% 
            power generation from clean sources.`,
        zh: ``,
    },
    learning: {
        en: `Another aim of this project is to get people to start thinking about what they can do as individuals to live more sustainable, low-carbon lives.
        Head over to the <a href="/en/action">actions</a> section of this website to find information, tips, and suggestions on ways to start.`,
        zh: ``,
    },
    why: {
        en: `Why clean energy? Where does the data come from? These questions and more are answered in the <a href="/en/faq">FAQ</a>.`,
        zh: '',
    },
};

const who = {
    heading: { en: 'Who am I?', zh: '' },
    paragraph: {
        en: `<p>I'm <a href='//fershad.com/about' data-external>Fershad Irani</a>, an Aussie who's been living in Taiwan for over ${yearsInTW} years.</p>
        <p>I work as a web performance consultant, meaning that I help companies make their website experiences faster 
        for their visitors. This work also allows me to make websites more environmentally friendly - because the better 
        optimised a website, the less energy that's required to serve it for each user.</p>`,
        zh: ``,
    },
};

const roadmap = {
    heading: { en: 'Roadmap & Costs', zh: '' },
    paragraph: {
        en: `You can find a roadmap of planned website features and content additions in <a href="https://www.notion.so/fershad/Clean-Energy-Project-a7d20c325f364304a42d1e0b69497aa0" data-external>this Notion document</a>.
         Within the same document you'll also find a breakdown of any costs incurred while running this project.`,
        zh: ``,
    },
};

const contribute = {
    heading: {
        en: 'Contribute',
        zh: '貢獻',
    },
    paragraph: {
        en: `Community contributions to this project are very much welcome. I'd love to hear from you if you:`,
        zh: ``,
    },
    list: {
        data: { en: 'Know of any other publicly available datasets that might be useful for this project.', zh: '' },
        action: { en: `Have any action or ideas you'd like to share.`, zh: '' },
        info: {
            en: 'Are involved in the clean energy sector in Taiwan, or have an understanding of that space.',
            zh: '',
        },
    },
    twitter: {
        en: 'Find me on Twitter',
        zh: '',
    },
};

const support = {
    heading: { en: 'Support', zh: '' },
    paragraph: {
        en: `This project is self-funded. If you'd like to provide financial support, however small, I would really appreciate it! Funds will go towards:`,
        zh: ``,
    },
    list: [
        { en: `Covering the expenses incurred in running and maintaining this project`, zh: '' },
        {
            en: `Purchasing carbon offsets through carbon removal projects`,
            zh: '',
        },
        { en: `Supporting local habit restoration initiatives in Taiwan`, zh: '' },
        {
            en: `Allowing me to continue to dedicating time and resources to maintaining this project`,
            zh: '',
        },
    ],
    ways: {
        heading: { en: `Ways to support`, zh: '' },
        paragraph: { en: `There are two ways you can send financial support to this project.`, zh: '' },
        once: {
            heading: { en: `One-time contribution`, zh: '' },
        },
        monthly: {
            heading: { en: `Recurring monthly contribution`, zh: '' },
        },
    },
};

module.exports = { intro, aims, contribute, who, support, roadmap };
