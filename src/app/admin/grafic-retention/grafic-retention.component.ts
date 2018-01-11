import { Component, OnInit } from '@angular/core';
import { ConvertService } from '../shared/convert.service';
import swal from 'sweetalert2';
import * as _ from 'lodash';

@Component({
  selector: 'grafic-retention',
  templateUrl: './grafic-retention.component.html',
  providers: [ConvertService]
})
export class GraficRetentionComponent implements OnInit {

  public chartOptions;

  constructor(public convertService: ConvertService) { }

  ngOnInit() {
  }

  public onGenerateReport(){
    this.convertService.convert('/convertretentioncohort').subscribe((result) => {
      const chart = [];
      _.forEach(_.map(_.uniqBy(result, 'cohort_period'), 'cohort_period'),(value) => {
        chart.push({ name: value, data: _.map(_.filter(result,(o) => { return o.cohort_period === value }), 'percen')});
      });
      this.chartOptions = {
        chart: { type: 'spline', zoomType: 'x'},
        xAxis: {
          categories: _.map(_.uniqBy(result, 'period'), 'period'),
          title: {
            text: 'Periods Since First Spend'
          }
        },
        yAxis: {
          type: 'porcentage',

          title: {
            text: 'Retention'
          }
        },
        tooltip: {
          valueSuffix: ' %'
        },
        plotOptions: {
          spline: {
              marker: {
                  enabled: false
              },
          }
        },
        title: { text : 'User Retention By Cohort'},
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
