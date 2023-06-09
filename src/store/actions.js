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

export const getUser = (id) => {
    return {
        type: GET_USER,
        payload: id,
    };
};

export const getUserSuccess = (user) => {
    return {
        type: GET_USER_SUCCESS,
        payload: user,
    };
};

export const getUserPosts = (id) => {
    return {
        type: GET_USER_POSTS,
        payload: id,
    };
};

export const getUserPostsSuccess = (posts) => {
    return {
        type: GET_USER_POSTS_SUCCESS,
        payload: posts,
    };
};

export const putFilteredPosts = (filteredPosts) => {
    return {
        type: PUT_FILTERED_POSTS,
        payload: filteredPosts,
    };
};

// export const putFilteredPostsSuccess = (filteredPosts) => {
//     console.log(filteredPosts);
//     return {
//         type: PUT_FILTERED_POSTS_SUCCESS,
//         payload: filteredPosts,
//     };
// };
