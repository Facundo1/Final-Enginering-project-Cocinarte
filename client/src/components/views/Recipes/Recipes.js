import React, { Component } from 'react'
import RecipeList from './RecipesList'
import Search from './Search'
import { connect } from 'react-redux'
import { fetchRecipes } from '../../../_actions/recipe_actions'

class Recipes extends Component {
  componentDidMount() {
    this.props.fetchRecipes()
  }
  render() {
    return (
      <>
        <Search />
        <RecipeList />
        )}
      </>
    )
  }
}

const mapStateToProps = state => ({
  recipes: state.recipe.items
})

export default connect(mapStateToProps, {
  fetchRecipes
})(Recipes)
