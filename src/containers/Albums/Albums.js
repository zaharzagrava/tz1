import React, { useState, setState, useEffect } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

import styles from './Albums.module.scss';
import {AlbumsAC} from '../../redux/Albums'
import {PhotosAC} from '../../redux/Photos'

class Albums extends React.Component
{
    constructor () {
        super();
        console.log("ru11n");

        this.classes = [styles.Albums];
    }

    componentWillMount() {
        console.log("run");
        this.props.loadAlbums();
    }

    componentDidUpdate() {
        console.log(this.props.albumsInfo);
    }

    render() {
        return (
            <div className={this.classes.join(' ')}>
                <table className="mx-auto table">
                    <tbody>
                        <tr>
                            <th>Album ID</th>
                            <th>Album Title</th>
                        </tr>
                        {(this.props.albumsInfo) && (this.props.albumsInfo.albums.map((album, index) => {
                            return (
                            <tr key={index} onClick={() => this.props.setCurrAlbumID(album.id)}>
                                <td>{album.id}</td>
                                <td>{album.title}</td>
                            </tr>
                            )
                        }))}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        albumsInfo: state.albumsInfo,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadAlbums: () => dispatch(AlbumsAC.loadAlbums()),
        setCurrAlbumID: (currAlbumID) => dispatch(AlbumsAC.setCurrAlbumID(currAlbumID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums);