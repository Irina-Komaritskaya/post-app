//- дерганья при пагинации
//- ключи!!
import { useDispatch } from "react-redux";
import { getPosts } from "../store/actions";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Post } from "./post";
import Container from "react-bootstrap/Container";
import { Search } from "./search";
import { ToggleSort } from "./toggle-sort";
import { Paging } from "./pagination";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Posts = () => {
    const { posts } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    return (
        <Container>
            <Paging
                items={posts.map((x) => (
                    <Post data={x} />
                ))}
            ></Paging>
        </Container>
    );
};
