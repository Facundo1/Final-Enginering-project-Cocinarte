import React, { Component } from 'react'
import RecipeList from './RecipesList'
import Search from './Search'
import { recipeData } from '../../../API/TempList'

export default class Catalog extends Component {
  constructor(props) {
    super(props)
    this.getRecipes = this.getRecipes.bind(this)
  }
  state = {
    recipes: recipeData,
    search: '',
    url: `https://recipesapi.herokuapp.com/api/search`,
    base_url: `https://recipesapi.herokuapp.com/api/search?q=chicken&page=3`,
    query: '',
    error: ''
  }

  async getRecipes() {
    try {
      const data = await fetch(this.state.url)
      const jsonData = await data.json()
      if (jsonData.recipes.length === 0) {
        this.setState({
          error:
            'sorry but your search did not return any recipes, please try again or press search icon for the most popular recipes'
        })
      } else {
        this.setState({
          recipes: jsonData.recipes,
          error: ''
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getRecipes()
  }

  handleChange = e => {
    this.setState({
      search: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    const { base_url, query, search } = this.state
    this.setState(
      {
        url: `${base_url}${query}${search}`,
        search: ''
      },
      () => this.getRecipes()
    )
  }
  render() {
    return (
      <>
        <h1 id='text-Category'>Categorias</h1>
        <div id='categoryNames'>
          <button className='categoryButton'>Carnes</button>
          <button className='categoryButton'>Pastas</button>
          <button className='categoryButton'>Pizzas</button>
          <button className='categoryButton'>Vegetariano</button>
          <button className='categoryButton'>Postres</button>
          <button className='categoryButton'>Natural</button>
        </div>
        <RecipeList recipes={this.state.recipes} />
        )}
      </>
    )
  }
}
