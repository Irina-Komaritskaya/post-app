import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import { Search } from "../components/search";
import { ToggleSort } from "../components/toggle-sort";
import { Posts } from "../components/posts";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Home = () => {
    const { filteredPosts } = useSelector((state) => state.posts);
    const { posts } = useSelector((state) => state.posts);

    return (
        <Container>
            <Row className="mb-3 justify-content-between align-items-end gap-2">
                <Col xs="auto" md={5}>
                    <Search data={posts} />
                </Col>
                <Col xs="auto" md={3} lg={2}>
                    <ToggleSort posts={posts} />
                </Col>
                <Posts />
            </Row>
        </Container>
    );
};
