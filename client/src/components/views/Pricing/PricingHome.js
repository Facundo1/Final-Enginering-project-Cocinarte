import React, { Component } from 'react'

export default class PricingHome extends Component {
  render() {
    return (
      <div id='pricing-Container'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div id='productPremiumPrice'>
          <h1> Premium Pack </h1>
          <h1>$1800Ars /mes</h1>
          <div id='ProductPremiumInfo'>
            <p>
              ■ Sistema de dietas personalizado <br></br> <hr></hr> ■
              Seguimiento alimenticio profesional <br></br> <hr></hr>■ Cursos
              Profesionales de cocina y bartender <br></br> <hr></hr> ■
              Beneficios en locales de gastronomia <br></br> <hr></hr>
            </p>
            <div id='productPremiumButtonContainer'>
              <a id='productPremiumButton' href='https://mpago.la/1kAMks2'>
                Hacerme Premium
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
