import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import { Search } from "../components/search";
import { ToggleSort } from "../components/toggle-sort";
import { Posts } from "../components/posts";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getPosts } from "../store/actions";
import { useDispatch } from "react-redux";
import { sortPosts } from "../services/utils";

export const Home = () => {
    const dispatch = useDispatch();
    const { filteredPosts } = useSelector((state) => state.posts);
    const { posts, postsOrder } = useSelector((state) => state.posts);
    const [postsForDisplay, setPostForDisplay] = useState([]);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    useEffect(() => {
        let currentPosts = filteredPosts || posts;
        if (postsOrder && postsOrder !== "") {
            currentPosts = sortPosts({
                posts: currentPosts,
                order: postsOrder,
            });
        }
        setPostForDisplay(currentPosts);
    }, [filteredPosts, posts, postsOrder]);

    return (
        <Container>
            <Row className="mb-3 justify-content-between align-items-end">
                <Col xs="auto" md={5}>
                    <Search data={posts} />
                </Col>
                <Col xs="auto" md={3} lg={2}>
                    <ToggleSort posts={postsForDisplay} current={postsOrder} />
                </Col>
            </Row>
            <Posts posts={postsForDisplay} />
        </Container>
    );
};
