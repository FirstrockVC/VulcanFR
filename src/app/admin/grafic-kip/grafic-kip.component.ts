import { Component, OnInit } from '@angular/core';
import { ConvertService } from '../shared/convert.service';
import swal from 'sweetalert2';
import * as _ from 'lodash';

@Component({
  selector: 'grafic-kip',
  templateUrl: './grafic-kip.component.html',
  providers: [ConvertService]
})
export class GraficKIPComponent implements OnInit {

  public chartOptions;

  constructor(public convertService: ConvertService) { }

  ngOnInit() {
  }

  public onGenerateReport(){
    this.convertService.convert('/convertkip').subscribe((result) => {
     this.chartOptions = {
      chart: { type: 'spline', zoomType: 'x'},
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
        spline: {
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
