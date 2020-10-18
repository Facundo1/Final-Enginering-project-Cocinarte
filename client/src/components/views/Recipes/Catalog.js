import React, { Component } from 'react'
import RecipeList from './RecipesList'
import Filter from './Filter'
import { connect } from 'react-redux'
import { filterRecipesByCategory } from '../../../_actions/recipe_actions'

class Catalog extends Component {
  render() {
    return (
      <>
        <h1 id='text-Category'>Catalogo de recetas</h1>
        <Filter />
        <RecipeList />
        )}
      </>
    )
  }
}

const mapStateToProps = state => ({
  Recipes: state.recipe.items
})

export default connect(mapStateToProps, {
  filterRecipesByCategory
})(Catalog)
