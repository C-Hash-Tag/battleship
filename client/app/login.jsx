/*
Login Component
~~~~~~~~~~~~~~~~~~~~~~
*/

"use strict";

//Import React and Libraries
var React = require('react');
var browserHistory = require('react-router').browserHistory;

var Login = React.createClass({
  componentDidMount: function() {
    console.log("in login component");
  },
  render: function() {
    return (
      <div className="intro-header">
        <div className="container">
          HELLO WORLD
        </div>
      </div>
    )
  }


});

module.exports = Login;
