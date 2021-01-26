<script>
  import ApexCharts from "apexcharts";

  async function getJSON() {
    const response = await fetch("/api/emissions.json");
    const data = await response.json();

    return data;
  }

  async function lineChart(data) {
    var options = {
      series: [
        {
          name: "Total Emissions (million of tonnes)",
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
        text: "Total CO2 Emissions",
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
          text: "CO2 (million of tonnes)"
        }
      },
      xaxis: {
        title: {
          text: "Year"
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
