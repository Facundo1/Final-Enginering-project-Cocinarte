import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Auth from '../hoc/auth'
// pages for this product
import LoginPage from './views/LoginPage/LoginPage.js'
import RegisterPage from './views/RegisterPage/RegisterPage.js'
import NavBar from './views/NavBar/NavBar'
import Footer from './views/Footer/Footer'
import Home from './views/LandingPage/Home'
import Recipes from './views/Recipes/Recipes'
import SingleRecipe from './views/Recipes/SingleRecipe'
import Catalogo from './views/Recipes/Catalog'
import Precios from './views/Pricing/PricingHome'
import Cursos from './views/Cursos/Cursos'
//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path='/' component={Auth(Home, null)} />
          <Route exact path='/login' component={Auth(LoginPage, false)} />
          <Route exact path='/register' component={Auth(RegisterPage, false)} />
          <Route exact path='/Recetas' component={Auth(Recipes, null)} />
          <Route exact path='/Catalogo' component={Auth(Catalogo, null)} />
          <Route exact path='/Precios' component={Auth(Precios, null)} />
          <Route exact path='/AnalizadorBasal' component={Auth(Cursos, null)} />
          <Route exact path='/Cursos' component={Auth(Cursos, null)} />
          <Route
            exact
            path='/Recetas/:id'
            component={Auth(SingleRecipe, null)}
          />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  )
}

export default App
