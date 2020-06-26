import axios from 'axios'

// Action Types
export const ActionTypes = {
    TODOS_LOADED: 'tz1/todos/todos_loaded',
    CURR_TODO_ID_SET: 'tz1/todos/curr_todo_id_set'
}

// Reducer
const initialState ={
    todos: [],
    isTodosLoaded: false,
    currTodoID: null
};

export default function UsersReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.TODOS_LOADED:
            
            return {...state, todos: action.payload.todos, isTodosLoaded: true};
        case ActionTypes.CURR_TODO_ID_SET:
            return {...state, currTodoID: action.payload.currTodoID};
        default:
            return state;
    }
}

// Action Creators
export const TodosAC = {

    loadTodos: function() {
        return async (dispatch) => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
            const todos = response.data;

            dispatch(this.todosLoaded(todos))
        }
    },

    todosLoaded: function(todos) {
        return {
            type: ActionTypes.TODOS_LOADED,
            payload: {
                todos: todos
            }
        }
    },

    setCurrTodoID: function(currTodoID) {
        return {
            type: ActionTypes.CURR_TODO_ID_SET,
            payload: {
                currTodoID: currTodoID
            }
        }
    }

}