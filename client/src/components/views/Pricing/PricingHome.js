import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                Pagar con MercadoPago
              </a>
              <br></br>
              <a
                id='productPremiumButton'
                href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZLJJQSFLGXGDW'
              >
                Pagar con PayPal
              </a>
              <br></br>
              <div>
                <Link to='/ActivarCuenta' id='productPremiumButton'>
                  Ir a activar mi cuenta
                </Link>
              </div>
            </div>
          </div>
        </div>
        <br></br>
      </div>
    )
  }
}
