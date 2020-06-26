import axios from 'axios'

// Action Types
export const ActionTypes = {
    ALBUMS_LOADED: 'tz1/albums/albums_loaded',
    CURR_ALBUM_ID_SET: 'tz1/albums/curr_album_id'
}

// Reducer
const initialState ={
    albums: [],
    isAlbumsLoaded: false,
    currAlbumID: null
};

export default function UsersReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ALBUMS_LOADED:
            
            return {...state, albums: action.payload.albums, isAlbumsLoaded: true};
        case ActionTypes.CURR_ALBUM_ID_SET:
            return {...state, currAlbumID: action.payload.currAlbumID};
        default:
            return state;
    }
}

// Action Creators
export const AlbumsAC = {

    loadAlbums: function() {
        return async (dispatch) => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/albums");
            const albums = response.data;

            dispatch(this.albumsLoaded(albums))
        }
    },

    albumsLoaded: function(albums) {
        return {
            type: ActionTypes.ALBUMS_LOADED,
            payload: {
                albums: albums
            }
        }
    },

    setCurrAlbumID: function(currAlbumID) {
        return {
            type: ActionTypes.CURR_ALBUM_ID_SET,
            payload: {
                currAlbumID: currAlbumID
            }
        }
    }

}