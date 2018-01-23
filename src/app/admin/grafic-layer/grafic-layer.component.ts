import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ConvertService } from '../shared/convert.service';
import swal from 'sweetalert2';
import * as _ from 'lodash';

@Component({
  selector: 'grafic-layer',
  templateUrl: './grafic-layer.component.html',
  providers: [ConvertService],
  inputs:['loadGraphic']
})

export class GraficLayerComponent implements OnChanges {

  public chartOptions;
  public loadGraphic;

  constructor(public convertService: ConvertService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.loadGraphic){
      this.onGenerateReport();
    }
  }

  public onGenerateReport(){
    this.convertService.convert('/convertxlayer').subscribe((result) => {
      const chart = [];
      let count = _.map(_.uniqBy(result, 'cohort_period'), 'cohort_period').length;
      _.forEach(_.map(_.uniqBy(result, 'cohort_period'), 'cohort_period'),(value) => {
        chart.push({ zIndex: count, name: value, data: _.map(_.filter(result,(o) => { return o.cohort_period === value }), 'cumulative')});
        count--;
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
          fillOpacity: 1,
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
