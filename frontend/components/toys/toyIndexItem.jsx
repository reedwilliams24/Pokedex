var React = require('react');
var HashHistory = require('react-router').hashHistory;


var ToyIndexItem = React.createClass({
  showDetail: function(){
    HashHistory.push("pokemon/" + this.props.toy.pokemon_id + "/toys/" + this.props.toy.id);
  },

  render: function() {
    return (
      <li className="toy-list-item" onClick={this.showDetail}>
        name: { this.props.toy.name }<br/>
        happiness: { this.props.toy.happiness }<br/>
        price: { this.props.toy.price }<br/>
      </li>
    );
  }

});

module.exports = ToyIndexItem;
