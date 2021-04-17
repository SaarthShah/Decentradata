Highcharts.getJSON('https://demo-live-data.highcharts.com/aapl-ohlc.json', function(data) {

  // create the chart
  Highcharts.stockChart('container', {


    rangeSelector: {
      selected: 1
    },

    title: {
      text: 'Predicted Price for (101,34)'
    },
    chart: {
        backgroundColor: '#00D3FF'
    },
    series: [{
      type: 'candlestick', 
      name: 'Predicted Price',
      data: data,
      dataGrouping: {
        units: [
          [
            'week', // unit name
            [1] // allowed multiples
          ],
          [
            'month',
            [1, 2, 3, 4, 6]
          ]
        ]
      }
    }]
  });
});