var React = require('react');
var HashHistory = require('react-router').hashHistory;
var PokemonDetail = require('./pokemonDetail');
var ClientActions = require('../../actions/ClientActions');

var PokemonIndexItems = React.createClass({
  showDetail: function(){
    HashHistory.push("pokemon/" + this.props.pokemon.id);
  },

  render: function() {
    return (
      <li className="poke-list-item" onClick={this.showDetail}>
        Name: {this.props.pokemon.name}<br/>Poke Type: {this.props.pokemon.poke_type}
      </li>
    );
  }

});

module.exports = PokemonIndexItems;
