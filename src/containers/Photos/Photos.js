import React, { useState, setState, useEffect } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

import styles from './Photos.module.scss';
import {AlbumsAC} from '../../redux/Albums'
import {PhotosAC} from '../../redux/Photos'

class Albums extends React.Component
{
    constructor () {
        super();
        
        this.state = {
            showPhotos: false
        };

        this.classes = [styles.Photos];
    }

    componentWillMount() {
        this.props.loadPhotos();
    }

    render() {
        return (
            <div className={this.classes.join(' ')}>
                {(this.props.albumsInfo.currAlbumID) &&
                <div>
                    {this.props.photosInfo.photos.map((photo, index) => {
                        if(photo.albumId == this.props.albumsInfo.currAlbumID) {
                            return (
                                <img key={index} src={photo.url} onClick={() => this.props.setCurrPhotoID(photo.id)}></img>
                            );
                        }
                    })}
                </div>}

            </div>
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
        loadPhotos: () => dispatch(PhotosAC.loadPhotos()),
        setCurrPhotoID: (currPhotoID) => dispatch(PhotosAC.setCurrPhotoID(currPhotoID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums);