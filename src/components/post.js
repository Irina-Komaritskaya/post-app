// - title, post, avatar, koment
import { useDispatch } from "react-redux";
import { getPosts } from "../store/actions";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export const Post = () => {
    const { post } = useSelector((state) => state.post);
    console.log(post.id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);
    return <div></div>;
};
