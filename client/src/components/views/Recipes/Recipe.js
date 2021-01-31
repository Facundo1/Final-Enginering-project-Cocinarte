import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteRecipe } from '../../../_actions/recipe_actions'
<<<<<<< HEAD
import "./style.css"
=======
import { fetchRecipes } from '../../../_actions/recipe_actions'
>>>>>>> 845ad3c7f67d55fa00dd30e56f751af0326e0756
class Recipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //PopUp overlayState
      check: false,
      chek2: false
    }
  }

  render() {
    const recipe = this.props.recipe
    const recipesItems = (
      <div className='col-md-4' key={recipe._id}>
        <div className='mb-5 thumbnail'>
          <img
            src={`http://localhost:5000/${recipe.photo}`}
            alt='photo'
            width='100'
            height='200'
          />
          <p className='text-nowrap'>{recipe.title}</p>

          <Link to={`/Recetas/${recipe._id}`}>
            <button className='btnDetalle btn btn-info  text-white rounded h5'>
              Detalles
            </button>
          </Link>
<<<<<<< HEAD
          <button
            className='btnDelete btn btn-danger btn-xs'
            onClick={deleteRecipe(recipe._id)}
          >
            Eliminar
          </button>
=======

          {this.props.user &&
          this.props.user.email === 'facundosa123@gmail.com' ? (
            <button
              className='btn btn-danger btn-xs'
              onClick={() => this.props.deleteRecipe(recipe._id)}
            >
              Eliminar
            </button>
          ) : (
            ''
          )}
>>>>>>> 845ad3c7f67d55fa00dd30e56f751af0326e0756
        </div>
      </div>
    )

    return <div className='listOfRecipes'>{recipesItems}</div>
  }
}

const mapStateToProps = state => ({
  recipes: state.recipe.items,
  user: state.user.userData
})

export default connect(mapStateToProps, {
  deleteRecipe,
  fetchRecipes
})(Recipe)
