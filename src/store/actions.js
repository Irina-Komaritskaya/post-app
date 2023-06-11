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
    SORT_POSTS,
    DEL_FILTERED_POSTS,
    DEL_SORT_POSTS,
    GET_POSTS_FAIL,
    GET_USER_FAIL,
    GET_USER_POSTS_FAIL,
    GET_COMMENTS_FAIL,
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
export const getPostsFail = (error) => {
    return {
        type: GET_POSTS_FAIL,
        payload: error,
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
export const getCommentsFail = (error) => {
    return {
        type: GET_COMMENTS_FAIL,
        payload: error,
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
export const getUserFail = (error) => {
    return {
        type: GET_USER_FAIL,
        payload: error,
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
export const getUserPostsFail = (error) => {
    return {
        type: GET_USER_POSTS_FAIL,
        payload: error,
    };
};

export const putFilteredPosts = (filteredPosts) => {
    return {
        type: PUT_FILTERED_POSTS,
        payload: filteredPosts,
    };
};

export const SortedPosts = (sortPosts) => {
    return {
        type: SORT_POSTS,
        payload: sortPosts,
    };
};

export const DelSortedPosts = () => {
    return {
        type: DEL_SORT_POSTS,
    };
};

export const DelFilteredPosts = () => {
    return {
        type: DEL_FILTERED_POSTS,
    };
};
