var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemonConstants');

var _pokemons = {};
var _pokemon;
var PokemonStore = new Store(AppDispatcher);

PokemonStore.resetPokemons = function(pokemons){
  _pokemons = {};

  pokemons.forEach(function(pokemon){
    _pokemons[pokemon.id] = pokemon;
  });
};

PokemonStore.updatePokemon = function(pokemon){
  _pokemon = pokemon;
};

PokemonStore.all = function(){
  var allPokemon = [];

  Object.keys(_pokemons).forEach(function(pokemonId){
    allPokemon.push(_pokemons[pokemonId]);
  });

  return allPokemon;
};

PokemonStore.find = function(id){
  return _pokemons[id];
};

PokemonStore.findToy = function(id){
  var toys = _pokemon.toys;
  var result;
  toys.forEach(function(toy){
    if(toy.id === id) result = toy;
  });
  return result;
};

// *** CHANGE ***
PokemonStore.currentPokemon = function(){
  return _pokemon;
};
// *** CHANGE ***

PokemonStore.__onDispatch = function(payload){
  switch(payload.actionType){
  case PokemonConstants.POKEMONS_RECEIVED:
    PokemonStore.resetPokemons(payload.pokemons);
    this.__emitChange();
    break;
  case PokemonConstants.POKEMON_RECEIVED:
    PokemonStore.updatePokemon(payload.pokemon);
    this.__emitChange();
    break;
  }
};

module.exports = PokemonStore;
