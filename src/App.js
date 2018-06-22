import React, { Component } from 'react';
import './App.css';
import ImagesList from "./components/list/ImagesList";
import {withDatabase} from "./contexts/databaseContext/DatabaseContext";
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
       
    <header className="App-header">
         <h1>Your Gallery</h1>
        <input
          style={{display: 'none'}}
          type="file"
          accept="image/*"
          onChange={this.props.handleFileChange}
        ref={ fileInput => this.fileInput = fileInput}
        />
        <p>{this.props.selectedFile && this.props.selectedFile.name}</p>
          <button onClick={()=>this.fileInput.click()}>Pick File</button>
        <button onClick={this.props.hendleUploadFile}>Upload</button>
        </header>
        <ImagesList/>
      </div>)
    );
  }
}

export default withUser(withDatabase(App));
