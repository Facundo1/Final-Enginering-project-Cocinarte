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
import FavoritePage from './views/Recipes/FavoritePage'
import Beneficios from './views/Rewards/Rewards'
import Cursos from './views/Cursos/Cursos'
import PagosConTarjeta from './views/Pricing/PricingHome'
import OlvideContraseña from './views/LoginPage/ForgotPassword'
import ResetPage from './views/LoginPage/ResetPassword'
import UploadVideoPage from './views/UploadVideoPage/UploadVideoPage'
import DetailVideoPage from './views/DetailVideoPage/DetailVideoPage'
import VideoCatalog from './views/Cursos/Cursos'
import addCurse from './views/AdminFunctions/AddCurses'
import addRecipe from './views/AdminFunctions/AddRecipes'
import addJob from './views/AdminFunctions/AddJobs'
import AddCashPay from './views/AdminFunctions/addCashPay'
import Auditory from './views/AdminFunctions/Auditory'
import jobHome from './views/JobsInterview/Jobs'
import SingleJob from './views/JobsInterview/SingleJob'
import JobPostulate from './views/JobsInterview/JobPostulate'

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
          <Route
            exact
            path='/olvideMiContraseña'
            component={Auth(OlvideContraseña, false)}
          />
          <Route
            exact
            path='/CambiarContraseña'
            component={Auth(ResetPage, true)}
          />
          <Route exact path='/Recetas' component={Auth(Recipes, null)} />
          <Route exact path='/Catalogo' component={Auth(Catalogo, null)} />
          <Route exact path='/AnalizadorBasal' component={Auth(Cursos, true)} />
          <Route
            exact
            path='/video/upload'
            component={Auth(UploadVideoPage, true)}
          />
          <Route
            exact
            path='/video/CursosOnline'
            component={Auth(VideoCatalog, true)}
          />
          <Route
            exact
            path='/video/:videoId'
            component={Auth(DetailVideoPage, null)}
          />
          <Route
            exact
            path='/FavoritePage'
            component={Auth(FavoritePage, true)}
          />
          <Route
            exact
            path='/Precios'
            component={Auth(PagosConTarjeta, true)}
          />
          <Route
            exact
            path='/Recetas/:id'
            component={Auth(SingleRecipe, null)}
          />
          <Route exact path='/Descuentos' component={Auth(Beneficios, true)} />

          <Route exact path='/Audits' component={Auth(Auditory, true)} />

          <Route
            exact
            path='/AgregarRecetas'
            component={Auth(addRecipe, true)}
          />
          <Route exact path='/AgregarCursos' component={Auth(addCurse, true)} />
          <Route
            exact
            path='/AgregarPagoEnEfectivo'
            component={Auth(AddCashPay, true)}
          />

          <Route exact path='/Empleos' component={Auth(jobHome, true)} />
          <Route exact path='/Empleos/:id' component={Auth(SingleJob, true)} />
          <Route
            exact
            path='/Postularse'
            component={Auth(JobPostulate, true)}
          />
          <Route exact path='/AgregarEmpleo' component={Auth(addJob, true)} />
          <Route
            exact
            path='/Postularse'
            component={Auth(JobPostulate, true)}
          />
        </Switch>
      </div>

      <Footer />
    </Suspense>
  )
}

export default App
