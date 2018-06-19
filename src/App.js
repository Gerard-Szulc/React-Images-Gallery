import React, { Component } from 'react';
import './App.css';
import ImagesList from "./components/list/ImagesList";
import {DatabaseProvider, withDatabase} from "./contexts/databaseContext/DatabaseContext";
import {withUser} from "./contexts/users/Users";
import SignInForm from './authentication/SignIn'
import SignUpForm from './authentication/SignUp'




class App extends Component {
  render() {
    return (
      this.props.user === null ? (
          this.props.signing ===  true ?
            <div className='loader'></div> : <div>
              <SignInForm/>
              <SignUpForm/>
            </div>
        ) : (
        <div className="App">
        <input type="file" onChange={this.props.handleFileChange}/>
        <button onClick={this.props.hendleUploadFile}>Upload</button>
    <header className="App-header">
        <h1>Your Gallery</h1>
          {/*<form onSubmit={this.props.handleFileSubmit}>*/}
          {/*<label htmlFor="fileItem">Upload File</label>*/}

        {/*</form>*/}
        </header>
        <ImagesList/>
      </div>)
    );
  }
}

export default withUser(withDatabase(App));
