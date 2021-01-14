<script>
    async function showChart() {
        const { default: chart } = await import(
            "/assets/emissionsChart.bundle.js"
        );
        chart();
    }
</script>

<button class="link--button" on:click={showChart}>Show graph</button>
<!-- TODO: Hide this chart unless the user requests it. -->
<div data-emissions-chart style="margin: 0 var(--size-500);">
    <div id="emissionsChart" />
</div>
