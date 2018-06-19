import React, { Component } from 'react';
import './App.css';
import ImagesList from "./components/list/ImagesList";
import {DatabaseProvider, withDatabase} from "./contexts/databaseContext/DatabaseContext";



class App extends Component {
  render() {
    return (
      <div className="App">
        <input type="file" onChange={this.props.handleFileChange}/>

    <header className="App-header">
        <h1>Your Gallery</h1>
          {/*<form onSubmit={this.props.handleFileSubmit}>*/}
          {/*<label htmlFor="fileItem">Upload File</label>*/}

        {/*</form>*/}
        </header>
        <ImagesList/>
      </div>
    );
  }
}

export default withDatabase(App);
