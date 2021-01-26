<script>
  import ApexCharts from "apexcharts";
  import { locale } from "../store";

  async function getJSON() {
    const response = await fetch("/api/emissions.json");
    const data = await response.json();

    return data;
  }

  async function lineChart(data) {
    var options = {
      series: [
        {
          name: $locale === 'zh' ? "排放總量 (百萬噸)" : "Total Emissions (million of tonnes)",
          data: data
        }
      ],
      colors: ['#343837'],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      markers: {
        size: 2
      },
      title: {
        text: $locale === 'zh' ? "二氧化碳總排放量" : `Total CO<sup>2</sup> Emissions`,
        align: "left"
      },
      grid: {
        row: {
          colors: ["#343837", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.4
        }
      },
      yaxis: {
        title: {
          text: $locale === 'zh' ? "二氧化碳  (百萬噸)" : `CO<sup>2</sup> (million of tonnes)`
        }
      },
      xaxis: {
        title: {
          text: $locale === 'zh' ? '年' : "Year"
        },
        tickAmount: 10,
        labels: {
          datetimeFormatter: {
            year: "yyyy"
          }
        }
      }
    };

    var chart = new ApexCharts(
      document.querySelector("#emissionsChart"),
      options
    );
    chart.render();
  }

  async function buildChart() {
    const data = await getJSON();
    const chart = await lineChart(data);
  }

  buildChart();
</script>
