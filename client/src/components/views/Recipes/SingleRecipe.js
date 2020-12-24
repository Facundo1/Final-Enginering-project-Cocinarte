import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchRecipes } from '../../../_actions/recipe_actions'
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
          <div>
            <div>
              <h2>Cargando Receta...</h2>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div>
        <div>
          <div id='RecipeImageContainer'>
            {
              <Link to='/Recetas' id='btnVolver'>
                <button className='btn btn-info  text-white rounded h5'>
                  Volver
                </button>
              </Link>
            }
            <h3 className='titleReceta rounded mt-3'>
              <strong>{recipe.title}</strong>
            </h3>
            <img
              src={`http://localhost:5000/${recipe.photo}`}
              id='imgRecipe'
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
          <div id='DetallesRecetaContainer'>
            <h3>
              <strong>{recipe.description}</strong>
            </h3>

            <ul>
              <h2 className='titleIngredientes rounded'>
                <strong>Ingredientes</strong>
              </h2>
              {Ingredients.map((item, index) => {
                return (
                  <li className='font-weight-bold h5' key={index}>
                    {item}
                  </li>
                )
              })}
            </ul>
            <h3 className='titlePasos rounded mb-3'>
              <strong>Pasos</strong>
            </h3>
            <ul>
              {Steps.map((item, index) => {
                return (
                  <li className='font-weight-bold text-left h5' key={index}>
                    {item}
                  </li>
                )
              })}
            </ul>

            <h3 className='titleCategoria rounded'>
              <strong>{'Categoria de la receta'}</strong>
            </h3>
            <h4>
              <strong>{recipe.Category}</strong>
            </h4>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recipes: state.recipe.items
})

export default connect(mapStateToProps, {
  fetchRecipes
})(SingleRecipe)
