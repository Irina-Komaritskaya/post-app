import { takeLatest, put, call } from "redux-saga/effects";
import { GET_POSTS_SUCCESS, GET_POSTS, GET_COMMENTS } from "./action-types";
import { getPostsSuccess, getCommentsSuccess } from "./actions";
import { getPosts, getComments } from "../api/agent";

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
function* PostsSaga() {
    yield takeLatest(GET_POSTS, onGetPosts);
    yield takeLatest(GET_COMMENTS, onGetComments);
}
export default PostsSaga;
