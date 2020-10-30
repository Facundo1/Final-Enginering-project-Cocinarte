import React, { Component } from 'react'
import Chart from './chart'
import Highcharts from 'highcharts'
import MiniChart from './mini_chart'
import { bulking_context } from './utils/bulking_context'

class Bulking extends Component {
  render() {
    let foods = [
        {
          name: 'Banana (118gr)',
          proteins: 1,
          carbohydrates: 27,
          fats: 0
        },
        {
          name: 'Manteca (14gr)',
          proteins: 0,
          carbohydrates: 0,
          fats: 11
        },
        {
          name: 'mantequilla de maní (32gr)',
          proteins: 8,
          carbohydrates: 6,
          fats: 16
        },
        {
          name: 'Nueces (28gr)',
          proteins: 4,
          carbohydrates: 4,
          fats: 18
        },
        {
          name: 'Chicken Breast (86gm)',
          proteins: 27,
          carbohydrates: 0,
          fats: 3
        },
        {
          name: 'Pechuga de pollo (195gr)',
          proteins: 5,
          carbohydrates: 45,
          fats: 2
        }
      ],
      foodItems = foods.map((food, index) => {
        return (
          <div
            className='col-xs-12 col-sm-6 col-md-4 col-lg-3 go-eat-mini-chart thumbnail'
            key={index}
          >
            <MiniChart
              name={food.name}
              proteins={food.proteins}
              carbohydrates={food.carbohydrates}
              fats={food.fats}
            />
          </div>
        )
      })

    const options = {
      title: {
        text: 'Calorias diarias '
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format:
              '<b>{point.name}</b><br/><div><center>{point.percentage:.1f} %</center></div>',
            style: {
              color:
                (Highcharts.theme && Highcharts.theme.contrastTextColor) ||
                'black'
            }
          }
        }
      },
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      series: [
        {
          name: 'Nutrients',
          colorByPoint: true,
          data: [
            {
              name: 'Carbs',
              y: 40
            },
            {
              name: 'Proteinas',
              y: 40,
              sliced: true,
              selected: true
            },
            {
              name: 'Grasas',
              y: 16
            },
            {
              name: 'Vitaminas y minerales',
              y: 4
            }
          ]
        }
      ]
    }
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12 col-md-4 col-lg-6'>
            <center>
              <h3>Ingesta diaria (Ganar masa muscular)</h3>
            </center>
            {bulking_context(this.props.BmrReducer.bmrValueModified)}
            <br></br>
            <h3>Alimentos recomendados por |Cocinarte|</h3>
          </div>
          <div className='col-xs-12 col-md-8 col-lg-6'>
            <Chart options={options} />
          </div>
        </div>
        <div className='row well'>{foodItems}</div>
      </div>
    )
  }
}

export default Bulking
