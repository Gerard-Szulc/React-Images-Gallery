import React, {Component} from 'react'
import IronImage from 'react-image-lazy-load-component';
import VisibilitySensor from 'react-visibility-sensor'
import { withDatabase } from '../../contexts/databaseContext/DatabaseContext';
import { withUser } from '../../contexts/users/Users';

class ImagesList extends Component {

  render() {
console.log(this.props.images)
    return (
      this.props.images ? (  
      <div className={'imagesList'}>
        { this.props.images.map( (element,index) =>{
        return (
        <VisibilitySensor partialVisibility={true} key={index}>
          {({isVisible}) => 
          <div> {isVisible ? (<IronImage
              placeholder={element.thumbnail}
              src={element.path}/>) : (<IronImage
            placeholder={element.thumbnail}
            src={""}/>)}
           </div>}
            </VisibilitySensor>)})
      }
      </div>
    ): <p>nothing here</p>
  )
  }
}

export default withUser(withDatabase(ImagesList))