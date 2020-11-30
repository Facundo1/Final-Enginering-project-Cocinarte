import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchRecipes } from '../../../_actions/recipe_actions'

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
    const Ingredients = recipe.Ingredients && recipe.Ingredients.split(',')
    if (this.state.loading) {
      return (
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-6 my-3'>
              <h2 className='text-uppercase text-orange text-center'>
                Cargando Receta...
              </h2>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className='container my-5'>
        <div className='row'>
          <div
            id='RecipeImageContainer'
            className='col-10 mx-auto col-md-6 my-3'
          >
            <Link
              to='/Recetas'
              id='btnVolver'
              className='btn btn-warning mb-5 text-capatilize'
            >
              Volver
            </Link>
            <img
              src={`http://localhost:5000/${recipe.photo}`}
              id='imgRecipe'
              className='d-block w-100'
              style={{ maxHeight: '30rem' }}
              alt='recipe'
            />
          </div>
          {/* info */}
          <div
            id='DetallesRecetaContainer'
            className='col-10 mx-auto col-md-6 my-3'
          >
            <h1 className='text-uppercase'>
              <strong>{recipe.title}</strong>
            </h1>

            <h3 className='text-uppercase'>
              <strong>{recipe.description}</strong>
            </h3>

            <ul className='list-group mt-4'>
              <h2 className='mt-3 mb-4'>
                <strong>Ingredientes</strong>
              </h2>
              {Ingredients.map((item, index) => {
                return (
                  <li key={index} className='list-group-item text-slanted'>
                    {item}
                  </li>
                )
              })}
            </ul>
            <h3 className='text-uppercase'>
              <strong>{recipe.Steps}</strong>
            </h3>

            <h3 className='text-uppercase'>
              <strong>
                {'Categoria de la receta:' +
                  ' ' +
                  ' ' +
                  '[' +
                  ' ' +
                  recipe.Category +
                  ' ' +
                  ']'}
              </strong>
            </h3>
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
