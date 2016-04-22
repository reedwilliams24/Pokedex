var React = require('react');
var ToyIndexItem = require('./toyIndexItem');

var ToysIndex = React.createClass({

  render: function() {
    var toyIndexItems = this.props.toys.map(function(toy){
      return(
        <ToyIndexItem key={toy.id} toy={toy}/>
      );
    });
    return (
      <ul>
        {toyIndexItems}
      </ul>
    );
  }

});

module.exports = ToysIndex;
