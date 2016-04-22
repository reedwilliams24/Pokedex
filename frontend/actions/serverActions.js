var PokemonConstants = require('../constants/pokemonConstants');
var AppDispatcher = require('../dispatcher/dispatcher');

var ServerActions = {
  receiveAllPokemons: function(pokemons){
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  },

  receiveSinglePokemon: function(pokemon){
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_RECEIVED,
      pokemon: pokemon
    });
  }
};

module.exports = ServerActions;
