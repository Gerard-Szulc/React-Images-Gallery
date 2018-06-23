import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import { withDatabase } from '../../contexts/databaseContext/DatabaseContext';
 
 
 
export class ImageModal extends Component {
  state = {
      photoIndex: this.props.index,
      isOpen: false,
    };

 
  render() {

 
    return (
      <div>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button>
 
        {this.props.images && this.state.isOpen && (
          <Lightbox
            mainSrc={this.props.images[this.state.photoIndex][1].path}
            nextSrc={this.props.images[(this.state.photoIndex + 1) % this.props.images.length][1].path}
            prevSrc={this.props.images[(this.state.photoIndex + this.props.images.length - 1) % this.props.images.length][1].path}
            onCloseRequest={() => this.setState({photoIndex: this.props.index, isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (this.state.photoIndex + this.props.images.length - 1) % this.props.images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (this.state.photoIndex + 1) % this.props.images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
export default withDatabase(ImageModal)