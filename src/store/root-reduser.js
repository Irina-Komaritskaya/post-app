import { combineReducers } from "redux";
import { postsReducer } from "./redusers";

export const rootReducer = combineReducers({
    posts: postsReducer,
});
