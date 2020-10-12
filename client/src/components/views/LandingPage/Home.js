import React, { Component } from 'react'
import Header from '../LandingPage/Header'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header title=''>
          <div id='ContainerHome'>
            <h1>El arte de |Cocinarte|</h1>
            <Link
              to='Recetas'
              className='text-uppercase btn btn-secondary btn-lg mt-3'
            >
              Buscar ingredientes
            </Link>
          </div>
        </Header>
      </div>
    )
  }
}
