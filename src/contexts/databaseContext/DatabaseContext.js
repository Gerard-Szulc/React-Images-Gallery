import React, { Component } from 'react'
import {auth} from 'firebase'
import firebase from 'firebase'
import config from '../../firebase/config/config'

const DatabaseContext = React.createContext()

export const DatabaseConsumer = DatabaseContext.Consumer;

//
// firebase.initializeApp(config);
// const storage = firebase.storage()
// const storageRef = storage.ref()


export class DatabaseProvider extends Component {

  state = {
    fileName: 'lol',
    handleFileChange: (event)=>{
      console.log(event)
      // this.setState({
      //   fileName: (+new Date()) + '-' + event.target.files[0],
      // })
    }

  };




  render(){
    return(
      <DatabaseContext.Provider value={this.state}>
        {this.props.children}
      </DatabaseContext.Provider>

    )
  }
}
export function withDatabase(Component) {
  function DatabaseAwareComponent(props) {
    return (
      <DatabaseConsumer>
        {
          state=> <Component {...props} {...state}/>
        }
      </DatabaseConsumer>
    );
  }

  DatabaseAwareComponent.displayName = `DatabaseAware(${Component.displayName || Component.name || 'Component'})`

  return DatabaseAwareComponent
}