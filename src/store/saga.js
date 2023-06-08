import { takeLatest, put, call } from "redux-saga/effects";
import {
    GET_POSTS,
    GET_COMMENTS,
    GET_USER,
    GET_USER_POSTS,
} from "./action-types";
import {
    getPostsSuccess,
    getCommentsSuccess,
    getUserSuccess,
    getUserPostsSuccess,
} from "./actions";
import { getPosts, getComments, getUser, getUserPosts } from "../api/agent";

function* onGetPosts() {
    try {
        const response = yield call(getPosts);
        yield put(getPostsSuccess(response));
    } catch (error) {
        // yield put(getPostsFail(error.response));
    }
}
function* onGetComments({ payload: id }) {
    try {
        const response = yield call(getComments, id);
        yield put(getCommentsSuccess(response));
    } catch (error) {
        // yield put(getPostsFail(error.response));
    }
}
function* onGetUser({ payload: id }) {
    try {
        const response = yield call(getUser, id);
        yield put(getUserSuccess(response));
    } catch (error) {
        // yield put(getPostsFail(error.response));
    }
}
function* onGetUserPosts({ payload: id }) {
    try {
        const response = yield call(getUserPosts, id);
        yield put(getUserPostsSuccess(response));
    } catch (error) {
        // yield put(getPostsFail(error.response));
    }
}
function* PostsSaga() {
    yield takeLatest(GET_POSTS, onGetPosts);
    yield takeLatest(GET_COMMENTS, onGetComments);
    yield takeLatest(GET_USER, onGetUser);
    yield takeLatest(GET_USER_POSTS, onGetUserPosts);
}
export default PostsSaga;
