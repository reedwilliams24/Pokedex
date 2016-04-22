var React = require('react');
var PokemonStore = require('../../stores/pokemon');
var ClientActions = require('../../actions/ClientActions');
var PokemonIndexItem = require('./pokemonIndexItem');

var PokemonsIndex = React.createClass({
  componentDidMount: function () {
    this.listenerToken = PokemonStore.addListener(this._onChange);
    ClientActions.fetchAllPokemons();
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  getInitialState: function(){
    return { pokemons: PokemonStore.all() };
  },

  _onChange: function(){
    this.setState({ pokemons: PokemonStore.all() });
  },

  render: function(){
    var pokemonIndexItems = this.state.pokemons.map(function(pokemon){
      return (
        <PokemonIndexItem key={pokemon.id} pokemon={pokemon}/>
      );
    });
    return (
      <ul>
        {pokemonIndexItems}
      </ul>
    );
  }

});

module.exports = PokemonsIndex;
