import { combineReducers } from "redux";
import { postsReducer, commentsReducer } from "./redusers";

export const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
});
