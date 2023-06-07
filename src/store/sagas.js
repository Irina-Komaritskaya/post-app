import { all, fork } from "redux-saga/effects";

import PostsSaga from "./saga";

export default function* rootSaga() {
    yield all([fork(PostsSaga)]);
}
