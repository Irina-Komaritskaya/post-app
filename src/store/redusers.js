import {
    GET_POSTS_SUCCESS,
    GET_POSTS,
    GET_COMMENTS,
    GET_COMMENTS_SUCCESS,
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_POSTS,
    GET_USER_POSTS_SUCCESS,
    PUT_FILTERED_POSTS,
    PUT_FILTERED_POSTS_SUCCESS,
} from "./action-types";
import { filterPosts } from "../services/filterPosts";
const initialState = {
    posts: [],
    comments: [],
    user: {},
    userPosts: [],
    loadingUser: false,
    loadingPosts: false,
    loadingComments: false,
    loadingUserPosts: false,
    filteredPosts: [],
    loadingfilteredPosts: false,
    error: {
        message: "",
    },
};
export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            state = { ...state, loadingPosts: true };
            break;
        case GET_POSTS_SUCCESS:
            state = { ...state, posts: action.payload, loadingPosts: false };
            break;
        case PUT_FILTERED_POSTS:
            state = { ...state, filteredPosts: filterPosts(action.payload) };
            break;
        // case PUT_FILTERED_POSTS_SUCCESS:
        //     console.log(state);
        //     state = {
        //         ...state,
        //         filteredPosts: filterPosts(action.payload),
        //         loadingfilteredPosts: false,
        //     };

        //     break;
        default:
            state = { ...state };
            break;
    }
    return state;
};

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENTS:
            state = { ...state, loadingComments: true };
            break;
        case GET_COMMENTS_SUCCESS:
            state = {
                ...state,
                comments: action.payload,
                loadingComments: false,
            };
            break;
        default:
            state = { ...state };
            break;
    }
    return state;
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            state = { ...state, loadingUser: true };
            break;
        case GET_USER_SUCCESS:
            state = {
                ...state,
                user: action.payload,
                loadingUser: false,
            };
            break;
        default:
            state = { ...state };
            break;
    }
    return state;
};

export const userPostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_POSTS:
            state = { ...state, loadingUserPosts: true };
            break;
        case GET_USER_POSTS_SUCCESS:
            state = {
                ...state,
                userPosts: action.payload,
                loadingUserPosts: false,
            };
            console.log(state);
            break;
        default:
            state = { ...state };
            break;
    }
    return state;
};
