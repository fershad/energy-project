<script>
  import { getLocale } from "../helpers";
  const wcU =
    encodeURIComponent(document.querySelector("link[rel='canonical']").href) ||
    encodeURIComponent(window.location.href);

  const newRequest = async function(render = true) {
    // Run the API request because there is no cached result available
    // Using proxy & site URL to capture more accurate number
    const r = await fetch("https://api.websitecarbon.com/b?url=" + wcU);

    if (!r.ok) {
      throw Error(r);
    }

    try {
      const d = await r.json();
      localStorage.setItem("wcb_" + wcU, JSON.stringify(d));
      return d;
    } catch (e) {
      console.log(e);
      localStorage.removeItem("wcb_" + wcU);
      throw Error(e);
    }
  };

  async function getCarbon() {
    if ("fetch" in window) {
      // Get result if it's saved
      let cachedResponse = localStorage.getItem("wcb_" + wcU);

      // If there is a cached response, use it
      if (cachedResponse) {
        const r = JSON.parse(cachedResponse);
        const t = new Date().getTime();

        // If time since response was cached is over a day, then make a new request and update the cached result in the background
        if (t - r.t > 86400000) {
          newRequest(false);
        }

        // Return the cached response
        recordCarbon(wcU, r.c);
        return r;
      }

      // If no cached response, then fetch from API
      const nr = await newRequest();
      recordCarbon(wcU, nr.c);
      return nr;
    }
  }

  // This bit saves a record of the carbon measurement. Useful for tracking the total carbon footprint of the website.
  async function recordCarbon(site, carbon) {
    const url = `https://energy-project-carbon.fershad.workers.dev/?site=${site}&c=${carbon}`;

    const resp = await fetch(url);
    if (!resp.ok) {
      console.log("Error saving carbon data", resp);
    }
  }

  const data = getCarbon();
  const locale = getLocale(wcU);
</script>

{#await data}
  <!-- data is pending -->
  <div id="wcb_p">
    {#if locale == 'zh'}
      <!-- content here -->
      <span id="wcb_g">CO<sub>2</sub> 檢查中&hellip;</span>
    {:else}
      <!-- else content here -->
      <span id="wcb_g">Measuring CO<sub>2</sub>&hellip;</span>
    {/if}
    <a
      id="wcb_a"
      target="_blank"
      rel="noopener"
      href="https://websitecarbon.com"
    >Website Carbon</a>
  </div><span id="wcb_2">&nbsp;</span>
{:then value}
  <!-- data was fulfilled -->
  <div id="wcb_p">
    {#if locale == 'zh'}
      <!-- content here -->
      <span id="wcb_g">{value.c}克二氧化碳<sub>2</sub>/每次看</span>
    {:else}
      <!-- else content here -->
      <span id="wcb_g">{value.c}g of CO<sub>2</sub>/view</span>
    {/if}
    <a
      id="wcb_a"
      target="_blank"
      rel="noopener"
      href="https://websitecarbon.com"
    >Website Carbon</a>
  </div>
  {#if locale == 'zh'}
    <!-- content here -->
    <span id="wcb_2">清潔比 {value.p}% 的頁面經過測試</span>
  {:else}
    <!-- else content here -->
    <span id="wcb_2">Cleaner than {value.p}% of pages tested</span>
  {/if}
{:catch error}
  <!-- data was rejected -->
  <div id="wcb_p">
    {#if locale == 'zh'}
      <!-- content here -->
      <span id="wcb_g">沒結果</span>
    {:else}
      <!-- else content here -->
      <span id="wcb_g">No results</span>
    {/if}
    <a
      id="wcb_a"
      target="_blank"
      rel="noopener"
      href="https://websitecarbon.com"
    >Website Carbon</a>
  </div><span id="wcb_2">&nbsp;</span>
{/await}
