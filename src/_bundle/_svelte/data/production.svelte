<script>
    async function showChart() {
        const { default: chart } = await import(
            "/assets/productionChart.bundle.js"
        );
        chart();
    }
</script>

<button class="link--button" on:click={showChart}>Show graph</button>
<div data-production-chart style="margin: 0 var(--size-500);" />
