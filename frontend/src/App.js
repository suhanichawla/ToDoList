import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import Header from './header';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  );
  }
}

export default App;
