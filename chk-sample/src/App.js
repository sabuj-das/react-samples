import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import * as HighchartsMore from 'highcharts/highcharts-more';
HighchartsMore(Highcharts);

const DATA = [
  { category: 1, series: [100, 120, 20, 90, 89, 78] },
  { category: 2, series: [100, 120, 20, 90, 89, 78] },
  { category: 3, series: [100, 120, 20, 90, 89, 78] },
  { category: 4, series: [100, 120, 20, 90, 89, 78] }
]

const allCategories = () => {
  let cats = [];
  DATA.map((d) => { cats.push(d.category) });
  return cats;
}

const options = {
  title: {
    text: 'My chart'
  },
  chart: {
    type: 'boxplot'
  },
  legend: {
    align: 'right',
      verticalAlign: 'top',
      layout: 'vertical',
      x: 0,
      y: 100
  },
  xAxis: {
    categories: allCategories,
    title: {
      text: 'Experiment No.'
    }
  },

  series: [{
    data: [100, 200, 300, 800, 999]
  }]
}


class App extends Component {

  constructor(props) {
    super(props);

    this.chartCallback = this.chartCallback.bind(this)
  }

  chartCallback(e) {

  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div id="graph">
          <span>graph</span>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
        </div>
        <div id="category">
          <span>category legend</span>
        </div>
        <div id="data">
          <span>Data</span>
        </div>
      </div>
    );
  }
}

export default App;
