import React, { Component } from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header } from '../header/Header';
import { Home } from '../home/Home';

class App extends Component {
  render() {
    return (
      <div className="Base">
        <BrowserRouter>
          <div className="main-content">
            <Header />
            <Route exact path="/" component={Home} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
