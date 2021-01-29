const { contact } = require('../site');

const intro = {
    heading: {
        en: 'FAQ',
        zh: '',
    },
    paragraph: {
        en: `If you've got any questions about the data or content of this website then have a look for the answer here. 
        If you can't find what you're looking for then <a href="mailto:${contact.email}">drop me an email</a> and I'll see if I can help.`,
        zh: `你對此這網站的資料或內容有疑問的話，在這網頁看一看。如果找不到答案，<a href="mailto:${contact.email}">發電信給我</a>。`,
    },
};

const questions = [
    {
        question: {
            en: `What energy sources considered 'clean'?`,
            zh: `那個能源能量源是『清潔的』？`,
        },
        answer: {
            en: `<p>For this project I have considered wind, solar, hydro, nuclear, and geothermal as clean energy sources.
            These sources don’t produce air pollutants or greenhouse gases as part of the energy generation process.</p>
            <p>Taiwan also generates a marginal amount of electricity from burning biomass and waste, which are considered renewable energy sources.
            However, I currently don't have enough knowledge around how Taiwan handles either of these to feel comfortable that they are non-polluting.</p>`,
            zh: `<p>對於這個項目，我已經將風能，太陽能，水力發電，核能和地熱能視為清潔能源。 在能源生產過程中，這些能源不會產生空氣污染物或溫室氣體。</p>
            <p>台灣還通過燃燒被視為可再生能源的生物質和廢物產生少量電力。 但是，我目前對台灣如何處理這兩種方法中的任何一個還不了解，因此對它們無污染感到滿意。</p>`,
        },
    },
    {
        question: {
            en: `What are Taiwan's current emissions targets?`,
            zh: `台灣目前的排放目標是什麼？`,
        },
        answer: {
            en: `<p>The Greenhouse Gas Reduction and Management Act (2015) details Taiwan's national emissions target:</p>
            <blockquote><p>
                Long-term national Greenhouse Gas (GHG) emission reduction goal shall be to reduce GHG emissions to no more than 50% of 2005 GHG emission by 2050.
            </p>
            <a href="https://law.moj.gov.tw/ENG/LawClass/LawAll.aspx?pcode=O0020098" data-external>Greenhouse Gas Reduction and Management Act (2015)</a></blockquote>
            <p>
                The Strategic Framework for Sustainable Energy Policy (2008) outlines a series of aspirational short-term objectives, including:
            </p>
            <ul>
                <li>Reduce CO<sub>2</sub> emissions to its 2008 level between 2016 ~ 2020, and to the 2000 level in 2025</li>
                <li>Increase the share of low carbon energy in electricity generation systems to 55% by 2025 (against a 2008 baseline)</li>
                <li>Renewable energy share in the electricity system 8% by 2025</li>
            </ul>            
            <p>The <a href="https://www.climate-laws.org/geographies/taiwan" data-external>Grantham Research Institute on Climate Change and the Environment</a> has a breakdown of all Taiwan's existing climate change laws and policies.`,
            zh: `<p>『溫室氣體減量及管理法』(2015) 詳細介紹了台灣全國家的排放目標：</p>
            <blockquote><p>國家溫室氣體長期減量目標為中華民國一百三十九年溫室氣體排放量降為
            中華民國九十四年溫室氣體排放量百分之五十以下。</p>
            <a href="https://law.moj.gov.tw/ENG/LawClass/LawAll.aspx?pcode=O0020098" data-external>溫室氣體減量及管理法 (2015)</a></blockquote>
            <p>『可持續能源政策戰略框架』(2008) 概述了一系列雄心勃勃的短期目標，包括：</p>
            <ul>
                <li>在2016年至2020年之間將CO<sub>2</sub>排放量減少到2008年的水平，到2025年減少到2000年的水平</li>
                <li>到2025年將低碳能源在發電系統中的份額提高到55％(以2008年為基準)</li>
                <li>到2025年可再生能源在電力系統中的份額為8％</li>
            </ul>
            <p><a href="https://www.climate-laws.org/geographies/taiwan" data-external>Grantham Research Institute on Climate Change and the Environment</a> 詳細介紹了台灣現有的所有氣候變化法律和政策。`,
        },
    },
    {
        question: {
            en: `Where does the data come from?`,
            zh: `數據來自哪裡？`,
        },
        answer: {
            en: `<p>Data for this project is sourced from publicly available datasets.</p>
            <ul>
                <li><a href="https://www.moeaboe.gov.tw/wesnq/Views/B01/wFrmB0102.aspx" data-external>Taiwan Ministry of Economic Affairs - Bureau of Energy</a></li>
                <li><a href="https://www.globalcarbonproject.org/" data-external>Global Carbon Project</a></li>
            </ul>`,
            zh: `<p>該項目的數據來自公開可用數據集.</p>
            <ul>
                <li><a href="https://www.moeaboe.gov.tw/wesnq/Views/B01/wFrmB0102.aspx" data-external>台灣經濟部-能源局</a></li>
                <li><a href="https://www.globalcarbonproject.org/" data-external>Global Carbon Project</a></li>
            </ul>`,
        },
    },
    {
        question: {
            en: `What's with the "Website Carbon" badge at the bottom of the page?`,
            zh: `沒網頁下面的『Website Carbon』的貼有什麼意思？`,
        },
        answer: {
            en: `<p>I am tracking the estimated carbon emissions of this website using the 
            <a href="//websitecarbon.com" data-external>Website Carbon Calculator</a>. Each time a page is viewed the 
            estimated carbon emissions are calculated and shown in the badge. 
            I use this figure along with data from my website analytics 
            (provided by <a href="https://usefathom.com/ref/CEHKLY" data-external>Fathom Analytics</a>) to determine the 
            overall CO<sub>2</sub> emissions of the entire site.</p>
            <p>I plan to eventually create a page to show the total CO<sub>2</sub> emissions of this site.`,
            zh: `<p>我正在使用<a href="//websitecarbon.com" data-external>Website Carbon Calculator</a>跟踪該網站的估計碳排放量。每次查看頁面時，都會計算估算的碳排放量，並將其顯示在徽標中。
            我將其與我的網站分析(我使用 <a href="https://usefathom.com/ref/CEHKLY" data-external>Fathom Analytics</a>)中的信息結合起來，以計算該網站的總體CO<sub>2</sub>排放量。`,
        },
    },
    {
        question: {
            en: `Can I contribute?`,
            zh: `我可不可以支持？`,
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
            zh: `<p>歡迎大家所有的貢獻。您可以<a href="mailto:${contact.email}">通過電信</a>發送您可能有的建議，貢獻或反饋。</p>
            <p>
            如果您想提供財政支持，無論多麼小，我將不勝感激！ 這將幫助我承擔使該項目保持在線狀態的一些費用。 您可以在以下方面為我提供支持：
            </p>
            <ul>
                
                <li>
                    <a href="https://ko-fi.com/cleanenergy_tw" data-external>Ko-fi</a> (一次性捐款)
                </li>
                <li>
                    <a href="https://www.patreon.com/cleanenergy_tw" data-external>Patreon</a> (每月性捐款)
                </li>
                </ul>`,
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
