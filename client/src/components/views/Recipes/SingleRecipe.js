import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchRecipes } from '../../../_actions/recipe_actions'
import { deleteRecipe } from '../../../_actions/recipe_actions'
import Favorite from './Favorite'

class SingleRecipe extends Component {
  constructor(props) {
    super(props)
    const id = this.props.match.params.id
    this.state = {
      recipe: {},
      id,
      loading: true
    }
  }

  async componentDidMount() {
    try {
      await this.props.fetchRecipes()
    } catch (e) {
      console.log(e)
    }
  }

  componentDidUpdate() {
    if (!this.state.recipe.title && this.props.recipes) {
      const detailRecipe = this.props.recipes.find(
        x => x._id.toString() === this.state.id.toString()
      )

      if (detailRecipe) {
        this.setState({
          recipe: detailRecipe,
          loading: false
        })
      }
    }
  }

  render() {
    const recipe = this.state.recipe
    const id = this.state.recipe._id
    console.log(id)
    const Ingredients = recipe.Ingredients && recipe.Ingredients.split(',')
    const Steps = recipe.Steps && recipe.Steps.split('-')
    if (this.state.loading) {
      return (
        <div>
          <div className='d-flex justify-content-center'>
            <h2>Cargando Receta...</h2>
          </div>
        </div>
      )
    }
    return (
      <div>
        <div className='d-flex justify-content-center'>
          <h5 className='titleReceta rounded mt-3 font-weight-bold'>
            {recipe.title}
          </h5>
        </div>
        <div className='d-flex justify-content-center'>
          <img
            src={`http://localhost:5000/${recipe.photo}`}
            style={{ maxHeight: '30rem' }}
            alt='recipe'
          />
        </div>
        <div>
          <Favorite
            userFrom={localStorage.getItem('userId')}
            recipeId={id}
            recipeInfo={recipe}
          />
        </div>
        {/* info */}
        <div className='d-flex justify-content-center mt-4'>
          <h5 className='text-dark font-weight-bold'>{recipe.description}</h5>
        </div>
        <div className='d-flex justify-content-center mt-4'>
          <ul>
            <h2 className='titleIngredientes rounded'>Ingredientes</h2>
            {Ingredients.map((item, index) => {
              return (
                <li className='h5 font-weight-bold' key={index}>
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
        <div className='d-flex justify-content-center'>
          <h5 className='titlePasos rounded mt-4 mb-3'>Pasos</h5>
        </div>
        <div className='d-flex justify-content-center'>
          <ul>
            {Steps.map((item, index) => {
              return (
                <li className='text-left h5 font-weight-bold' key={index}>
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
        <div className='d-flex justify-content-center'>
          <h5 className='titleCategoria rounded'>{'Categoria de la receta'}</h5>
        </div>
        <div className='d-flex justify-content-center'>
          <h4 className='font-weight-bold'>{recipe.Category}</h4>
        </div>

        <div className=' d-flex justify-content-center'>
          {this.props.user &&
          this.props.user.email === 'facundosa123@gmail.com' ? (
            <button
              className=' mt-2 btn btn-danger btn-xs'
              onClick={() => {
                this.props.deleteRecipe(recipe._id)
                this.props.history.push('/Recetas')
              }}
            >
              Eliminar
            </button>
          ) : (
            ''
          )}
        </div>
        <div className='d-flex justify-content-center'>
          {
            <Link to='/Recetas' id='btnVolver'>
              <button className='mt-2 btn btn-info  text-white rounded h5'>
                Volver
              </button>
            </Link>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recipes: state.recipe.items,
  user: state.user.userData
})

export default connect(mapStateToProps, {
  fetchRecipes,
  deleteRecipe
})(SingleRecipe)
