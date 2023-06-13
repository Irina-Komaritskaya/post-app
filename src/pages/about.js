import avatar from "../img/photo.jpeg";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import { myprofile } from "../helpers/my-profile";

export const About = () => {
    return (
        <Row md={4} className="justify-content-center">
            <Card>
                <Card.Body>
                    <Card.Img src={avatar} alt="avatar" />
                    <Card.Title className="text-center mt-2 mb-3">
                        About me
                    </Card.Title>
                    <Card.Text>
                        <Stack gap={3}>
                            <Stack direction="horizontal" gap={1}>
                                <span className="fw-bold">Name:</span>
                                <span>{myprofile.name}</span>
                            </Stack>
                            <Stack direction="horizontal" gap={1}>
                                <span className="fw-bold">Position:</span>
                                <span>{myprofile.position}</span>
                            </Stack>
                            <Stack gap={1}>
                                <span className="fw-bold">Technologies:</span>
                                <span>{myprofile.technologies}</span>
                            </Stack>
                            <Stack direction="horizontal" gap={1}>
                                <a
                                    target="_blank"
                                    href="https://github.com/Irina-Komaritskaya"
                                >
                                    Git
                                </a>
                            </Stack>
                        </Stack>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Row>
    );
};
