import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ConvertService } from '../shared/convert.service';
import swal from 'sweetalert2';
import * as _ from 'lodash';

@Component({
  selector: 'grafic-mau',
  templateUrl: './grafic-mau.component.html',
  providers: [ConvertService],
  inputs:['loadGraphic']
})
export class GraficMAUComponent implements OnChanges {

  public chartOptions;
  public loadGraphic;

  constructor(public convertService: ConvertService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.loadGraphic){
      this.onGenerateReport();
    }
  }

  public onGenerateReport(){
    this.convertService.convert('/convertmaucohort').subscribe((result) => {
      const chart = [];
      _.forEach(_.map(_.uniqBy(result, 'cohort_period'), 'cohort_period'),(value) => {
        chart.push({ name: value, data: _.map(_.filter(result,(o) => { return o.cohort_period === value }), 'cumulative')});
      });
      this.chartOptions = {
        chart: { type: 'line', zoomType: 'x'},
        xAxis: {
          categories: _.map(_.uniqBy(result, 'period'), 'period'),
          title: {
            text: 'Periods Since First Spend'
          }
        },
        yAxis: {
          title: {
            text: 'Cumulative Active Per User'
          }
        },
        plotOptions: {
          line: {
              marker: {
                  enabled: false
              },
          }
        },
        title: { text : 'MAU LTV'},
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
