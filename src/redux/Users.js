import axios from 'axios'

// Action Types
export const ActionTypes = {
    USERS_LOADED: 'tz1/users/users_loaded',
}

// Reducer
const initialState ={
    users: [],
    isUsersLoaded: false
};

export default function UsersReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.USERS_LOADED:
            
            return {...state, users: action.payload.users}
    
        default:
            return state;
    }
}

// Action Creators
export const ActionCreators = {

    loadUsers: function() {
        return async (dispatch) => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            const users = response.data;

            dispatch(this.usersLoaded(users))
        }
    },

    usersLoaded: function(users) {
        return {
            type: ActionTypes.USERS_LOADED,
            payload: {
                users: users
            }
        }
    }

}