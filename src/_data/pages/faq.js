const { contact } = require('../site');

const intro = {
    heading: {
        en: 'FAQ',
        zh: '如果對本網站的資料或內容有疑問，請先看看這一頁。若還有任何問題，也歡迎 e-mail 與我聯繫。',
    },
    paragraph: {
        en: `If you've got any questions about the data or content of this website then have a look for the answer here. 
        If you can't find what you're looking for then <a href="mailto:${contact.email}">drop me an email</a> and I'll see if I can help.`,
        zh: `如果對本網站的資料或內容有疑問，請先看看這一頁。若還有任何問題，也歡迎 <a href="mailto:${contact.email}">e-mail</a> 與我聯繫。`,
    },
};

const questions = [
    {
        question: {
            en: `What energy sources considered 'clean'?`,
            zh: `哪些算是『潔淨的』能源？`,
        },
        answer: {
            en: `<p>For this project, I have considered wind, solar, hydro, nuclear, and geothermal as clean energy sources.
            These sources don’t produce air pollutants or greenhouse gases as part of the energy generation process.</p>
            <p>Taiwan also generates a marginal amount of electricity from burning biomass and waste, which are considered renewable energy sources.
            However, I currently don't have enough knowledge around how Taiwan handles either of these to feel comfortable that they are non-polluting.</p>`,
            zh: `<p>太陽能、風力、水力發電、核能和地熱能，是這個計畫中所稱的「潔淨能源」。 這些能源在生產過程中不會造成空氣污染物或排放溫室氣體。</p>
            <p>台灣同時也透過燃燒廢棄物及生物質製造少量的可再生能源。 但由於我對目前台灣如何處理這兩種製電過程的衍生物還不很了解，因此無法確定這兩種發電方式是否乾淨。</p>`,
        },
        id: 'clean-sources',
    },
    {
        question: {
            en: `What are Taiwan's current emissions targets?`,
            zh: `台灣目前的溫室氣體排放量目標為何？`,
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
            zh: `<p>『溫室氣體減量及管理法』(2015) 明定了台灣國家溫室氣體排放目標：
            </p>
            <blockquote><p>國家溫室氣體長期減量目標為139年（西元2050年）溫室氣體排放量應降為94年（西元2005年）溫室氣體排放量50%以下。
            </p>
            <a href="https://law.moj.gov.tw/ENG/LawClass/LawAll.aspx?pcode=O0020098" data-external>溫室氣體減量及管理法 (2015)</a></blockquote>
            <p>『永續能源政策綱領』(2008) 概述了一系列雄心勃勃的短期目標，包括：</p>
            <ul>
                <li>2016至2020年間，將二氧化碳排放量減少到2008年的水平，到2025年減少到2000年的水平</li>
                <li>到2025年，將低碳能源在整體能源生產佔比提高至55％(以2008年為基準)</li>
                <li>到2025年，可再生能源為整體能源生產佔比之8％</li>
            </ul>
            <p>倫敦政經學院<a href="https://www.climate-laws.org/geographies/taiwan" data-external>格蘭瑟姆氣候變遷與環境研究所</a> (Grantham Research Institute on Climate Change and the Environment) 詳細列出了台灣現有的所有氣候變遷法規及政策。`,
        },
        id: 'target',
    },
    {
        question: {
            en: `Where does the data come from?`,
            zh: `數據來源`,
        },
        answer: {
            en: `<p>Data for this project is sourced from publicly available datasets.</p>
            <ul>
                <li><a href="https://www.moeaboe.gov.tw/wesnq/Views/B01/wFrmB0102.aspx" data-external>Taiwan Ministry of Economic Affairs - Bureau of Energy</a></li>
                <li><a href="https://www.globalcarbonproject.org/" data-external>Global Carbon Project</a></li>
            </ul>`,
            zh: `<p>此計畫的數據皆來自於開源數據集.</p>
            <ul>
                <li><a href="https://www.moeaboe.gov.tw/wesnq/Views/B01/wFrmB0102.aspx" data-external> 台灣經濟部-能源局</a></li>
                <li><a href="https://www.globalcarbonproject.org/" data-external>Global Carbon Project</a></li>
            </ul>`,
        },
        id: 'data-source',
    },
    {
        question: {
            en: `What's with the "Website Carbon" badge at the bottom of the page?`,
            zh: `每網頁頁尾的 "Website Carbon" 標籤是什麼意思？`,
        },
        answer: {
            en: `<p>I am tracking the estimated carbon emissions of this website using the 
            <a href="//websitecarbon.com" data-external>Website Carbon Calculator</a>. Each time a page is viewed the 
            estimated carbon emissions are calculated and shown in the badge. 
            I use this figure along with data from my website analytics 
            (provided by <a href="https://usefathom.com/ref/CEHKLY" data-external>Fathom Analytics</a>) to determine the 
            overall CO<sub>2</sub> emissions of the entire site.</p>
            <p>I plan to eventually create a page to show the total CO<sub>2</sub> emissions of this site.`,
            zh: `<p>此網站使用 <a href="//websitecarbon.com" data-external>Website Carbon Calculator</a>"Website Carbon Calculator"</a> 來追蹤並估算碳排放量。每次造訪一個頁面時，載入該頁面的碳排放量估值即會顯示在頁尾的標籤中。 這個網站的總碳排量則是綜合這些數值和網站分析數據 (我使用 <a href="https://usefathom.com/ref/CEHKLY" data-external>Fathom Analytics</a>) 來計算。
            我計畫未來將新增一頁來呈現此網站整體的碳排放量。`,
        },
        id: 'carbon-badge',
    },
    {
        id: 'contribute',
        question: {
            en: `Can I contribute?`,
            zh: `我能如何支持此計畫？`,
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
            zh: `<p>非常歡迎各種形式的支持。您可以透過 <a href="mailto:${contact.email}">email</a> 給我您的任何指教、建議、資訊和反饋。</p>
            <p>
            如果您想提供財務支援，無論多麼小，我將不勝感激！ 這將能幫助我支付維持此計畫網站的某部分支出。 您可以透過以下方式支持這項計畫：
            </p>
            <ul>
                
                <li>
                    <a href="https://ko-fi.com/cleanenergy_tw" data-external>Ko-fi</a> (一次性捐款)
                </li>
                <li>
                    <a href="https://www.patreon.com/cleanenergy_tw" data-external>Patreon</a> (每月定期捐款)
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
