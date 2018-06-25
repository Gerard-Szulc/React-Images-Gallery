import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
 
 
 
export class ImageModal extends Component {
  state = {
      photoIndex: this.props.index,
      isOpen: this.props.openedModal,
    };

 
  render() {

 
    return (
      <div>
        {this.props.openModal === true && this.props.handleOpenModal()}
        {this.props.images && this.state.isOpen &&  (
          <Lightbox
            mainSrc={this.props.images[this.state.photoIndex][1].path}
            nextSrc={this.props.images[(this.state.photoIndex + 1) % this.props.images.length][1].path}
            prevSrc={this.props.images[(this.state.photoIndex + this.props.images.length - 1) % this.props.images.length][1].path}
            onCloseRequest={() => this.props.handleOpenModal()}
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
            toolbarButtons={[
            <img 
              src={process.env.PUBLIC_URL+'/flat-trash-can-icon-by-Vexels.svg'}
              onClick={()=>{this.props.handleDelete(this.props.images[this.state.photoIndex][0])
                this.props.handleOpenModal()
              }}
              alt={'delete button'} 
              key={'button'+this.state.photoIndex}
              className={'ril-close ril-toolbar__item__child ril__toolbarItemChild ril__builtinButton'}
              />]}
          />
        )}
      </div>
    );
  }
}
export default ImageModal