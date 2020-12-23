import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ActivateAccount extends Component {
  render() {
    return (
      <div id='pricing-Container'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div id='productPremiumPrice'>
          <h1> Activar mi cuenta </h1>

          <br></br>
          <div id='ProductPremiumInfo'>
            <p>
              ■ Introduce el codigo que enviamos a tu direccion de correo
              electronico para poder validar tu cuenta {''}{' '}
              <input type='text'></input>
              <hr></hr> ■ Con la version premium podras acceder a todos los
              beneficios de la plataforma y conectarte con los beneficios
              exclusivos en locales de gastronomia <hr></hr>
            </p>
            <div id='productPremiumButtonContainer'>
              <button to='/ActivateAccount' id='productPremiumButton'>
                Validar Codigo
              </button>
            </div>
          </div>
        </div>

        <br></br>
      </div>
    )
  }
}
