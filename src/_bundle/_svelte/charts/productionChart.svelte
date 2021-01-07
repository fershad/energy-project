<script>
  import ApexCharts from "apexcharts";

  async function getJSON() {
    const response = await fetch("/api/production.json");
    const data = await response.json();
    return data;
  }

  async function lineChart(data) {
    var options = {
      series: [
        {
          name: "Pumped hydro",
          data: data.pumpedHydro
        },
        {
          name: "Coal",
          data: data.coal
        },
        {
          name: "Oil",
          data: data.oil
        },
        {
          name: "Gas",
          data: data.gas
        },
        {
          name: "Solar",
          data: data.solar
        },
        {
          name: "Wind",
          data: data.wind
        },
        {
          name: "Geothermal",
          data: data.geo
        },
        {
          name: "Hydroelectric",
          data: data.hydro
        },
        {
          name: "Nuclear",
          data: data.nuclear
        },
        {
          name: "Biomass",
          data: data.biomass
        },
        {
          name: "Waste",
          data: data.waste
        }
      ],
      colors: [
        "#1F3B4D",
        "#343837",
        "#58656D",
        "#89A0B0",
        "#CB7723",
        "#016795",
        "#AFA88A",
        "#1E488F",
        "#137E6D",
        "#4E0550",
        "#B79400"
      ],
      chart: {
        id: "prod-chart",
        type: "area",
        height: 350,
        // stacked: true,
        zoom: {
          autoScaleYaxis: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      markers: {
        size: 0,
        style: "hollow"
      },
      xaxis: {
        type: "datetime",
        categories: data.dateTime,
        tickAmount: 10,
        labels: {
          formatter: function(value, timestamp, opts) {
            return opts.dateFormatter(new Date(timestamp), "MMM yyyy");
          }
        },
        min: new Date(data.dateTime[0]).getTime(),
        max: new Date(data.dateTime[data.dateTime.length - 1]).getTime()
      },
      yaxis: {
        min: 0,
        max: 100
      },
      tooltip: {
        x: {
          format: "MMM yyyy"
        }
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
    var chart = new ApexCharts(
      document.querySelector("#chart-timeline"),
      options
    );
    chart.render();

    var resetCssClasses = function(activeEl) {
      var els = document.querySelectorAll("button");
      Array.prototype.forEach.call(els, function(el) {
        el.classList.remove("active");
      });

      activeEl.target.classList.add("active");
    };

    document.querySelector("#one_year").addEventListener("click", function(e) {
      resetCssClasses(e);

      chart.zoomX(
        new Date(data.dateTime[data.dateTime.length - 13]).getTime(),
        new Date(data.dateTime[data.dateTime.length - 1]).getTime()
      );
    });

    document.querySelector("#ten_years").addEventListener("click", function(e) {
      resetCssClasses(e);

      chart.zoomX(
        new Date(data.dateTime[data.dateTime.length - 132]).getTime(),
        new Date(data.dateTime[data.dateTime.length - 1]).getTime()
      );
    });

    document
      .querySelector("#twenty_years")
      .addEventListener("click", function(e) {
        resetCssClasses(e);

        chart.zoomX(
          new Date(data.dateTime[data.dateTime.length - 264]).getTime(),
          new Date(data.dateTime[data.dateTime.length - 1]).getTime()
        );
      });

    document.querySelector("#all").addEventListener("click", function(e) {
      resetCssClasses(e);

      chart.zoomX(
        new Date(data.dateTime[0]).getTime(),
        new Date(data.dateTime[data.dateTime.length - 1]).getTime()
      );
    });
  }

  async function buildChart() {
    const data = await getJSON();
    await lineChart(data);
  }

  buildChart();
</script>
