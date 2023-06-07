import { takeLatest, put, call } from "redux-saga/effects";
import { GET_POST_SUCCESS, GET_POSTS } from "./action-types";
import { getPostSuccess } from "./actions";
import { getPost } from "../agent";

function* onGetPosts() {
    try {
        const response = yield call(getPost);
        yield put(getPostSuccess(response));
    } catch (error) {
        // yield put(getPostsFail(error.response));
    }
}
function* PostSaga() {
    yield takeLatest(GET_POSTS, onGetPosts);
}
export default PostSaga;
