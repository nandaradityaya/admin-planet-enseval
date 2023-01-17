function toggleBtn(evt, menuName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("chart-dashboard");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.transform = "scaleY(0.2)";
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" selected", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.className += " selected";
  setTimeout(() => {
    document.getElementById(menuName).style.transform = "scaleY(1)";
  }, 50);
}

$(document).ready(function () {
  $("#chartWeek").hide();
});

window.onload = (event) => {
  document.getElementById("chart1").style.display = "block";
  document.getElementById("chart1").style.transform = "scaleY(1)";
};

$(function () {
  "use strict";

  // chart1
  var options = {
    series: [
      {
        name: "Visitor",
        // data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5],
        data: [890, 689, 931, 821, 771, 901, 762, 816, 972, 879, 1021, 981],
      },
    ],
    chart: {
      foreColor: "#9a9797",
      type: "area",
      height: 380,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: false,
        top: 3,
        left: 14,
        blur: 4,
        opacity: 0.1,
      },
    },
    stroke: {
      width: 4,
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        gradientToColors: ["#8833ff"],
        shadeIntensity: 1,
        type: "vertical",
        opacityFrom: 0.8,
        opacityTo: 0.3,
        //stops: [0, 100, 100, 100]
      },
    },
    colors: ["#8833ff"],
    yaxis: {
      labels: {
        formatter: function (value) {
          return value;
        },
      },
    },
    markers: {
      size: 4,
      colors: ["#8833ff"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    grid: {
      show: true,
      borderColor: "#ededed",
      strokeDashArray: 4,
    },
  };
  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  chart.render();

  //   -----------------------------------------------------

  // chart Week
  var options = {
    series: [
      {
        name: "Visitor",
        // data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5],
        data: [785, 689, 542, 431],
      },
    ],
    chart: {
      foreColor: "#9a9797",
      type: "area",
      height: 380,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: false,
        top: 3,
        left: 14,
        blur: 4,
        opacity: 0.1,
      },
    },
    stroke: {
      width: 4,
      curve: "smooth",
    },
    xaxis: {
      categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        gradientToColors: ["#8833ff"],
        shadeIntensity: 1,
        type: "vertical",
        opacityFrom: 0.8,
        opacityTo: 0.3,
        //stops: [0, 100, 100, 100]
      },
    },
    colors: ["#8833ff"],
    yaxis: {
      labels: {
        formatter: function (value) {
          return value;
        },
      },
    },
    markers: {
      size: 4,
      colors: ["#8833ff"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    grid: {
      show: true,
      borderColor: "#ededed",
      strokeDashArray: 4,
    },
  };
  var chart = new ApexCharts(document.querySelector("#chartWeek"), options);
  chart.render();

  //   -------------------------------------------------------------------------------------------------

  // chart 2
  var options = {
    series: [
      {
        name: "Visitors",
        data: [94, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Chats",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Page Views",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    chart: {
      foreColor: "#9a9797",
      type: "bar",
      height: 320,
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "18%",
        //endingShape: 'rounded'
      },
    },
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
      offsetX: -20,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    colors: ["#e62e2e", "#29cc39", "#0dcaf0"],
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    fill: {
      opacity: 1,
    },
    grid: {
      show: true,
      borderColor: "#ededed",
      strokeDashArray: 4,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 310,
          },
          plotOptions: {
            bar: {
              columnWidth: "30%",
            },
          },
        },
      },
    ],
  };
  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();

  // chart 3
  var options = {
    series: [
      {
        name: "Visitors",
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
      },
    ],
    chart: {
      type: "bar",
      height: 83,
      sparkline: {
        enabled: true,
      },
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        //endingShape: 'rounded'
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetX: 0,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 0,
      colors: ["transparent"],
    },
    colors: ["#fff"],
    tooltip: {
      theme: "dark",
      x: {
        show: false,
      },
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    fill: {
      opacity: 1,
    },
  };
  var chart = new ApexCharts(document.querySelector("#chart3"), options);
  chart.render();

  // chart4
  var options = {
    series: [87],
    chart: {
      //foreColor: '#9a9797',
      height: 380,
      type: "radialBar",
      offsetY: -10,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: {
          margin: 0,
          size: "70%",
          background: "transparent",
        },
        track: {
          strokeWidth: "100%",
          dropShadow: {
            enabled: false,
            top: -3,
            left: 0,
            blur: 4,
            //color: 'rgba(209, 58, 223, 0.65)',
            opacity: 0.12,
          },
        },
        dataLabels: {
          name: {
            fontSize: "16px",
            color: "#212529",
            offsetY: 5,
          },
          value: {
            offsetY: 20,
            fontSize: "30px",
            color: "#212529",
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.15,
        gradientToColors: ["#4a00e0"],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    colors: ["#8e2de2"],
    stroke: {
      dashArray: 4,
    },
    labels: ["Received"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 300,
          },
        },
      },
    ],
  };
  var chart = new ApexCharts(document.querySelector("#chart4"), options);
  chart.render();

  // chart 5
  var options1 = {
    chart: {
      foreColor: "#9a9797",
      type: "line",
      //width: 170,
      height: 90,
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        gradientToColors: ["#fff"],
        shadeIntensity: 1,
        type: "vertical",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
    colors: ["#fff"],
    series: [
      {
        name: "New Users",
        data: [25, 66, 41, 46, 15, 21, 59, 25, 44, 12],
      },
    ],
    stroke: {
      width: 3.0,
      curve: "smooth",
      dashArray: [0],
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return "";
          },
        },
      },
      marker: {
        show: false,
      },
    },
  };
  new ApexCharts(document.querySelector("#chart5"), options1).render();

  // chart 6
  var options = {
    series: [70],
    chart: {
      //foreColor: '#9a9797',
      height: 245,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          //background: '#ffdbed',
          size: "70%",
        },
        track: {
          // background: '#ffdbed',
          strokeWidth: "100%",
        },
        dataLabels: {
          name: {
            fontSize: "15px",
            color: "#212529",
            offsetY: 5,
          },
          value: {
            offsetY: 20,
            fontSize: "22px",
            color: "#212529",
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    colors: ["#00d54b"],
    stroke: {
      // lineCap: 'round'
    },
    labels: ["Monthly Invoices"],
  };
  var chart = new ApexCharts(document.querySelector("#chart6"), options);
  chart.render();

  // chart 7
  var options = {
    series: [68],
    chart: {
      //foreColor: '#9a9797',
      height: 245,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          //background: '#ffdbed',
          size: "70%",
        },
        track: {
          // background: '#ffdbed',
          strokeWidth: "100%",
        },
        dataLabels: {
          name: {
            fontSize: "15px",
            color: "#212529",
            offsetY: 5,
          },
          value: {
            offsetY: 20,
            fontSize: "22px",
            color: "#212529",
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    colors: ["#ff0037"],
    stroke: {
      // lineCap: 'round'
    },
    labels: ["Monthly Downloads"],
  };
  var chart = new ApexCharts(document.querySelector("#chart7"), options);
  chart.render();

  // pie chart
  Highcharts.chart("piechart", {
    chart: {
      height: 350,
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      styledMode: true,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "Podtret",
    },
    subtitle: {
      text: "Ratio of podtret views by users",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        innerSize: 120,
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
        showInLegend: true,
      },
    },
    //colors: ['#ff9ad5', '#50b5ff', '#5a65dc'],
    series: [
      {
        name: "Views",
        colorByPoint: true,
        data: [
          {
            name: "Segment Ngobrol Santai",
            y: 56,
          },
          {
            name: "Segment Kumis",
            y: 30,
          },
          {
            name: "Segment Sapa Mantan",
            y: 14,
          },
        ],
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            plotOptions: {
              pie: {
                innerSize: 140,
                dataLabels: {
                  enabled: false,
                },
              },
            },
          },
        },
      ],
    },
  });
  // chart vertical
  // Create the chart
  Highcharts.chart("verticalchart", {
    chart: {
      height: 350,
      type: "column",
      styledMode: false,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "E-Learning",
    },
    subtitle: {
      text: "Records of E-Learning QA & Security usage by users",
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Browsers usage by users",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y:.1f}%",
        },
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
    },
    colors: [
      "#ff6459",
      "#f5964b",
      "#56aafb",
      "#62aedf",
      "#9a78f0",
      "#5bb75f",
      "#456fg3",
      "#2cbaff",
      "#0037ff",
      "#ff00e0",
    ],
    series: [
      {
        name: "Browsers",
        colorByPoint: true,
        data: [
          {
            name: "CDOB 2020",
            y: 47.29,
            drilldown: "CDOB 2020",
          },
          {
            name: "CDAKB 2020",
            y: 24.25,
            drilldown: "CDAKB 2020",
          },
          {
            name: "Sertifikasi Halal",
            y: 41.48,
            drilldown: "Sertifikasi Halal",
          },
          {
            name: "Penanganan Produk Sitostatika",
            y: 44.32,
            drilldown: "Penanganan Produk Sitostatika",
          },
          {
            name: "Safety Security",
            y: 76.39,
            drilldown: "Safety Security",
          },
          {
            name: "IT Security 2021",
            y: 16.92,
            drilldown: "IT Security 2021",
          },
          {
            name: "Sosialisasi SOP & IK",
            y: 29.21,
            drilldown: "Sosialisasi SOP & IK",
          },
          {
            name: "IT Security Email Phising",
            y: 16.92,
            drilldown: "IT Security Email Phising",
          },
          {
            name: "General IT Security Awareness",
            y: 16.92,
            drilldown: "General IT Security Awareness",
          },
          {
            name: "Penggunaan APAR",
            y: 78.32,
            drilldown: "Penggunaan APAR",
          },
        ],
      },
    ],
    drilldown: {
      series: [
        {
          name: "CDOB 2020",
          id: "CDOB 2020",
          data: [
            ["v65.0", 0.1],
            ["v64.0", 1.3],
            ["v63.0", 53.02],
            ["v62.0", 1.4],
            ["v61.0", 0.88],
            ["v60.0", 0.56],
            ["v59.0", 0.45],
            ["v58.0", 0.49],
            ["v57.0", 0.32],
            ["v56.0", 0.29],
            ["v55.0", 0.79],
            ["v54.0", 0.18],
            ["v51.0", 0.13],
            ["v49.0", 2.16],
            ["v48.0", 0.13],
            ["v47.0", 0.11],
            ["v43.0", 0.17],
            ["v29.0", 0.26],
          ],
        },
        {
          name: "CDAKB 2020",
          id: "CDAKB 2020",
          data: [
            ["v58.0", 1.02],
            ["v57.0", 7.36],
            ["v56.0", 0.35],
            ["v55.0", 0.11],
            ["v54.0", 0.1],
            ["v52.0", 0.95],
            ["v51.0", 0.15],
            ["v50.0", 0.1],
            ["v48.0", 0.31],
            ["v47.0", 0.12],
          ],
        },
        {
          name: "Sertifikasi Halal",
          id: "Sertifikasi Halal",
          data: [
            ["v11.0", 6.2],
            ["v10.0", 0.29],
            ["v9.0", 0.27],
            ["v8.0", 0.47],
          ],
        },
        {
          name: "Penanganan Produk Sitostatika",
          id: "Penanganan Produk Sitostatika",
          data: [
            ["v11.0", 3.39],
            ["v10.1", 0.96],
            ["v10.0", 0.36],
            ["v9.1", 0.54],
            ["v9.0", 0.13],
            ["v5.1", 0.2],
          ],
        },
        {
          name: "Safety Security",
          id: "Safety Security",
          data: [
            ["v16", 2.6],
            ["v15", 0.92],
            ["v14", 0.4],
            ["v13", 0.1],
          ],
        },
        {
          name: "IT Security 2021",
          id: "IT Security 2021",
          data: [
            ["v50.0", 0.96],
            ["v49.0", 0.82],
            ["v12.1", 0.14],
          ],
        },
        {
          name: "Sosialisasi SOP & IK",
          id: "Sosialisasi SOP & IK",
          data: [
            ["v50.0", 0.96],
            ["v49.0", 0.82],
            ["v12.1", 0.14],
          ],
        },
        {
          name: "IT Security Email Phising",
          id: "IT Security Email Phising",
          data: [
            ["v50.0", 0.96],
            ["v49.0", 0.82],
            ["v12.1", 0.14],
          ],
        },
        {
          name: "General IT Security Awareness",
          id: "General IT Security Awareness",
          data: [
            ["v50.0", 0.96],
            ["v49.0", 0.82],
            ["v12.1", 0.14],
          ],
        },
        {
          name: "Penggunaan APAR",
          id: "Penggunaan APAR",
          data: [
            ["v50.0", 0.96],
            ["v49.0", 0.82],
            ["v12.1", 0.14],
          ],
        },
      ],
    },
  });
});

