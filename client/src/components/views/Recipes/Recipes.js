import React, { Component } from 'react'
import RecipeList from './RecipesList'
import Search from './Search'

export default class Recipes extends Component {
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
