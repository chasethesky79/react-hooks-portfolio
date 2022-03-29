import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR,  SET_USER_INDEX } from '../actions/userActions';

export function userReducer(state = {}, action) {
    switch(action.type) {
        case FETCH_USERS_REQUEST: 
            return { ...state, users: [], isLoading: true, error: false }
        case FETCH_USERS_SUCCESS:
            return { ...state, isLoading: false, users: action.payload }
        case FETCH_USERS_ERROR:
            return { ...state, error: true, isLoading: false }
        case SET_USER_INDEX: 
            return { ...state, userIndex: action.payload }
        default:
            return state;
    }
}