import axios from 'axios'

// Action Types
export const ActionTypes = {
    USER_LOGGED_IN: 'tz1/user_info/user_logged_in',
}

// Reducer
const initialState ={
    user: {},
    isUserLoggedIn: false
};

export default function UsersReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.USER_LOGGED_IN:
            console.log("USER_LOGGED_IN");
            
            return action.payload.userInfo
    
        default:
            return state;
    }
}

// Action Creators
export const ActionCreators = {

    logInUser: function(username, email) {
        return async (dispatch) => {
            console.log("logInUser");
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            const users = response.data;

            const user = users.find((user) => {
                return (user.username === username && user.email === email); 
            });
    
            if(!user) {
                alert("User email or username is not present in the database!");
            }
            else {
                dispatch(this.userLoggedIn({
                    user: user,
                    isUserLoggedIn: true
                }));

            }
        }
    },

    userLoggedIn: function(userInfo) {
        return {
            type: ActionTypes.USER_LOGGED_IN,
            payload: {
                userInfo: userInfo
            }
        }
    }

}