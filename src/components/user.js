import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

export const User = ({ user, src }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Img variant="top" src={src} alt="avatar" />
                <Card.Title className="text-center mt-2 mb-3">
                    {"@" + user.username}
                </Card.Title>
                <Card.Text>
                    <Stack gap={3}>
                        <Stack direction="horizontal" gap={1}>
                            <span className="fw-bold">Name:</span>
                            <span>{user.name}</span>
                        </Stack>

                        <Stack direction="horizontal" gap={1}>
                            <span className="fw-bold">Email:</span>
                            <span>{user.email}</span>
                        </Stack>
                        <Stack direction="horizontal" gap={1}>
                            <span className="fw-bold">Website:</span>
                            <a target="_blank" href={`https://${user.website}`}>
                                {user.website}
                            </a>
                        </Stack>
                    </Stack>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};
