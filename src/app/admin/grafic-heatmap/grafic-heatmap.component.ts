import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ConvertService } from '../shared/convert.service';
import swal from 'sweetalert2';
import * as _ from 'lodash';
import { months } from 'moment';

@Component({
  selector: 'grafic-heatmap',
  templateUrl: './grafic-heatmap.component.html',
  providers: [ConvertService],
  inputs:['loadGraphic']
})
export class GraficHeatMapComponent implements OnChanges {

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
      let periodcohort = 0;
      _.forEach(_.uniqBy(result, 'cohort_period'),(value) => {
        const cohorts = _.filter(result,(o) => { return o.cohort_period === value.cohort_period && o.activity_period !== value.cohort_period});
        _.forEach(_.uniqBy(cohorts, 'period'),(valuePeriod) => {
          chart.push([periodcohort, valuePeriod.period, valuePeriod.customerRePer]);
        });
        periodcohort++;
      });
      this.chartOptions = {
        chart: { type: 'heatmap', zoomType: 'x'},
        xAxis: {
          categories: _.map(_.uniqBy(result, 'cohort_period_format'), 'cohort_period_format'),
          title: 'Month of First Spend'
        },
      yAxis: {
        categories: _.map(_.uniqBy(result, 'period'), 'period'),
        title: 'Months Since First Spend'
      },
      colorAxis: {
        dataClasses: [{
            from: 0.00,
            to: 10.00,
            color: '#A3062A',
            name: '0.00%'
        }, {
            from: 10.00,
            to: 20.00,
            color: '#D5322F',
            name: '10.00%'
        }, {
            from: 20.00,
            to: 30.00,
            color: '#F26D4A',
            name: '20.00%'
        }, {
            from: 30.00,
            to: 40.00,
            color: '#FBAD68',
            name: '30.00%'
        },
        {
          from: 40.00,
          to: 50.00,
          color: '#FDDF90',
          name: '40.00%'
        },
        {
            from: 50.00,
            to: 60.00,
            color: '#FFFEC2',
            name: '50.00%'
        },
        {
          from: 60.00,
          to: 70.00,
          color: '#D9EE90',
          name: '60.00%'
        },
        {
          from: 70.00,
          to: 80.00,
          color: '#A7D770',
          name: '70.00%'
        },
        {
          from: 80.00,
          to: 90.00,
          color: '#69BC67',
          name: '80.00%'
        },
        {
          from: 90.00,
          to: 100.00,
          color: '#249753',
          name: '90.00%'
        },
        {
          from: 1000.00,
          color: '#0B6739',
          name: '100.00%'
        }
      ]
    },
    title: { text : 'Heatmap'},
      legend: {
          align: 'left',
          layout: 'vertical',
          margin: 0,
          verticalAlign: 'top',
      },
      tooltip: {
        formatter: function () {
            return '<b>Cohort: </b>' + this.series.xAxis.categories[this.point.x] + '<br>'
            + '<b>Retention: </b>' + this.point.value + '%';
        }
      },
      series: [{
          name: 'Sales per employee',
          borderWidth: 0,
          data: chart,
          dataLabels: {
              enabled: false,
          }
      }]
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
