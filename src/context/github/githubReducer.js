import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING,
} from '../types';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false,
            };
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false,
            };
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true, //using spread operator to update the loading item in state.
            };
        default:
            return state;
    }
};
