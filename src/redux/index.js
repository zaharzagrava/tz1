import {combineReducers} from 'redux';
import UsersReducer from './Users.js';
import UserInfoReducer from './UserInfo.js';
import AlbumsReducer from './Albums.js';
import PhotosReducer from './Photos.js';
import TodosReducer from './Todos.js';

export default combineReducers({
    users: UsersReducer,
    userInfo: UserInfoReducer,
    albumsInfo: AlbumsReducer,
    photosInfo: PhotosReducer,
    todosInfo: TodosReducer
});