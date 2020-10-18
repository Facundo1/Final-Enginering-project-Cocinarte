import React, { Component } from 'react'
import searchIngredients from '../../../_actions/recipe_actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export default class Search extends Component {
  render() {
    const { search, value } = this.props
    return (
      <div id='containerRecipesText'>
        <div id='rowTittle'>
          <div className='col-10 mx-auto col-md-8 mt-5 text-center'>
            <h1 className='text-slanted text-capitalize'>
              La cocina mucho más facil con{' '}
              <strong className='text-orange'>|Cocinarte|</strong>
            </h1>
            <form className='mt-4'>
              <label
                htmlFor='search'
                className='text-capitalize Search-Ingredients-Label'
              >
                Ingrese lo ingredientes que tiene a mano separados por una coma
              </label>
              <div className='input-group Search-Ingredients-Textbox'>
                <input
                  type='text'
                  name='search'
                  className='form-control'
                  placeholder='Pollo,Cebolla,Zanahoria'
                  //onChange={e => this.searchIngredients(e.target.value)}
                  //  value={value}
                />
                <div className='input-group-append Search-Ingredients-Button'>
                  <button
                    type='submit'
                    className='input-group-text bg-primary text-white'
                  >
                    <i className='fas fa-search' />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
/*
function mapStateToProps({ works }) {
  return { value: works.value }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchIngredients }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
*/
