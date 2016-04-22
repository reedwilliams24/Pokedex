var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var HashHistory = require('react-router').hashHistory;

var App = require('./components/app');
var PokemonDetail = require('./components/pokemons/pokemonDetail');
var ToyDetail = require('./components/toys/toyDetail');
var PokemonsIndex = require('./components/pokemons/pokemonsIndex');
window.PokemonApiUtil = require('./util/apiUtil.js');
window.ClientActions = require('./actions/clientActions');
window.PokemonStore = require('./stores/pokemon');

var routes = (
  <Route path="/" component={ App }>
    <Route path="pokemon/:pokemonId" component={ PokemonDetail }>
      <Route path="toys/:toyId" component={ ToyDetail }>
      </Route>
    </Route>
  </Route>
);


ReactDOM.render(
  <Router history = {HashHistory}>
    { routes }
  </Router>
, document.getElementById('root'));
