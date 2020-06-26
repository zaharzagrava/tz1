import axios from 'axios'

// Action Types
export const ActionTypes = {
    PHOTOS_LOADED: 'tz1/photos/photos_loaded',
    CURR_PHOTO_ID_SET: 'tz1/photos/curr_photo_id_set'
}

// Reducer
const initialState ={
    photos: [],
    isPhotosLoaded: false,
    currPhotoID: null
};

export default function UsersReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.PHOTOS_LOADED:
            
            return {...state, photos: action.payload.photos, isPhotosLoaded: true};
        case ActionTypes.CURR_PHOTO_ID_SET:
            return {...state, currPhotoID: action.payload.currPhotoID};
        default:
            return state;
    }
}

// Action Creators
export const PhotosAC = {

    loadPhotos: function() {
        return async (dispatch) => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
            const photos = response.data;

            dispatch(this.photosLoaded(photos))
        }
    },

    photosLoaded: function(photos) {
        return {
            type: ActionTypes.PHOTOS_LOADED,
            payload: {
                photos: photos
            }
        }
    },

    setCurrPhotoID: function(currPhotoID) {
        return {
            type: ActionTypes.CURR_PHOTO_ID_SET,
            payload: {
                currPhotoID: currPhotoID
            }
        }
    }

}