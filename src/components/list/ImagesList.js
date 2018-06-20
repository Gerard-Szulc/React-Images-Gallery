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
              placeholder={'https://www.planwallpaper.com/static/cache/4e/4f/4e4ffcdb4e1cd3b42a65db2bb209c910.jpg'}
              src={element}/>) : (<IronImage
            placeholder={'https://www.planwallpaper.com/static/cache/4e/4f/4e4ffcdb4e1cd3b42a65db2bb209c910.jpg'}
            src={element}/>)}
           </div>}
            </VisibilitySensor>)})
      }
      </div>
    ): <p>nothing here</p>
  )
  }
}

export default withUser(withDatabase(ImagesList))