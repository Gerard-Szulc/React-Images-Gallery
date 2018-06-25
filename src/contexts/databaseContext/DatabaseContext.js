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
    images: null,
    selectedFile: null,
    uploadProgress: 0,
    handleFileChange: (event) => {
      this.setState({
        selectedFile: event.target.files[0],
      uploadProgress: 0,
      })
    },
    hendleUploadFile: () => {
      if (this.state.selectedFile  && this.state.selectedFile !== null) {
        const filesRef = storageRef.child(firebase.auth().currentUser.uid +'/' + this.state.selectedFile.name )
        console.log(this.state.selectedFile.name)
         filesRef.put(this.state.selectedFile).then(snapshot =>{
          var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
          console.log(snapshot);
          console.log('Upload is ' + progress + '% done')
          this.setState({uploadProgress: progress})
          console.log(this.state.uploadProgress)
         
    }).catch(function(error) {
      console.log(error.message)
    });
      this.setState({selectedFile: null})

    }

    },
    handleAllImagesDownload: ()=>{
    const downloadEventHandler = firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/').on('value', snapshot=>{

    snapshot.val() !== null && this.setState(
      {
        images: Object.entries(snapshot.val())
      })
  })
  },
  handleDelete: imageRef=>{this.state.images.length >= 1 &&
    firebase.database().ref('users/'+ firebase.auth().currentUser.uid +'/' + imageRef ).remove().catch(function(error) {
      console.log(error.message)
    });
    this.state.images.length === 1 &&  this.setState({images: null}) 
  }
}
componentDidMount(){
  firebase.auth().onAuthStateChanged(user=>{ 
    if (user){
     this.state.handleAllImagesDownload()
    }
  })
}
componentWillUnmount(){
  firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/').off('value', this.downloadEventHandler)
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