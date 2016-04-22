var React = require('react');
var PokemonStore = require('../../stores/pokemon');
var ClientActions = require('../../actions/clientActions');

var ToyDetail = React.createClass({
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
    return PokemonStore.findToy(parseInt(this.props.params.toyId));
  },
  getInitialState: function(){
    return { toy: this.getStateFromStore() };
  },
  _onChange: function(){
    this.setState({ toy: this.getStateFromStore() });
  },
  render: function() {
    var toyDetails;
    if(this.state.toy === undefined){
      toyDetails = (
        <div className="toy-detail-pane">
          <div className="detail"></div>
        </div>);
    } else {
      toyDetails = (
      <div className="toy-detail-pane">
        <div className="detail">
          <img src={this.state.toy.image_url}/>
          name: {this.state.toy.name}
          happiness: {this.state.toy.happiness}
          price: {this.state.toy.price}
        </div>
      </div>
      );
    }

    return (
      <div>
        { toyDetails }
      </div>
    );
  }

});

module.exports = ToyDetail;
