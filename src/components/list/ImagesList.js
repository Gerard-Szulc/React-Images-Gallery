import React, {Component} from 'react'
import IronImage from 'react-image-lazy-load-component';
import VisibilitySensor from 'react-visibility-sensor'
import firebase from 'firebase'


class ImagesList extends Component {
  state = {
    arr: [1, 2, 3, 4, 5],
  }

  render() {
    return (
      <div className={'imagesList'}>
        {this.state.arr.map( element =>
        <VisibilitySensor partialVisibility={true} key={element}>
          {({isVisible}) =>
          <div> {isVisible ? (<IronImage
              placeholder={'https://www.planwallpaper.com/static/cache/4e/4f/4e4ffcdb4e1cd3b42a65db2bb209c910.jpg'}
              src={'https://www.planwallpaper.com/static/images/wallpaper-sunset-images-back-217159.jpg'}/>) : (<IronImage
            placeholder={'https://www.planwallpaper.com/static/cache/4e/4f/4e4ffcdb4e1cd3b42a65db2bb209c910.jpg'}
            src={'https://www.planwallpaper.com/static/cache/4e/4f/4e4ffcdb4e1cd3b42a65db2bb209c910.jpg'}/>)}
           </div>}
            </VisibilitySensor>)}
      </div>

    )
  }
}

export default ImagesList