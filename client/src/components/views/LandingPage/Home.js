import React, { Component } from "react";
import Header from "../LandingPage/Header";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header title="">
          <div id="ContainerHome">
            <h1>|Cocinarte|</h1>
            <Link to="Recetas">
              <button className="btn btn-info  text-white rounded h5">Buscar Ingredientes</button>
            </Link>
          </div>
        </Header>
      </div>
    );
  }
}
