// - title, post, avatar, koment
import { useDispatch } from "react-redux";
import { getPosts } from "../store/actions";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Post } from "./post";

export const Posts = () => {
    const { posts } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    return (
        <div className="posts">
            {posts.map((x) => (
                <Post data={x} />
            ))}
        </div>
    );
};
