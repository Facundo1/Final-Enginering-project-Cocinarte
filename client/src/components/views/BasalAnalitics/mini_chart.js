import React, { Component } from 'react'
import Chart from './chart'

class MiniChart extends Component {
  render() {
    const options = {
      chart: {
        type: 'column'
      },
      title: {
        text: this.props.name
      },
      subtitle: {
        text: null
      },
      xAxis: {
        categories: [''],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: ' (gm)'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} gm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [
        {
          name: 'Carbs',
          data: [this.props.carbohydrates]
        },
        {
          name: 'Proteinas',
          data: [this.props.proteins]
        },
        {
          name: 'Grasas',
          data: [this.props.fats]
        }
      ]
    }
    return <Chart options={options} />
  }
}

export default MiniChart
