// var $ = require("jquery"),
var AppDispatcher = require('../dispatcher/dispatcher');
var ServerActions = require('../actions/serverActions');

var PokemonApiUtil = {
  fetchAllPokemons: function () {

    $.ajax({
      url: '/api/pokemon',
      method: 'GET',
      dataType: 'json',
      contentType: "application/json",

      success: function (pokemons) {
        ServerActions.receiveAllPokemons(pokemons);
      }
    });
  },

  fetchPokemon: function(id){
    $.ajax({
      url: '/api/pokemon/' + id,
      method: 'GET',
      dataType: 'json',
      contentType: "application/json",

      success: function (pokemon) {
        ServerActions.receiveSinglePokemon(pokemon);
      }
    });
  }
};

// AppDispatcher.register(function(payload) {
//   switch(payload.actionType){
//   case OrganConstants.CREATE_TRACK:
//     TrackApiUtil.createTrack(payload.track);
//     break;
//   default:
//   }
// })


module.exports = PokemonApiUtil;
