import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterRecipesByCategory } from '../../../_actions/recipe_actions'

class Filter extends Component {
  render() {
    return (
      <div id='category-combobox-box'>
        <h1>Categoria</h1>
        <label className="ml-3 mt-2 text-center">
          <select
            id='category-combobox'
            value={this.props.Category}
            onChange={e =>
              this.props.filterRecipesByCategory(
                this.props.recipes,
                e.target.value
              )
            }
          >
            <option value=''>Todas</option>
            <option value='Carnes'>Carnes</option>
            <option value='Vegetariano'>Vegetariano</option>
            <option value='Pizzas'>Pizzas</option>
            <option value='Pastas'>Pastas</option>
            <option value='Ensaladas'>Ensaladas</option>
            <option value='Postres'>Postres</option>
          </select>
        </label>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recipes: state.recipe.items,
  filteredRecipes: state.recipe.filteredItems,
  Category: state.recipe.items.Category
})

export default connect(mapStateToProps, { filterRecipesByCategory })(Filter)
