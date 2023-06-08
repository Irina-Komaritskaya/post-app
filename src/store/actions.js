import {
    GET_POSTS_SUCCESS,
    GET_POSTS,
    GET_COMMENTS,
    GET_COMMENTS_SUCCESS,
} from "./action-types";
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

export const getComments = (id) => {
    return {
        type: GET_COMMENTS,
        payload: id,
    };
};

export const getCommentsSuccess = (comments) => {
    return {
        type: GET_COMMENTS_SUCCESS,
        payload: comments,
    };
};
