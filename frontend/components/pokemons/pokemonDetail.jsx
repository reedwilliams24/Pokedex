var React = require('react');
var PokemonStore = require('../../stores/pokemon');
var ClientActions = require('../../actions/clientActions');
var ToysIndex = require('../toys/toysIndex');

var PokemonDetail = React.createClass({
  componentDidMount: function(){
    this.listenerToken = PokemonStore.addListener(this._onChange);
    ClientActions.fetchPokemon(parseInt(this.props.params.pokemonId));
  },
  componentWillUnmount: function(){
    this.listenerToken.remove();
  },
  componentWillReceiveProps: function(props){
    ClientActions.fetchPokemon(parseInt(this.props.params.pokemonId));
  },
  getStateFromStore: function(){

    return PokemonStore.currentPokemon();
  },
  getInitialState: function(){
    return { pokemon: this.getStateFromStore() };
  },
  _onChange: function(){
    this.setState({ pokemon: this.getStateFromStore() });
  },
  render: function() {
    var pokemonDetails;
    if(this.state.pokemon === undefined){
      pokemonDetails = (
        <div className="pokemon-detail-pane">
          <div className="detail"></div>
        </div>);
    } else {
      pokemonDetails = (
      <div className="pokemon-detail-pane">
        <div className="detail">
          <img src={this.state.pokemon.image_url}/>
          name: {this.state.pokemon.name}
          attack: {this.state.pokemon.attack}
          defense: {this.state.pokemon.defense}
          poke_type: {this.state.pokemon.poke_type}
          moves: {this.state.pokemon.moves}
        </div>
        <h2 className="detail-header">Toys:</h2>
        <ToysIndex toys={this.state.pokemon.toys}/>
      </div>
      );
    }

    return (
      <div>
        { pokemonDetails }
        <div>{this.props.children}</div>
      </div>
    );
  }

});

module.exports = PokemonDetail;
