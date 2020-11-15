import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'ng-highcharts';

  /*data = [
    {
      name: 'test.com',
      data: [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654]
    },
    {
      name: 'demo.com',
      data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]
    }
  ];*/

  isHighcharts = typeof Highcharts === 'object'; // to prevent highcharts from running on the server-side
  highcharts: typeof Highcharts = Highcharts; // required
  updateFlag = false;

  chartOptions: Highcharts.Options = { // required
      chart: {
         type: "column"
      },
      title: {
         text: "Monthly Site Visitor"
      },
      xAxis:{
         categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      yAxis: {          
         title:{
            text:"Visitors"
         } 
      },
      series: [
        {
          name: 'test.com',
          type: 'column',
          data: [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654]
        },
        {
          name: 'demo.com',
          type: 'column',
          data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]
        }
      ]
  };

  handleUpdate() {
    this.chartOptions = {
      title:{
        text: 'updated'
      },
      chart: {
        type: 'line'
      },
      // series: this.data.reverse()
      series: [
        {
          name: 'demo.com',
          type: 'column',
          data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]
        },
        {
          name: 'test.com',
          type: 'column',
          data: [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654]
        }
      ]
    };

    this.updateFlag = true;
  }

  ngOnInit() {}
}
