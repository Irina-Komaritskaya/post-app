import { combineReducers } from "redux";
import { PostReducer } from "./redusers";

export const rootReducer = combineReducers({
    post: PostReducer,
});
