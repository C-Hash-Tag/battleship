var React = require('react');
var Proptypes = React.PropTypes;
var Square = require('./square.jsx');

var Board = React.createClass({
  propTypes:{

  },

  renderSquare: function (i){
    return (
      <div key={i}
            style={{width: '14.28%', height: '14.28%'}}>
          <Square>
          </Square>
      </div>
    )
  },

  render: function() {
    var squares = [];

    for(let i = 0; i < 49; i ++){
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    )
  }
})

module.exports = Board;