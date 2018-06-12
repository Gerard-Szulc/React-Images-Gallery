import React, { Component } from 'react';
import './App.css';
import ImagesList from "./components/list/ImagesList";
import firebase from 'firebase'
import config from './firebase/config/config'


firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Your Gallery</h1>
        </header>
        <ImagesList/>
      </div>
    );
  }
}

export default App;
