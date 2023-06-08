import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser, getUserPosts } from "../store/actions";
import { useSelector } from "react-redux";
import { Post } from "./post";
import styles from "./user.module.css";
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
        <Row className={styles.inner}>
            <Col xs="auto" md={4}>
                <Card className={styles.card}>
                    <Card.Body>
                        <Card.Img variant="top" src={avatar} alt="avatar" />
                        <Card.Title className={styles.title}>
                            {"@" + user.username}
                        </Card.Title>
                        <Card.Text>
                            <Stack gap={3}>
                                <Stack direction="horizontal" gap={1}>
                                    <div className={styles.label}>Name:</div>
                                    <div>{user.name}</div>
                                </Stack>

                                <Stack direction="horizontal" gap={1}>
                                    <div className={styles.label}>Email:</div>
                                    <div>{user.email}</div>
                                </Stack>
                                <Stack direction="horizontal" gap={1}>
                                    <div className={styles.label}>Website:</div>
                                    <div>{user.website}</div>
                                </Stack>
                            </Stack>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs="auto" md={7} className={styles.posts}>
                {userPosts.map((x) => (
                    <Post data={x} />
                ))}
            </Col>
        </Row>
    );
};
