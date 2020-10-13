import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class SingleRecipe extends Component {
  constructor(props) {
    super(props)
    const id = this.props.match.params.id
    this.state = {
      recipe: {},
      id,
      loading: true
    }
  }
  async componentDidMount() {
    const url = `https://recipesapi.herokuapp.com/api/get?rId=${this.state.id}`
    try {
      const response = await fetch(url)
      const responseData = await response.json()
      this.setState({
        recipe: responseData.recipe,
        loading: false
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe
    if (this.state.loading) {
      return (
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-6 my-3'>
              <h2 className='text-uppercase text-orange text-center'>
                Cargando Receta...
              </h2>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className='container my-5'>
        <div className='row'>
          <div
            id='RecipeImageContainer'
            className='col-10 mx-auto col-md-6 my-3'
          >
            <Link
              to='/Recetas'
              id='btnVolver'
              className='btn btn-warning mb-5 text-capatilize'
            >
              Volver
            </Link>
            <img
              src={image_url}
              id='imgRecipe'
              className='d-block w-100'
              style={{ maxHeight: '30rem' }}
              alt='recipe'
            />
          </div>
          {/* info */}
          <div
            id='DetallesRecetaContainer'
            className='col-10 mx-auto col-md-6 my-3'
          >
            <h1 className='text-uppercase'>
              <strong>{title}</strong>
            </h1>
            <h1 className='text-warning text-capitalize text-slanted'>
              Proveedor {publisher}
            </h1>
            <ul className='list-group mt-4'>
              <h2 className='mt-3 mb-4'>
                <strong>Ingredientes</strong>
              </h2>
              {ingredients.map((item, index) => {
                return (
                  <li key={index} className='list-group-item text-slanted'>
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
