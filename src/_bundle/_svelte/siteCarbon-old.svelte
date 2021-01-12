<script>
  import { getLocale } from "./helpers";
  // TODO: USE CANONICAL URL FOR THIS!
  const url = window.location.href;
  const corsAnywhere = "https://evening-retreat-25659.herokuapp.com/";
  const carbonCalculator = "https://api.websitecarbon.com/site?url=";
  const encodedUrl = encodeURIComponent(url);

  const request = corsAnywhere + carbonCalculator + encodedUrl;

  async function getPageCarbon() {
    const response = await fetch(request, {
      method: "GET",
      mode: "cors",
      cache: "default"
    });

    const data = await response.json();
    let co2 = 0;
    data.green
      ? (co2 = data.statistics.co2.renewable.grams)
      : (co2 = data.statistics.co2.grid.grams);

    return co2.toFixed(2);
  }

  const locale = getLocale(url);
  const data = getPageCarbon();
</script>

{#await data then co2}
  <!-- promise was fulfilled -->
  {#if locale == 'zh'}
    <p>
      這個網頁產生
      <strong data-color="ocean-green">{co2}克</strong>
      的二氧化碳.
      <a href="//websitecarbon.com" data-external>Website Carbon Calculator</a>
    </p>
  {:else}
    <p>
      Viewing this page generated
      <strong data-color="ocean-green">{co2}g</strong>
      of CO2.
      <a href="//websitecarbon.com" data-external>Website Carbon Calculator</a>
    </p>
  {/if}
{/await}
