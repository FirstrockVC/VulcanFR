import React, {Component} from 'react';
import GraphComponent from '../../components/graph';
import * as _ from 'lodash';

class GraphKip extends Component {

  config = {
    chart: { type: 'line', zoomType: 'x'},
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
  };

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    const { getReport,cleanReport } = this.props;
    if (nextProps.successUploadData) {
        getReport('convertkip');
    }
    if (nextProps.successGetReport){
      this.onGenerateReport(nextProps.report);
    }
  }

  onGenerateReport(result){
    this.config.series = [{ name: 'users', data: _.map(result, 'cumulativeusers'), color: '#48C0E6'}];
    this.config.xAxis = {
      type: 'datetime',
      categories: _.map(result, 'period'),
      title: {
        text: 'Period'
      }
    };
  }

  render() {
    return (
      <GraphComponent config={this.config}/>
    );
  }
}

export default GraphKip;
