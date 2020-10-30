import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './homepage'
import Bulking from './bulking'
import Cutting from './cutting'

class Body extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={({location, history})=>
          <Homepage {...this.props} location={location} history={history}/>
        }/>
        <Route exact path='/bulking' render={({location, history})=>
          <Bulking {...this.props} location={location} history={history}/>
        }/>
        <Route exact path='/cutting' render={({location, history})=>
          <Cutting {...this.props} location={location} history={history}/>
        }/>
      </Switch>
    )
  }
}
export default Body
