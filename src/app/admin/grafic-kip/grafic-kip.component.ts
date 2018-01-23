import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ConvertService } from '../shared/convert.service';
import swal from 'sweetalert2';
import * as _ from 'lodash';

@Component({
  selector: 'grafic-kip',
  templateUrl: './grafic-kip.component.html',
  providers: [ConvertService],
  inputs:['loadGraphic']
})
export class GraficKIPComponent implements OnChanges {

  public chartOptions;
  public loadGraphic;

  constructor(public convertService: ConvertService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.loadGraphic){
      this.onGenerateReport();
    }
  }

  public onGenerateReport(){
    this.convertService.convert('/convertkip').subscribe((result) => {
     this.chartOptions = {
      chart: { type: 'line', zoomType: 'x'},
      xAxis: {
        type: 'datetime',
        categories: _.map(result, 'period'),
        title: {
          text: 'Period'
        }
      },
      yAxis: {
        title: {
          text: 'MAU'
        }
      },
      plotOptions: {
        line: {
            marker: {
                enabled: false
            },
        }
      },
      legend: {
        enabled: false
      },
      title: { text : 'Period Aggregate'},
      series: [{ name: 'users', data: _.map(result, 'cumulativeusers'), color: '#48C0E6'}]
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
