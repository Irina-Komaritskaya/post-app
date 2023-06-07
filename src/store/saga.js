import { takeLatest, put, call } from "redux-saga/effects";
import { GET_POSTS_SUCCESS, GET_POSTS } from "./action-types";
import { getPostsSuccess } from "./actions";
import { getPosts } from "../api/agent";

function* onGetPosts() {
    try {
        const response = yield call(getPosts);
        yield put(getPostsSuccess(response));
    } catch (error) {
        // yield put(getPostsFail(error.response));
    }
}
function* PostsSaga() {
    yield takeLatest(GET_POSTS, onGetPosts);
}
export default PostsSaga;
