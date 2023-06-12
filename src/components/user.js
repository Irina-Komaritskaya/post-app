//- переходы
import avatar from "../img/avatar.jpg";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
export const User = ({ user }) => {
    return (
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
                            <a
                                target="_blank"
                                href={`https:// + ${user.website}`}
                            >
                                {user.website}
                            </a>
                        </Stack>
                    </Stack>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};
