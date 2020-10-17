import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Recipe extends Component {
  render() {
    const recipe = this.props.recipe
    const recipesItems = (
      <div className='col-md-4' key={recipe._id}>
        <div className='thumbnail text-center'>
          <img src={recipe.photo} alt='photo' />
          <p>{recipe.title}</p>
          <Link
            to={`/Recetas/${recipe._id}`}
            className='btn btn-primary text-capitalize'
          >
            Detalles
          </Link>
        </div>
      </div>
    )

    return <div className='listOfRecipes'>{recipesItems}</div>
  }
}
