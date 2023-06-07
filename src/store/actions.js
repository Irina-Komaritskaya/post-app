import { GET_POSTS_SUCCESS, GET_POSTS } from "./action-types";
export const getPosts = () => {
    return {
        type: GET_POSTS,
    };
};

export const getPostsSuccess = (posts) => {
    return {
        type: GET_POSTS_SUCCESS,
        payload: posts,
    };
};
