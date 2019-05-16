//import React, { Component } from 'react';

export const MASTER_DATA = {
    categories: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }, { id: 4, name: 'D' }, { id: 5, name: 'E' }],
    dataSet: [
        { category: 1, set: [123, 234, 140, 777, 666] },
        { category: 2, set: [123, 234, 140, 777, 666] },
        { category: 3, set: [123, 234, 140, 777, 666] },
        { category: 4, set: [123, 234, 140, 777, 666] },
        { category: 5, set: [123, 234, 140, 777, 666] }
    ]
}


export function ALL_CATEGORIES() {
    return MASTER_DATA.categories;
}

function ALL_CATEGORY_NAMES(categories){
    let x = [];
    x.concat(categories);
    console.log(categories)
    return x.map((c) => { return c.name });
}

export function buildSeries(categories) {
    let x = [];
    x.concat(categories);
    let series = {
        name: 'Observations',
        data: [

        ],
        tooltip: {
            headerFormat: '<em>Experiment No {point.key}</em><br/>'
        }
    };
    x.map((c) => {
        console.log( "c: ", c)
        series.data.push(MASTER_DATA.dataSet.find(k => c.id === k.category).map(d => {return d.set})
    });
    return series;
}

export function CHART_OPTS (categories) {
    let cats = ALL_CATEGORY_NAMES(categories);
    console.log(cats)
    let sss = buildSeries(MASTER_DATA.categories);
    console.log("sss: ",sss)
    return ({
        chart: {
            type: 'boxplot'
        },

        title: {
            text: 'Highcharts Box Plot Example'
        },

        legend: {
            enabled: false
        },

        xAxis: {
            categories: cats,
            title: {
                text: 'Experiment No.'
            }
        },

        series: sss
    })
};

