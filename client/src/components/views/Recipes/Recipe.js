import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Recipe extends Component {
  render() {
    const recipe = this.props.recipe;
    const recipesItems = (
      <div className="col-md-4" key={recipe._id}>
        <div className="mb-5 thumbnail">
          <img
            src={`http://localhost:5000/${recipe.photo}`}
            alt="photo"
            width="100"
            height="200"
          />
          <p className="text-nowrap">{recipe.title}</p>
          <Link to={`/Recetas/${recipe._id}`}>
            <button className="btn btn-info  text-white rounded h5">
              Detalles
            </button>
          </Link>
        </div>
      </div>
    );

    return <div className="listOfRecipes">{recipesItems}</div>;
  }
}
