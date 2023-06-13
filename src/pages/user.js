import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser, getUserPosts } from "../store/actions";
import { useSelector } from "react-redux";
import { Post } from "../components/post";
import { User } from "../components/user";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import avatar from "../img/avatar.jpg";

export const UserPage = () => {
    const { user } = useSelector((state) => state.user);
    const { userPosts } = useSelector((state) => state.userPosts);
    const param = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(param.id));
    }, [param.id, dispatch]);

    useEffect(() => {
        dispatch(getUserPosts(param.id));
    }, [param.id, dispatch]);

    return (
        <Row className="justify-content-center p-2">
            <Col xs="auto" md={4}>
                <User user={user} src={avatar} />
                <Link to={"/"}>
                    <Button variant="link">return to Home</Button>
                </Link>
            </Col>
            <Col xs="auto" md={8}>
                {userPosts.map((x) => (
                    <Post data={x} key={x.id} />
                ))}
            </Col>
        </Row>
    );
};
