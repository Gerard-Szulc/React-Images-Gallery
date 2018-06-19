import React, {Component} from 'react'
import IronImage from 'react-image-lazy-load-component';
import VisibilitySensor from 'react-visibility-sensor'

class ImagesList extends Component {
  state = {
    arr: [1, 2, 3, 4, 5],
    images: [],
  }
componentDidMount(){

}

  render() {
    return (
      <div className={'imagesList'}>
        {this.state.arr.map( element =>
        <VisibilitySensor partialVisibility={true} key={element}>
          {({isVisible}) =>
          <div> {isVisible ? (<IronImage
              placeholder={'https://www.planwallpaper.com/static/cache/4e/4f/4e4ffcdb4e1cd3b42a65db2bb209c910.jpg'}
              src={'https://firebasestorage.googleapis.com/v0/b/react-images-gallery.appspot.com/o/files%2FrCKDCO8kUwOyVEzA5eHZU2rUyRV2%2F16299014_150067718830760_7590242992017952406_n.jpg?alt=media&token=cdf46d26-27c3-4b4a-94cb-1a49482b2363'}/>) : (<IronImage
            placeholder={'https://www.planwallpaper.com/static/cache/4e/4f/4e4ffcdb4e1cd3b42a65db2bb209c910.jpg'}
            src={'https://firebasestorage.googleapis.com/v0/b/react-images-gallery.appspot.com/o/files%2FrCKDCO8kUwOyVEzA5eHZU2rUyRV2%2F16299014_150067718830760_7590242992017952406_n.jpg?alt=media&token=cdf46d26-27c3-4b4a-94cb-1a49482b2363'}/>)}
           </div>}
            </VisibilitySensor>)}
      </div>

    )
  }
}

export default ImagesList