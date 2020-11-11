$(function () {
  $('#container').highcharts({
    title: {
      text: 'People Powered Reading Progress Burnup Chart',
    },
    plotOptions: {
      line: {
        lineWidth: 3
      },
      tooltip: {
        hideDelay: 200
      }
    },
    xAxis: {
      categories: ['Start', 'Sprint 1', 'Sprint 2','Sprint 3','Sprint 4',]
    },
    yAxis: {
      min: 0,
      title: {
        text: null
      },
      plotLines: [{
        value: 0,
        width: 1
      }]
    },
    tooltip: {
      valueSuffix: 'People Powered Reading Progress Burnup Chart',
      crosshairs: true,
      shared: true
    },
    series: [
      {
        name: 'Ideal',
        color: 'rgba(0,255,0,0.25)',
        lineWidth: 1,
        data: [1, 10, 20, 30, 40, 50, 60]
      }, {
        name: 'Actual',
        color: 'rgba(0,120,200,0.75)',
        KWker: {
          radius: 10
        },
        data: [1,55]
      }, {
        name: 'Normal',
        color: 'rgba(225,200,0,0.75)',
        KWker: {
          radius: 2
        },
        data: [100,100,100,100,100]
      }
    ]
  });
});
