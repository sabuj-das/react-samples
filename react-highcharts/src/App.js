import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartMore from 'highcharts/highcharts-more'; 
import {ALL_CATEGORIES, MASTER_DATA, ALL_CATEGORY_NAMES, CHART_OPTS} from './SeriesData'

// HighchartMore(HighchartsReact.Highcharts);

class App extends Component {
  render() {
    return (

      <div className="App">
        <h1>box chart</h1><hr />
        <span>Each point in a box plot has five values: low, q1, median, q3 and high.</span>
        <br />
        <div id="graph">
          <HighchartsReact
            highcharts={Highcharts}
            options={CHART_OPTS(ALL_CATEGORIES)}
          />
        </div>
        <div id="x-legend"></div>
        <div id="x-category"></div>
      </div>
    );
  }
}

export default App;
