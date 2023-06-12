import {
    GET_POSTS_SUCCESS,
    GET_POSTS,
    GET_COMMENTS,
    GET_COMMENTS_SUCCESS,
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_POSTS,
    GET_USER_POSTS_SUCCESS,
    GET_FILTERED_POSTS,
    GET_SORT_POSTS,
    DEL_FILTERED_POSTS,
    DEL_SORT_POSTS,
    GET_COMMENTS_FAIL,
    GET_POSTS_FAIL,
    GET_USER_FAIL,
    GET_USER_POSTS_FAIL,
} from "./action-types";
import { filterPosts, sortPosts } from "../services/utils";
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
    sortedPosts: [],
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
        case GET_POSTS_FAIL:
            state = {
                ...state,
                error: {
                    message: "Error",
                },
                loadingPosts: false,
            };
            break;
        case GET_FILTERED_POSTS:
            state = { ...state, filteredPosts: filterPosts(action.payload) };
            break;
        case GET_SORT_POSTS:
            state = { ...state, sortedPosts: sortPosts(action.payload) };
            break;
        case DEL_SORT_POSTS:
            state = { ...state, sortedPosts: [] };
            break;
        case DEL_FILTERED_POSTS:
            state = { ...state, filteredPosts: [] };
            break;
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
        case GET_COMMENTS_FAIL:
            state = {
                ...state,
                error: {
                    message: "Error",
                },
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
        case GET_USER_FAIL:
            state = {
                ...state,
                error: {
                    message: "Error",
                },
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
            break;
        case GET_USER_POSTS_FAIL:
            state = {
                ...state,
                error: {
                    message: "Error",
                },
                loadingUserPosts: false,
            };
            break;
        default:
            state = { ...state };
            break;
    }
    return state;
};
