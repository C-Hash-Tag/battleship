"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;
var Redirect = ReactRouter.Redirect;

var routes = (
  <Route path="/" component={require('./base/basepath')}>
    <IndexRoute component={require('./login')} />
    <Route path="board" component={require('./components/board')} />
  </Route>
);

module.exports = routes;

/*
    <Route path="landing" component={require('./landing')} />
    <Route path="cost-question" component={require('./cost-question')} />
    <Route path="results" component={require('./results')} />

    */
