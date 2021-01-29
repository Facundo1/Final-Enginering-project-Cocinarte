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
  recipes: state.recipe.items
})

export default connect(mapStateToProps, {
  fetchRecipes
})(RecipeList)
