<script>
    let display = false;
    let text = 'Show graph'    
    async function showChart() {
        display = !display;
        if (display) {
            text = 'Hide graph'
        } else {
            text = 'Show graph'
        }
        const { default: chart } = await import(
            "/assets/productionChart.bundle.js"
        );
        chart();
    }
</script>

<style>
    .hidden {
        display: none;
    }
</style>

<button class="link--button" on:click={showChart}>{ text }</button>
<div data-production-chart class:hidden={!display} />
