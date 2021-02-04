<script>
  import { locale } from "../store";
  let thisChart;

  let display = false;
  let text = $locale === "zh" ? "顯示圖表 " : "Show graph";

  const toggleClass = () => {
    if (thisChart === null || thisChart === "" || thisChart === undefined) {
      thisChart = document.getElementById("emissionsChart");
    }
    thisChart.classList.toggle("hidden");
  };

  async function showChart() {
    display = !display;
    if (display) {
      text = $locale === "zh" ? "隱藏圖表 " : "Hide graph";
    } else {
      text = $locale === "zh" ? "展開圖表 " : "Show graph";
    }
    toggleClass();
  }

  async function importChart() {
    const { default: chart } = await import("/assets/emissionsChart.bundle.js");
    window.fathom.trackGoal("IA2NFGAJ", 0);
  }
</script>

<button
  class="link--button"
  on:click={showChart}
  on:click|once={importChart}
>{text}</button>
