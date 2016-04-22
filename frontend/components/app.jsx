var React = require('react');
var PropTypes = React.PropTypes;
var PokemonsIndex = require('./pokemons/pokemonsIndex');

var App = React.createClass({

  render: function() {
    return (
      <div id="pokedex">
        <div className="pokemon-index-pane"><PokemonsIndex/></div>
        <div>{ this.props.children }</div>
      </div>
    );
  }

});

module.exports = App;
