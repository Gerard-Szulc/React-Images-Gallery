import React, {Component, Fragment} from 'react'
import IronImage from 'react-image-lazy-load-component';
import VisibilitySensor from 'react-visibility-sensor'

class ImagesList extends Component {
  state = {
    arr: [1, 2, 3, 4, 5],
  }

  render() {
    return (
      this.state.arr.map( element=>
        <VisibilitySensor>
          {({isVisible}) =>
          <div> {isVisible ? (<IronImage
              placeholder={'https://www.planwallpaper.com/static/cache/4e/4f/4e4ffcdb4e1cd3b42a65db2bb209c910.jpg'}
              src={'https://www.planwallpaper.com/static/images/wallpaper-sunset-images-back-217159.jpg'}/>) : (<IronImage
            placeholder={'https://www.planwallpaper.com/static/cache/4e/4f/4e4ffcdb4e1cd3b42a65db2bb209c910.jpg'}
            src={'https://www.planwallpaper.com/static/cache/4e/4f/4e4ffcdb4e1cd3b42a65db2bb209c910.jpg'}/>)}
           </div>}
            </VisibilitySensor>)


    )
  }
}

export default ImagesList