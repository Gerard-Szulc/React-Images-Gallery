import React, {Component} from 'react'
import IronImage from 'react-image-lazy-load-component';
import VisibilitySensor from 'react-visibility-sensor'
import { withDatabase } from '../../contexts/databaseContext/DatabaseContext';
import { withUser } from '../../contexts/users/Users';
import ImageModal from '../modal/ImageModal';

class ImagesList extends Component {

  render() {
console.log(this.props.images)
    return (
      this.props.images ? (  
      <div className={'imagesList'}>
        { this.props.images.map( (element,index) =>{
        return (<div key={'imgDiv'+index}>
        <VisibilitySensor partialVisibility={true} key={index}>
          {({isVisible}) => 
          <div> {isVisible ? (
          
          <IronImage
              placeholder={element[1].thumbnail}
              src={element[1].path}
              
              />
            ) : (              
          <IronImage
            placeholder={element[1].thumbnail}
            src={""}
            />)
            }
           </div>}
            </VisibilitySensor>
              <ImageModal index={index} key={'imageModal'+index}/>
              <button onClick={()=>this.props.handleDelete(element[0])} key={'button'+index}>Delete</button>
            </div>)
          }
          )
      }
      </div>
    ): <p>nothing here</p>
  )
  }
}

export default withUser(withDatabase(ImagesList))