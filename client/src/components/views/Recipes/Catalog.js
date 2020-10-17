import React, { Component } from 'react'
import RecipeList from './RecipesList'
import Filter from './Filter'
import { connect } from 'react-redux'
import { filterRecipesByCategory } from '../../../_actions/recipe_actions'

class Catalog extends Component {
  render() {
    return (
      <>
        <h1 id='text-Category'>Categorias</h1>
        <div id='categoryNames'>
          <button
            value='Carnes'
            onClick={e =>
              this.props.filterRecipesByCategory(
                this.props.recipes,
                e.target.value
              )
            }
            className='categoryButton'
          >
            Carnes
          </button>
          <button className='categoryButton'>Pastas</button>
          <button className='categoryButton'>Pizzas</button>
          <button className='categoryButton'>Vegetariano</button>
          <button className='categoryButton'>Postres</button>
          <button className='categoryButton'>Natural</button>
        </div>
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