// Index 4

// $(function () {
//   "use strict";
//   // chart 1
//   Highcharts.chart("piechart", {
//     chart: {
//       height: 350,
//       plotBackgroundColor: null,
//       plotBorderWidth: null,
//       plotShadow: false,
//       type: "pie",
//       styledMode: true,
//     },
//     credits: {
//       enabled: false,
//     },
//     title: {
//       text: "Sessions Device",
//     },
//     subtitle: {
//       text: "Ratio of devices use by users",
//     },
//     tooltip: {
//       pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
//     },
//     accessibility: {
//       point: {
//         valueSuffix: "%",
//       },
//     },
//     plotOptions: {
//       pie: {
//         allowPointSelect: true,
//         cursor: "pointer",
//         innerSize: 120,
//         dataLabels: {
//           enabled: true,
//           format: "<b>{point.name}</b>: {point.percentage:.1f} %",
//         },
//         showInLegend: true,
//       },
//     },
//     //colors: ['#ff9ad5', '#50b5ff', '#5a65dc'],
//     series: [
//       {
//         name: "Users",
//         colorByPoint: true,
//         data: [
//           {
//             name: "Desktop",
//             y: 56,
//           },
//           {
//             name: "Mobile",
//             y: 30,
//           },
//           {
//             name: "Tablet",
//             y: 14,
//           },
//         ],
//       },
//     ],
//     responsive: {
//       rules: [
//         {
//           condition: {
//             maxWidth: 500,
//           },
//           chartOptions: {
//             plotOptions: {
//               pie: {
//                 innerSize: 140,
//                 dataLabels: {
//                   enabled: false,
//                 },
//               },
//             },
//           },
//         },
//       ],
//     },
//   });
//   // chart 2
//   // Create the chart
//   Highcharts.chart("verticalchart", {
//     chart: {
//       height: 350,
//       type: "column",
//       styledMode: false,
//     },
//     credits: {
//       enabled: false,
//     },
//     title: {
//       text: "Browser usage",
//     },
//     subtitle: {
//       text: "Records of browser usage by users",
//     },
//     accessibility: {
//       announceNewData: {
//         enabled: true,
//       },
//     },
//     xAxis: {
//       type: "category",
//     },
//     yAxis: {
//       title: {
//         text: "Browsers usage by users",
//       },
//     },
//     legend: {
//       enabled: false,
//     },
//     plotOptions: {
//       series: {
//         borderWidth: 0,
//         dataLabels: {
//           enabled: true,
//           format: "{point.y:.1f}%",
//         },
//       },
//     },
//     tooltip: {
//       headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
//       pointFormat:
//         '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
//     },
//     colors: ["#ff6459", "#f5964b", "#56aafb", "#62aedf", "#9a78f0", "#5bb75f"],
//     series: [
//       {
//         name: "Browsers",
//         colorByPoint: true,
//         data: [
//           {
//             name: "Chrome",
//             y: 47.29,
//             drilldown: "Chrome",
//           },
//           {
//             name: "Firefox",
//             y: 24.25,
//             drilldown: "Firefox",
//           },
//           {
//             name: "Internet Explorer",
//             y: 41.48,
//             drilldown: "Internet Explorer",
//           },
//           {
//             name: "Safari",
//             y: 44.32,
//             drilldown: "Safari",
//           },
//           {
//             name: "Edge",
//             y: 76.39,
//             drilldown: "Edge",
//           },
//           {
//             name: "Opera",
//             y: 16.92,
//             drilldown: "Opera",
//           },
//         ],
//       },
//     ],
//     drilldown: {
//       series: [
//         {
//           name: "Chrome",
//           id: "Chrome",
//           data: [
//             ["v65.0", 0.1],
//             ["v64.0", 1.3],
//             ["v63.0", 53.02],
//             ["v62.0", 1.4],
//             ["v61.0", 0.88],
//             ["v60.0", 0.56],
//             ["v59.0", 0.45],
//             ["v58.0", 0.49],
//             ["v57.0", 0.32],
//             ["v56.0", 0.29],
//             ["v55.0", 0.79],
//             ["v54.0", 0.18],
//             ["v51.0", 0.13],
//             ["v49.0", 2.16],
//             ["v48.0", 0.13],
//             ["v47.0", 0.11],
//             ["v43.0", 0.17],
//             ["v29.0", 0.26],
//           ],
//         },
//         {
//           name: "Firefox",
//           id: "Firefox",
//           data: [
//             ["v58.0", 1.02],
//             ["v57.0", 7.36],
//             ["v56.0", 0.35],
//             ["v55.0", 0.11],
//             ["v54.0", 0.1],
//             ["v52.0", 0.95],
//             ["v51.0", 0.15],
//             ["v50.0", 0.1],
//             ["v48.0", 0.31],
//             ["v47.0", 0.12],
//           ],
//         },
//         {
//           name: "Internet Explorer",
//           id: "Internet Explorer",
//           data: [
//             ["v11.0", 6.2],
//             ["v10.0", 0.29],
//             ["v9.0", 0.27],
//             ["v8.0", 0.47],
//           ],
//         },
//         {
//           name: "Safari",
//           id: "Safari",
//           data: [
//             ["v11.0", 3.39],
//             ["v10.1", 0.96],
//             ["v10.0", 0.36],
//             ["v9.1", 0.54],
//             ["v9.0", 0.13],
//             ["v5.1", 0.2],
//           ],
//         },
//         {
//           name: "Edge",
//           id: "Edge",
//           data: [
//             ["v16", 2.6],
//             ["v15", 0.92],
//             ["v14", 0.4],
//             ["v13", 0.1],
//           ],
//         },
//         {
//           name: "Opera",
//           id: "Opera",
//           data: [
//             ["v50.0", 0.96],
//             ["v49.0", 0.82],
//             ["v12.1", 0.14],
//           ],
//         },
//       ],
//     },
//   });

// });
