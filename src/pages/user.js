import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser, getUserPosts } from "../store/actions";
import { useSelector } from "react-redux";
import { Post } from "../components/post";
import { User } from "../components/user";
import avatar from "../img/avatar.jpg";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const UserPage = () => {
    const { user } = useSelector((state) => state.user);
    const { userPosts } = useSelector((state) => state.userPosts);
    console.log(userPosts);
    const param = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(param.id));
    }, [param.id]);
    useEffect(() => {
        dispatch(getUserPosts(param.id));
    }, [param.id]);

    return (
        <Row className="justify-content-center p-2">
            <Col xs="auto" md={4}>
                <User user={user} />
            </Col>
            <Col xs="auto" md={8}>
                {userPosts.map((x) => (
                    <Post data={x} />
                ))}
            </Col>
        </Row>
    );
};
