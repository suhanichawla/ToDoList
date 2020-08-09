
import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  render() {
    return (
        <header>
        <h1>todo<span>list</span></h1>
        <h2>A simple todo list app built with node</h2>
      </header>
    );
  }
}
