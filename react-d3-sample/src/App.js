import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { VennDiagram } from 'venn.js';
import * as d3 from "d3";

const DATA = [{ sets: ['A'], size: 12 },
{ sets: ['B'], size: 12 },
{ sets: ['A', 'B'], size: 2 }];

class App extends Component {

  componentDidMount() {
    var sets = [
      {"sets": [0], "size": 4832},
        {"sets": [ 1], "size": 4832},
        {"sets": [ 2], "size": 2602},
        {"sets": [ 3], "size": 6141},
        {"sets": [0, 4], "size": 2723},
        {"sets": [0, 5], "size": 3177},
        {"sets": [0, 6], "size": 5384},
        {"sets": [0, 7], "size": 2252},
        {"sets": [0, 8], "size": 877},
        {"sets": [0, 9], "size": 1663},
        {"sets": [0, 10], "size": 899},
        {"sets": [0, 11], "size": 4557},
        {"sets": [0, 12], "size": 2332},
        {"sets": [1, 2], "size": 162},
        {"sets": [1, 3], "size": 396},
        {"sets": [1, 4], "size": 133},
        {"sets": [1, 5], "size": 135},
        {"sets": [1, 6], "size": 511},
        {"sets": [1, 7], "size": 159},
        {"sets": [1, 8], "size": 47},
        {"sets": [1, 9], "size": 168},
        {"sets": [1, 10], "size": 68},
        {"sets": [1, 11], "size": 336},
        {"sets": [1, 12], "size": 172},
        {"sets": [2, 3], "size": 406},
        {"sets": [2, 4], "size": 350},
        {"sets": [2, 5], "size": 1335},
        {"sets": [2, 6], "size": 145},
        {"sets": [2, 7], "size": 347},
        {"sets": [2, 8], "size": 176},
        {"sets": [2, 9], "size": 119},
        {"sets": [2, 10], "size": 46},
        {"sets": [2, 11], "size": 418},
        {"sets": [2, 12], "size": 146},
        {"sets": [3, 4], "size": 5465},
        {"sets": [3, 5], "size": 849},
        {"sets": [3, 6], "size": 724},
        {"sets": [3, 7], "size": 273},
        {"sets": [3, 8], "size": 143},
        {"sets": [3, 9], "size": 180},
        {"sets": [3, 10], "size": 218},
        {"sets": [3, 11], "size": 599},
        {"sets": [3, 12], "size": 3453},
        {"sets": [4, 5], "size": 977},
        {"sets": [4, 6], "size": 232},
        {"sets": [4, 7], "size": 250},
        {"sets": [4, 8], "size": 166},
        {"sets": [4, 9], "size": 97},
        {"sets": [4, 10], "size": 106},
        {"sets": [4, 11], "size": 225},
        {"sets": [4, 12], "size": 1807},
        {"sets": [5, 6], "size": 196},
        {"sets": [5, 7], "size": 642},
        {"sets": [5, 8], "size": 336},
        {"sets": [5, 9], "size": 165},
        {"sets": [5, 10], "size": 143},
        {"sets": [5, 11], "size": 782},
        {"sets": [5, 12], "size": 332},
        {"sets": [6, 7], "size": 262},
        {"sets": [6, 8], "size": 85},
        {"sets": [6, 9], "size": 284},
        {"sets": [6, 10], "size": 68},
        {"sets": [6, 11], "size": 363},
        {"sets": [6, 12], "size": 218},
        {"sets": [7, 8], "size": 1581},
        {"sets": [7, 9], "size": 716},
        {"sets": [7, 10], "size": 133},
        {"sets": [7, 11], "size": 254},
        {"sets": [7, 12], "size": 132},
        {"sets": [8, 9], "size": 280},
        {"sets": [8, 10], "size": 53},
        {"sets": [8, 11], "size": 117},
        {"sets": [8, 12], "size": 67},
        {"sets": [9, 10], "size": 57},
        {"sets": [9, 11], "size": 184},
        {"sets": [9, 12], "size": 89},
        {"sets": [10, 11], "size": 51},
        {"sets": [10, 12], "size": 115},
        {"sets": [11, 12], "size": 162},
        {"sets": [0, 1, 6], "size": 480},
        {"sets": [0, 1, 9], "size": 152},
        {"sets": [0, 2, 7], "size": 112},
        {"sets": [0, 3, 4], "size": 715},
        {"sets": [0, 3, 12], "size": 822},
        {"sets": [0, 4, 5], "size": 160},
        {"sets": [0, 5, 11], "size": 292},
        {"sets": [0, 6, 12], "size": 122},
        {"sets": [0, 7, 11], "size": 118},
        {"sets": [0, 9, 10], "size" :13},
        {"sets": [2, 7, 8], "size": 72}
      ]
    ;

    var chart = VennDiagram();
    d3.select("#venn").datum(sets).call(chart);
  }

  render() {

    //var chart = VennDiagram();


    return (
      <div id="venn">

      </div>
    );
  }
}

export default App;
