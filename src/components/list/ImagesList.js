import React, {Component} from 'react'
import IronImage from 'react-image-lazy-load-component';
import VisibilitySensor from 'react-visibility-sensor'
import { withDatabase } from '../../contexts/databaseContext/DatabaseContext';
import { withUser } from '../../contexts/users/Users';
import ImageModal from '../modal/ImageModal';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
});

class ImagesList extends Component {
state={
  openedModal: false,
  imageIndex: null,
  handleOpenModal: ()=> {this.state.openedModal === false ? this.setState({openedModal: true}) : this.setState({openedModal: false})} ,
}

  render() {
    return (
      this.props.images ? (
      <div
      className={'imagesList'}
      >
          <GridList cellHeight={180} className={'gridList'} cols={5}>
        {this.props.images.map( (element,index) => {
        return (
            <div key={'imgDiv'+index}
            >
        <VisibilitySensor
        partialVisibility={true}
        key={index}
        >
          {({isVisible}) =>
              <GridListTile key={'imgDivTile'+index} cols={1}>
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
           </div></GridListTile>}

        </VisibilitySensor></div>
            )
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
          </GridList>
      </div>
    ): <p>nothing here</p>
  )
  }
}

export default withStyles(styles)(withUser(withDatabase(ImagesList)))
