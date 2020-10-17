import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterRecipesByCategory } from '../../../_actions/recipe_actions'

class Filter extends Component {
  render() {
    return (
      <div className='col-md-4'>
        <label>
          Elegir Categoria
          <select
            className='form-control'
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
  Category: state.recipe.Category
})

export default connect(mapStateToProps, { filterRecipesByCategory })(Filter)
