var PokemonConstants = require('../constants/pokemonConstants');
var AppDispatcher = require('../dispatcher/dispatcher');
var PokemonApiUtil = require('../util/apiUtil');

var ClientActions = {
  fetchAllPokemons: function(){
    PokemonApiUtil.fetchAllPokemons();
  },

  fetchPokemon: function(id){
    PokemonApiUtil.fetchPokemon(id);
  }
};

module.exports = ClientActions;
