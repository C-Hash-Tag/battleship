/*
  Base Compnent
  ~~~~~~~~~~~~~~~~~~~~~~~~~
*/

"use strict";

// Import Libraries
var React = require('react');

var Base = React.createClass({

  componentDidMount: function(){
    console.log('component mounts');
  },

  render: function() {

    return (
      <div>
          {this.props.children}
      </div>
    );
  }
});

module.exports = Base;
