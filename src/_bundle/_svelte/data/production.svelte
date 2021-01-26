<script>
    import { locale } from '../store'

    let display = false;
    let text = $locale === 'zh' ? '顯示圖表 ' : 'Show graph'
    async function showChart() {
        display = !display;
        if (display) {
            text = $locale === 'zh' ? '隱藏圖表 ' : 'Hide graph'
        } else {
            text = $locale === 'zh' ? '顯示圖表 ' : 'Show graph'
        }
    }

    async function importChart() {
        const { default: chart } = await import(
            "/assets/productionChart.bundle.js"
        );
    }
</script>

<style>
    .hidden {
        display: none;
    }
</style>

<button class="link--button" on:click={showChart} on:click|once={importChart}>{ text }</button>
<div data-production-chart class:hidden={!display} />
