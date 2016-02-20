var React = require('react');
var PropTypes = React.PropTypes;

var Square = React.createClass({
  render: function () {

    return <div style={{ 
      border: "white", 
      backgroundColor: "blue",
      width: '100%',
      height: '100%'
    }}> hi {this.props.position} </div>;
  }
});

module.exports = Square;