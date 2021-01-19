const { contact } = require('../site');

const intro = {
    heading: {
        en: 'FAQ',
        zh: '',
    },
    paragraph: {
        en: `If you've got any questions about the data or content of this website then have a look for the answer here. 
        If you can't find what you're looking for then <a href="mailto:${contact.email}">drop me an email</a> and I'll see if I can help.`,
        zh: '',
    },
};

const questions = [
    {
        question: {
            en: `What energy sources considered 'clean'?`,
            zh: ``,
        },
        answer: {
            en: `<p>For this project I have considered wind, solar, hydro, nuclear, and geothermal as clean energy sources.
            These sources don’t produce air pollutants or greenhouse gases as part of the energy generation process.</p>
            <p>Taiwan also generates a marginal amount of electricity from burning biomass and waste, which are considered renewable energy sources.
            However, I currently don't have enough knowledge around how Taiwan handles either of these to feel comfortable that they are non-polluting.</p>`,
            zh: ``,
        },
    },
    {
        question: {
            en: `What are Taiwan's current emissions targets?`,
            zh: ``,
        },
        answer: {
            en: `<p>The Greenhouse Gas Reduction and Management Act (2015) details Taiwan's national emissions target:</p>
            <blockquote>Long-term national Greenhouse Gas (GHG) emission reduction goal shall be to reduce GHG emissions to no more than 50% of 2005 GHG emission by 2050.</blockquote>
            <p>
                The Strategic Framework for Sustainable Energy Policy (2008) outlines a series of aspirational short-term objectives, including:
            </p>
            <ul>
                <li>Reduce CO<sup>2</sup> emissions to its 2008 level between 2016 ~ 2020, and to the 2000 level in 2025</li>
                <li>Increase the share of low carbon energy in electricity generation systems to 55% by 2025 (against a 2008 baseline)</li>
                <li>Renewable energy share in the electricity system 8% by 2025</li>
            </ul>            
            <p>The <a href="https://www.climate-laws.org/geographies/taiwan" data-external>Grantham Research Institute on Climate Change and the Environment</a> has a breakdown of all Taiwan's existing climate change laws and policies.`,
            zh: ``,
        },
    },
    {
        question: {
            en: `Where does the data come from?`,
            zh: ``,
        },
        answer: {
            en: `<p>Data for this project is sourced from publicly available datasets.</p>
            <ul>
                <li><a href="https://www.moeaboe.gov.tw/wesnq/Views/B01/wFrmB0102.aspx" data-external>Taiwan Ministry of Economic Affairs - Bureau of Energy</a></li>
                <li><a href="https://www.globalcarbonproject.org/" data-external>Global Carbon Project</a></li>
            </ul>`,
            zh: ``,
        },
    },
    {
        question: {
            en: `What's with the "Website Carbon" badge at the bottom of the page?`,
            zh: ``,
        },
        answer: {
            en: `<p>I am tracking the estimated carbon emissions of this website using the 
            <a href="//websitecarbon.com" data-external>Website Carbon Calculator</a>. Each time a page is viewed the 
            estimated carbon emissions are calculated and shown in the badge. 
            I use this figure along with data from my website analytics 
            (provided by <a href="https://usefathom.com/ref/CEHKLY" data-external>Fathom Analytics</a>) to determine the 
            overall CO<sup>2</sup> emissions of the entire site.</p>
            <p>I plan to eventually create a page to show the total CO<sup>2</sup> emissions of this site.`,
            zh: ``,
        },
    },
    {
        question: {
            en: `Can I contribute?`,
            zh: ``,
        },
        answer: {
            en: `<p>Community contributions to this project are very much welcome. 
            You can <a href="mailto:${contact.email}">reach me by email</a> with any suggestions, contributions, or feedback you have.</p>
            <p>
                If you'd like to provide financial support, however small, I would really appreciate it! 
                This will help me cover some of the costs associated with keeping this project online. You can support me on:
            </p>
            <ul>
                
                <li>
                    <a href="https://ko-fi.com/cleanenergy_tw" data-external>Ko-fi</a> (one-time contribution)
                </li>
                <li>
                    <a href="https://www.patreon.com/cleanenergy_tw" data-external>Patreon</a> (monthly contribution)
                </li>
                </ul>`,
            zh: ``,
        },
    },
];

module.exports = { intro, questions };

/* Question template
{
    question: {
        en: ``,
        zh: ``
    },
    answer: {
        en: ``,
        zh: ``
    }
},
*/
