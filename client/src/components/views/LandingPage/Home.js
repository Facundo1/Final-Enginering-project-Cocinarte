import React, { Component } from 'react'
import Header from '../LandingPage/Header'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div>
        <Header title=''>
          <div id='ContainerHome'>
            <h1>|Cocinarte|</h1>
            <Link to='Recetas'>
              <button className='btn btn-info  text-white rounded h5'>
                Buscar Ingredientes
              </button>
            </Link>
          </div>
        </Header>
      </div>
    </>
  )
}

export default Home
