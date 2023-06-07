import { all, fork } from "redux-saga/effects";

import PostSaga from "./saga";

export default function* rootSaga() {
    yield all([fork(PostSaga)]);
}
