import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchByIngredients } from '../../../_actions/recipe_actions'

class Search extends Component {
  render() {
    const { search, value } = this.props
    return (
      <div id='containerRecipesText'>
        <div>
          <div>
            <h1>
              La cocina mucho más facil con <strong>|Cocinarte|</strong>
            </h1>
            <form>
              <label htmlFor='search' className='Search-Ingredients-Label'>
                Ingrese lo ingredientes que tiene a mano separados por una coma
              </label>
              <div className='containerSerch Search-Ingredients-Textbox'>
                <input
                  type='text'
                  name='search'
                  className='form-control'
                  placeholder='Pollo,Cebolla,Zanahoria'
                  onChange={e =>
                    this.props.searchByIngredients(
                      this.props.recipes,
                      e.target.value
                    )
                  }
                />
                <div className='spaceBetween'></div>
                <button
                  className='border-0 rounded fas fa-search btn btn-info'
                  type='submit'
                ></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recipes: state.recipe.items,
  Ingredients: state.recipe.items.Ingredients
})

export default connect(mapStateToProps, { searchByIngredients })(Search)
