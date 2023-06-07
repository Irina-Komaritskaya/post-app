import { GET_POST_SUCCESS, GET_POSTS } from "./action-types";
const initialState = {
    posts: [],
    post: {},
    loadingPosts: false,
    loadingPostDetails: false,
    error: {
        message: "",
    },
};
export const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            state = { ...state, loadingPosts: true };
            break;
        case GET_POST_SUCCESS:
            state = { ...state, post: action.payload, loadingPosts: false };
            console.log(state);
            break;
        default:
            state = { ...state };
            break;
    }
    return state;
};
