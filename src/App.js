import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DashboardContainer from './pages/dashboard';

class App extends Component {

   config = {
    chart: {
      spacingBottom: 20
    },
    title: {
      text: 'Europe time zones'
    },

    legend: {
      enabled: true
    },

    plotOptions: {
      map: {
        allAreas: false,
        joinBy: ['iso-a2', 'code'],
        dataLabels: {
          enabled: true,
          color: 'white',
          style: {
            fontWeight: 'bold'
          }
        },
        tooltip: {
          headerFormat: '',
          pointFormat: '{point.name}: <b>{series.name}</b>'
        }

      }
    },
    series: [{
      name: 'UTC',
      data: ['IE', 'IS', 'GB', 'PT'].map(function (code) {
        return {code: code};
      })
    }, {
      name: 'UTC + 1',
      data: ['NO', 'SE', 'DK', 'DE', 'NL', 'BE', 'LU', 'ES', 'FR', 'PL', 'CZ', 'AT', 'CH', 'LI', 'SK', 'HU',
        'SI', 'IT', 'SM', 'HR', 'BA', 'YF', 'ME', 'AL', 'MK'].map((code) => {
        return {code: code};
      })
    }]
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <DashboardContainer/>
      </div>
    );
  }
}

export default App;
