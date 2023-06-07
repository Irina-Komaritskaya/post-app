import { GET_POST_SUCCESS, GET_POSTS } from "./action-types";
export const getPosts = () => {
    return {
        type: GET_POSTS,
    };
};

export const getPostSuccess = (post) => {
    return {
        type: GET_POST_SUCCESS,
        payload: post,
    };
};
