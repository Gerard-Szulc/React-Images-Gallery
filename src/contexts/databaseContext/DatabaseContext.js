import React, { Component } from 'react'
import firebase from 'firebase'
import config from '../../firebase/config/config'

const DatabaseContext = React.createContext()

export const DatabaseConsumer = DatabaseContext.Consumer;

firebase.initializeApp(config);
const storage = firebase.storage()
const storageRef = storage.ref()

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
        filesRef.put(this.state.selectedFile).then(function (snapshot) {
          console.log(snapshot);
        })
        this.setState({selectedFile: null})
      }

    }
  }

  handleSnapshot = snapshot =>{
console.log(snapshot)
  }
componentDidMount(){
    firebase.auth().currentUser && 
    storageRef.refFromUrl('gs://react-images-gallery.appspot.com/'+firebase.auth().currentUser.uid+'/files/').getDownloadURL().then(urls=>this.handleSnapshot(urls))


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