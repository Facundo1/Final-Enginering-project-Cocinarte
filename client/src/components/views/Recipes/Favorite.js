import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function Favorite(props) {
  const user = useSelector((state) => state.user);
  const [favoriteNumber, setFavoriteNumber] = useState(0);
  const [Favorited, setFavorited] = useState(false);

  const variable = {
    userFrom: props.userFrom,
    recipeId: props.recipeId,
    recipePhoto: props.recipeInfo.photo,
    recipeTitle: props.recipeInfo.title,
    recipeDescription: props.recipeInfo.description,
    recipeSteps: props.recipeInfo.Steps,
    recipeIngredients: props.recipeInfo.Ingredients,
    recipeCategory: props.recipeInfo.Category,
  };
  useEffect(() => {
    console.log(variable);

    if (user && user.userData && user.userData.isAuth) {
      axios.post("/api/favorite/favoriteNumber", variable).then((response) => {
        if (response.data.success) {
          setFavoriteNumber(response.data.FavoriteNumber);
        } else {
          alert("Failed to get number");
        }
      });

      axios.post("/api/favorite/favorited", variable).then((response) => {
        if (response.data.success) {
          setFavorited(response.data.favorited);
        } else {
          alert("failed to get favorite info");
        }
      });
    }
  }, []);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const onClickFavorite = (variable) => {
    if (Favorited) {
      axios
        .post("/api/favorite/removeFromFavorite", variable)
        .then((response) => {
          if (response.data.success) {
            setFavoriteNumber(favoriteNumber - 1);
            setFavorited(!Favorited);
          } else {
            alert("Failed to remove form favorite");
          }
        });
    } else {
      axios.post("/api/favorite/addToFavorite", variable).then((response) => {
        if (response.data.success) {
          setFavoriteNumber(favoriteNumber + 1);
          setFavorited(!Favorited);
        } else {
          alert("Failed to add Favorites");
        }
      });
    }
  };
  console.log(Favorited);
  return (
    <div className="">
      {user && user.userData && user.userData.isAuth && (
        <div className="btnFavorito d-flex justify-content-center flex-row mt-5">
          <button
            className="border-0 rounded btn btn-info"
            onClick={() => onClickFavorite(variable)}
          >
            {Favorited ? "borrar de favoritos" : "Agregar a favorito"}
          </button>
        </div>
      )}

      <p className="textoFavorito d-flex justify-content-center flex-row mt-2">Personas que agregaron a favoritos esta receta: {favoriteNumber}</p>
    </div>
  );
}

export default Favorite;
