import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    const { handleChange, handleSubmit, search } = this.props
    return (
      <div id='containerRecipesText'>
        <div id='rowTittle'>
          <div className='col-10 mx-auto col-md-8 mt-5 text-center'>
            <h1 className='text-slanted text-capitalize'>
              La cocina mucho más facil con{' '}
              <strong className='text-orange'>|Cocinarte|</strong>
            </h1>
            <form className='mt-4'>
              <label htmlFor='search' className='text-capitalize'>
                Ingrese lo ingredientes que tiene a mano separados por una coma
              </label>
              <div className='input-group'>
                <input
                  type='text'
                  name='search'
                  className='form-control'
                  placeholder='Pollo,Cebolla,Zanahoria'
                  value={search}
                  onChange={handleChange}
                />
                <div className='input-group-append'>
                  <button
                    type='submit'
                    className='input-group-text bg-primary text-white'
                    onClick={handleSubmit}
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
