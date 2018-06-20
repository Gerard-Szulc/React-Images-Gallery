import React, { Component } from 'react'
import firebase from 'firebase'
import config from '../../firebase/config/config'

const DatabaseContext = React.createContext()

export const DatabaseConsumer = DatabaseContext.Consumer;

firebase.initializeApp(config);
const storage = firebase.storage()
const storageRef = storage.ref()
const database = firebase.database()
export class DatabaseProvider extends Component {

  state = {
    images: [],
    selectedFile: null,
    handleFileChange: (event) => {
      this.setState({
        selectedFile: event.target.files[0]
      })
    },
    hendleUploadFile: () => {
      if (this.state.selectedFile !== null) {
        const filesRef = storageRef.child(firebase.auth().currentUser.uid + '/files/' + this.state.selectedFile.name)
        console.log(this.state.selectedFile.name)
        const uploadTask = filesRef.put(this.state.selectedFile).then(function (snapshot) {
          console.log(snapshot);
          filesRef.getDownloadURL().then(url=>{
              database.ref().child('users/'+firebase.auth().currentUser.uid).push(url)      
          });
        
      
    })
    this.setState({selectedFile: null})
    }

    }
  }
  


componentDidMount(){
    firebase.auth().currentUser && 
    database.ref('users/' + firebase.auth().currentUser.uid).on('value', snapshot=>{
    this.setState({images: snapshot.val()})
  })
    
}



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