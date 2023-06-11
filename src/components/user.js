import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser, getUserPosts } from "../store/actions";
import { useSelector } from "react-redux";
import { Post } from "./post";
import avatar from "../img/avatar.jpg";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const User = () => {
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
                <Card>
                    <Card.Body>
                        <Card.Img variant="top" src={avatar} alt="avatar" />
                        <Card.Title className="text-center mt-2 mb-3">
                            {"@" + user.username}
                        </Card.Title>
                        <Card.Text>
                            <Stack gap={3}>
                                <Stack direction="horizontal" gap={1}>
                                    <div className="fw-bold">Name:</div>
                                    <div>{user.name}</div>
                                </Stack>

                                <Stack direction="horizontal" gap={1}>
                                    <div className="fw-bold">Email:</div>
                                    <div>{user.email}</div>
                                </Stack>
                                <Stack direction="horizontal" gap={1}>
                                    <div className="fw-bold">Website:</div>
                                    <div>{user.website}</div>
                                </Stack>
                            </Stack>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs="auto" md={8}>
                {userPosts.map((x) => (
                    <Post data={x} />
                ))}
            </Col>
        </Row>
    );
};
