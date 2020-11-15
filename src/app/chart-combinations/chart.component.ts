import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})

export class ChartComponent implements OnInit {

    title = 'chart-combinations';
    highcharts: typeof Highcharts = Highcharts; // required
    updateFlag = false;

    chartOptions: Highcharts.Options = { // required
        title: {
            text: "Chart Combinations"
        },
        xAxis:{
            categories:["Apples", "Oranges", "Pears", "Bananas", "Plums"]
        },
        labels: {
            items: [{
                html: 'Total fruit consumption',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.defaultOptions.title.style && Highcharts.defaultOptions.title.style.color) || "black"
                }
            }]
        },
        series: [
            {
                name: 'Jane',
                type: 'column',
                data: [3, 2, 1, 3, 4]
            },
            {
                name: 'John',
                type: 'column',
                data: [2, 3, 5, 7, 6]
            },
            {
                name: 'Joe',
                type: 'column',
                data: [4, 3, 3, 9, 0]
            }, 
            {
                name: 'Average',
                type: 'spline',
                data: [3, 2.67, 3, 6.33, 3.33],
                marker: {
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[3],
                    fillColor: 'white'
                }
            },
            {
                name: 'Total consumption',
                type: 'pie',
                data: [
                    {
                        name: 'Jane',
                        y: 13,
                        color: Highcharts.getOptions().colors[0] // Jane's color
                    }, 
                    {
                        name: 'John',
                        y: 23,
                        color: Highcharts.getOptions().colors[1] // John's color
                    }, 
                    {
                        name: 'Joe',
                        y: 19,
                        color: Highcharts.getOptions().colors[2] // Joe's color
                    }
                ],
                center: [100, 80],
                size: 100,
                showInLegend: false,
                dataLabels: {
                    enabled: false
                }
            }, 
        ]
    };

    ngOnInit() {}
}
