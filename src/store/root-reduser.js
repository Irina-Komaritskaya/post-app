import { combineReducers } from "redux";
import {
    postsReducer,
    commentsReducer,
    userReducer,
    userPostsReducer,
} from "./redusers";

export const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
    user: userReducer,
    userPosts: userPostsReducer,
});
