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
    const { filteredPosts } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    console.log(filteredPosts);

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    return (
        <Container>
            <Row className="mb-3">
                <Col xs="auto" md={7}>
                    <Search data={posts} />
                </Col>
                <Col xs="auto" md={4}>
                    <ToggleSort posts={posts} />
                </Col>
            </Row>
            <Paging
                items={posts.map((x) => (
                    <Post data={x} />
                ))}
            ></Paging>
        </Container>
    );
};
