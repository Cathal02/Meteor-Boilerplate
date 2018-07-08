import React from 'react'
import { Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import { Meteor } from 'meteor/meteor'

import history from './history'
import Signup from '../ui/Signup'
import Home from '../ui/Home'
import Login from '../ui/Login'
import NotFound from '../ui/NotFound'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Meteor.userId() != null ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )}
  />
)

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Meteor.userId() != null ? (
        <Redirect to="/dashboard" />
      ) : (
        <Component {...props} />
      )}
  />
)
export const routes = (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <ProtectedRoute exact path="/signup" component={Signup} />
      <ProtectedRoute path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)
