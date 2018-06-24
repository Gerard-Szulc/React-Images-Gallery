import React, { Component } from 'react';
import './App.css';
import ImagesList from "./components/list/ImagesList";
import {withDatabase} from "./contexts/databaseContext/DatabaseContext";
import {withUser} from "./contexts/users/Users";
import SignInForm from './authentication/SignIn'
import SignUpForm from './authentication/SignUp'
import firebase from 'firebase'



class App extends Component {

  signOut = ()=> firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });

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
       
    <header className="App-header">
         <h1>Your Gallery</h1>
         <button onClick={this.signOut}>Sign Out</button>
        <input
          style={{display: 'none'}}
          type="file"
          accept="image/*"
          onChange={this.props.handleFileChange}
        ref={ fileInput => this.fileInput = fileInput}
        />
          <button onClick={()=>this.fileInput.click()}>Pick File</button>
        <button onClick={this.props.hendleUploadFile}>Upload</button>
        <p>{this.props.selectedFile && this.props.selectedFile.name}</p>
        </header>
        <ImagesList/>
      </div>)
    );
  }
}

export default withUser(withDatabase(App));
