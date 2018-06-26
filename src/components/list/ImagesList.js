import React, {Component} from 'react'
import IronImage from 'react-image-lazy-load-component';
import VisibilitySensor from 'react-visibility-sensor'
import { withDatabase } from '../../contexts/databaseContext/DatabaseContext';
import { withUser } from '../../contexts/users/Users';
import ImageModal from '../modal/ImageModal';

class ImagesList extends Component {
state={
  openedModal: false,
  imageIndex: null,
  handleOpenModal: ()=> {this.state.openedModal === false ? this.setState({openedModal: true}) : this.setState({openedModal: false})} ,
}



  render() {
console.log(this.props.images)
    return (
      this.props.images ? (  
      <div 
      className={'imagesList'}
      >
        {this.props.images.map( (element,index) =>{
        return (<div key={'imgDiv'+index}
        >
        <VisibilitySensor 
        partialVisibility={true}
        key={index}
        >

          {({isVisible}) => 
          <div
          onClick={()=>this.setState({openedModal: true, imageIndex: index})}> 
          
          {isVisible ? (
          
          <IronImage
              placeholder={element[1].thumbnail}
              src={element[1].path}
              
              />
            ) : (       
          <IronImage
            placeholder={element[1].thumbnail}
            src={element[1].thumbnail}
            />
          )
            }
           </div>}
            </VisibilitySensor>
            </div>)
          }
          )
      }
      {this.state.openedModal && <ImageModal 
      images={this.props.images}
      index={this.state.imageIndex} 
      openedModal={this.state.openedModal} 
      handleOpenModal={this.state.handleOpenModal}
      handleDelete={this.props.handleDelete}
      />}
      </div>
    ): <p>nothing here</p>
  )
  }
}

export default withUser(withDatabase(ImagesList))