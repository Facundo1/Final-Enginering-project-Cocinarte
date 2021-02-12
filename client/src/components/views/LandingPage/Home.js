import React, { Component } from "react";
import Header from "../LandingPage/Header";
import { Link } from "react-router-dom";
import imgOne from "../../../assets/defaultBcg.jpeg";
import imgTwo from "../../../assets/homeBcg.jpeg";
import imgThree from "../../../assets/679975.jpg";
import imgFour from "../../../assets/Four.jpg";
import imgFive from "../../../assets/Five.jpg";

function Home() {
  return (
    <>
      <div>
        <Header title="">
          <div id="ContainerHome">
            <div className="slider">
              <ul>
              <li>
                  <img src={imgFive}></img>
                </li>
                <li>
                  <img src={imgTwo}></img>
                </li>
                <li>
                  <img src={imgThree}></img>
                </li>
                <li>
                  <img src={imgFour}></img>
                </li>

              </ul>
            </div>
           {/*  <h1>|Cocinarte|</h1>
            <Link to="Recetas">
              <button className="btn btn-info  text-white rounded h5">
                Buscar Ingredientes
              </button>
            </Link> */}
          </div>
        </Header>
      </div>
    </>
  );
}

export default Home;
