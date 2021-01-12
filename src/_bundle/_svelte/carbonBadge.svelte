<script>
  const wcID = selector => document.getElementById(selector);
  const wcU =
    encodeURIComponent(document.querySelector("link[rel='canonical']").href) ||
    encodeURIComponent(window.location.href);

  const newRequest = async function(render = true) {
    // Run the API request because there is no cached result available
    const r = await fetch("https://api.websitecarbon.com/b?url=" + wcU);

    if (!r.ok) {
      throw Error(r);
    }

    try {
      const d = await r.json();
      d.t = new Date().getTime();
      // Save the result into localStorage with a timestamp
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
        return r;
      }

      // If no cached response, then fetch from API
      const nr = await newRequest();
      return nr;
    }
  }

  const data = getCarbon();
</script>

{#await data}
  <!-- data is pending -->
  <div id="wcb_p">
    <span id="wcb_g">Measuring CO<sub>2</sub>&hellip;</span>
    <a
      id="wcb_a"
      target="_blank"
      rel="noopener"
      href="https://websitecarbon.com">Website Carbon</a>
  </div><span id="wcb_2">&nbsp;</span>
{:then value}
  <!-- data was fulfilled -->
  <div id="wcb_p">
    <span id="wcb_g">{value.c}g of CO<sub>2</sub>/view</span>
    <a
      id="wcb_a"
      target="_blank"
      rel="noopener"
      href="https://websitecarbon.com">Website Carbon</a>
  </div><span id="wcb_2">Cleaner than {value.p}% of pages tested</span>
{:catch error}
  <!-- data was rejected -->
  <div id="wcb_p">
    <span id="wcb_g">No results</span>
    <a
      id="wcb_a"
      target="_blank"
      rel="noopener"
      href="https://websitecarbon.com">Website Carbon</a>
  </div><span id="wcb_2">&nbsp;</span>
{/await}
