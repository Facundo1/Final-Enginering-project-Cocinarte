import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchRecipes } from "../../../_actions/recipe_actions";

class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      recipe: {},
      id,
      loading: true,
    };
  }
  async componentDidMount() {
    try {
      await this.props.fetchRecipes();
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate() {
    if (!this.state.recipe.title && this.props.recipes) {
      const detailRecipe = this.props.recipes.find(
        (x) => x._id.toString() === this.state.id.toString()
      );

      if (detailRecipe) {
        this.setState({
          recipe: detailRecipe,
          loading: false,
        });
      }
    }
  }

  render() {
    const recipe = this.state.recipe;
    const Ingredients = recipe.Ingredients && recipe.Ingredients.split(",");
    if (this.state.loading) {
      return (
        <div>
          <div>
            <div>
              <h2>Cargando Receta...</h2>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div>
          <div id="RecipeImageContainer">
            {/* <Link to="/Recetas" id="btnVolver">
              <button className="btn btn-info  text-white rounded h5">
                Volver
              </button>
            </Link> */}
            <h3 className="titleReceta rounded mt-3">
              <strong>{recipe.title}</strong>
            </h3>
            <img
              src={`http://localhost:5000/${recipe.photo}`}
              id="imgRecipe"
              style={{ maxHeight: "30rem" }}
              alt="recipe"
            />
          </div>
          {/* info */}
          <div id="DetallesRecetaContainer">
            <h3>
              <strong>{recipe.description}</strong>
            </h3>

            <ul>
              <h2 className="titleIngredientes rounded">
                <strong>Ingredientes</strong>
              </h2>
              {Ingredients.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
            <h3 className="titlePasos rounded">Pasos</h3>
            <h4 className="w-50 h-50 mt-3">
              <strong>{recipe.Steps}</strong>
            </h4>

            <h3>
              <strong>
                {"Categoria de la receta:" +
                  " " +
                  " " +
                  "[" +
                  " " +
                  recipe.Category +
                  " " +
                  "]"}
              </strong>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipe.items,
});

export default connect(mapStateToProps, {
  fetchRecipes,
})(SingleRecipe);
