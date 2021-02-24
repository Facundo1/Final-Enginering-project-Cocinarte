import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
  return (
    <div className='cards'>
      <div class='bg-1'>
        <h1 class='t-stroke t-shadow'>BIENVENIDO A NUESTRA COCINA</h1>
      </div>
      <div class='bg-1'>
        <h1 class='t-stroke t-shadow font-italic'>
          {' '}
          Un lugar unico en el que las personas buscan recetas todos los dias,
          donde los aficionados se convierten en profesionales de la gastronomia
          y donde podras acceder a ofertas laborales en el área.
        </h1>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>

      <div class='bg-2'>
        <h1 class='t-stroke-shadow'>NUESTROS SERVICIOS</h1>
      </div>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Ofrecemos un catalogo con las mejores recetas para divertirse en la cocina'
              label='Ver mas...'
              path='/Catalogo'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Los usuarios disponen de los mejores cursos profesionales , para capacitarse constantemente'
              label='Ver mas...'
              path='/video/CursosOnline'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-4.jpg'
              text='Otorgamos un sistema de busqueda laboral en locales de gastronomia, para estar siempre atento a oportunidades.'
              label='Ver mas...'
              path='/Empleos'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Acceso a beneficios exclusivos en locales de gastronomia con nuestro partner Arte Culinario'
              label='Ver mas...'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
