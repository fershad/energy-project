<script>
  import ApexCharts from "apexcharts";

  async function getJSON() {
    console.log("getJSON");
    const response = await fetch("/api/production.json");
    const data = await response.json();

    return data;
  }

  async function lineChart(data) {
    var options = {
      series: [
        {
          data: data.totalClean
        }
      ],
      chart: {
        id: "prod-brush",
        type: "area",
        height: 350,
        // stacked: true,
        type: "area",
        brush: {
          target: "prod-chart",
          enabled: true
        },
        selection: {
          enabled: true,
          xaxis: {
            min: new Date("19 Jun 2017").getTime(),
            max: new Date("14 Aug 2017").getTime()
          }
        }
      },
      xaxis: {
        type: "datetime",
        tooltip: {
          enabled: false
        }
      },
      yaxis: {
        tickAmount: 2
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100]
        }
      }
    };
    var chart = new ApexCharts(document.querySelector("#chart-brush"), options);
    chart.render();
  }

  async function buildChart() {
    console.log("Build ...");
    const data = await getJSON();
    const chart = await lineChart(data);
  }

  let promise = buildChart();
</script>

{#await promise}
  <!-- promise is pending -->
  <p>Pending ...</p>
{:then value}
  <!-- promise was fulfilled -->
  <div id="chart-brush" />
{/await}
