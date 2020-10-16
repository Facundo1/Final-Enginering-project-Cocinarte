import React, { Component } from 'react'
import RecipeList from './RecipesList'
import Search from './Search'
import { recipeData } from '../../../API/TempList'

export default class Catalog extends Component {
  render() {
    return (
      <>
        <h1 id='text-Category'>Categorias</h1>
        <div id='categoryNames'>
          <button className='categoryButton'>Carnes</button>
          <button className='categoryButton'>Pastas</button>
          <button className='categoryButton'>Pizzas</button>
          <button className='categoryButton'>Vegetariano</button>
          <button className='categoryButton'>Postres</button>
          <button className='categoryButton'>Natural</button>
        </div>
        <RecipeList />
        )}
      </>
    )
  }
}
