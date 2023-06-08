import {
    GET_POSTS_SUCCESS,
    GET_POSTS,
    GET_COMMENTS,
    GET_COMMENTS_SUCCESS,
} from "./action-types";

const initialState = {
    posts: [],
    loadingPosts: false,
    loadingComments: false,
    comments: [],
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
            console.log(state);
            break;
        default:
            state = { ...state };
            break;
    }
    return state;
};
