import { GET_POSTS_SUCCESS, GET_POSTS } from "./action-types";
const initialState = {
    posts: [],
    loadingPosts: false,
    loadingPostDetails: false,
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
