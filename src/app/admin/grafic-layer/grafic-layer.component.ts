import { Component, OnInit } from '@angular/core';
import { ConvertService } from '../shared/convert.service';
import swal from 'sweetalert2';
import * as _ from 'lodash';

@Component({
  selector: 'grafic-layer',
  templateUrl: './grafic-layer.component.html',
  providers: [ConvertService]
})
export class GraficLayerComponent implements OnInit {

  public chartOptions;

  constructor(public convertService: ConvertService) { }

  ngOnInit() {
  }

  public onGenerateReport(){
    this.convertService.convert('/convertxlayer').subscribe((result) => {
      const chart = [];
      _.forEach(_.map(_.uniqBy(result, 'cohort_period'), 'cohort_period'),(value) => {
        chart.push({ name: value, data: _.map(_.filter(result,(o) => { return o.cohort_period === value }), 'users')});
      });
    this.chartOptions = {
      chart: {
        type: 'area'
    },
    title: {
        text: null
    },
    xAxis: {
        categories: _.map(_.uniqBy(result, 'cohort_period'), 'cohort_period'),
        endOnTick: false,
    },
    yAxis: {
        title: {
            text: 'Users'
        },
        reversedStacks: true,
    },
    plotOptions: {
      area: {
          marker: {
              enabled: false
          },
      }
    },
    series: chart
    };
   }, (error) => {
     swal({
       title: 'Error',
       text: 'An error occurs when importing the data',
       type: 'error'
       });
   });
  }
}
