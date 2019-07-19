import React, { Component } from 'react';
import './styles.css';
import Header from '../Header';
import Footer from '../Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Footer />
      </div>
    );
  }
}

export default App;
