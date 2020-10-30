import React, { Component } from 'react'
import Chart from './chart'
import Highcharts from 'highcharts'
import MiniChart from './mini_chart'
import { cutting_context } from './utils/cutting_context'

class Cutting extends Component {
  render() {
    const options = {
      title: {
        text: 'Calorias diarias'
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
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
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
              y: 33
            },
            {
              name: 'Proteinas',
              y: 56,
              sliced: true,
              selected: true
            },
            {
              name: 'Grasas',
              y: 7
            },
            {
              name: 'Vitaminas y minerales',
              y: 4
            }
          ]
        }
      ]
    }
    let foods = [
        {
          name: 'Pata de pollo (95gr)',
          proteins: 26,
          carbohydrates: 0,
          fats: 8
        },
        {
          name: 'Aceitunas (165gr)',
          proteins: 42,
          carbohydrates: 0,
          fats: 1
        },
        {
          name: 'Lentejas (198gr)',
          proteins: 18,
          carbohydrates: 40,
          fats: 1
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
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12 col-md-4 col-lg-6'>
            <center>
              <h3>Ingesta diaria (Reduccion de grasas)</h3>
            </center>
            {cutting_context(this.props.BmrReducer.bmrValueModified)}
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

export default Cutting
