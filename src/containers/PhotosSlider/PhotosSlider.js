import React, { useState, setState, useEffect } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

import styles from './PhotosSlider.module.scss';
import {AlbumsAC} from '../../redux/Albums'
import {PhotosAC} from '../../redux/Photos'

class PhotosSlider extends React.Component
{
    constructor () {
        super();

        this.classes = [styles.PhotosSlider];
    }

    render() {
        return (
            <>
                {(this.props.photosInfo.photos && this.props.photosInfo.currPhotoID) && 
                <div className={this.classes.join(' ')}>
                    <div className={styles.header_container}>
                        <button className={styles.close_button} onClick={() => this.props.setCurrPhotoID(null)}>Close</button>
                    </div>
                    <div className={styles.photos_container}>
                        <button onClick={() => this.props.setCurrPhotoID(this.props.photosInfo.currPhotoID - 1)}>Right</button>
                        <img src={this.props.photosInfo.photos.filter((photo) => photo.id == this.props.photosInfo.currPhotoID)[0].url}/>
                        <button onClick={() => this.props.setCurrPhotoID(this.props.photosInfo.currPhotoID + 1)}>Right</button>
                    </div>
                </div>}
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        albumsInfo: state.albumsInfo,
        photosInfo: state.photosInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setCurrPhotoID: (currPhotoID) => dispatch(PhotosAC.setCurrPhotoID(currPhotoID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotosSlider);