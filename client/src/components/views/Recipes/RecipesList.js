import React, { Component } from 'react'
import Recipe from './Recipe'
import { connect } from 'react-redux'
import { fetchRecipes } from '../../../_actions/recipe_actions'

class RecipeList extends Component {
  componentDidMount() {
    this.props.fetchRecipes()
  }
  render() {
    return (
      <>
        <div className='container py-5'>
          {/* title */}
          <div id='rowTitle'>
            <div className='col-10 mx-auto col-md-6 text-center text-uppercase mb-3'>
              <h1 className='text-slanted'>Algunas de nuestras recetas</h1>
            </div>
          </div>
          {/* end of title */}
          <div id='rowRecipes'>
            {this.props.recipes &&
              this.props.recipes.map(recipe => (
                <Recipe key={recipe.recipe_id} recipe={recipe} />
              ))}
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  recipes: state.recipe.filteredItems
})

export default connect(mapStateToProps, {
  fetchRecipes
})(RecipeList)
