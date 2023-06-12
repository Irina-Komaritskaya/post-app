import avatar from "../img/photo.jpeg";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
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
                                <div className="fw-bold">Name:</div>
                                <div>Komaritskaya Irina</div>
                            </Stack>
                            <Stack direction="horizontal" gap={1}>
                                <div className="fw-bold">Position:</div>
                                <div>Front-End developer</div>
                            </Stack>
                            <Stack gap={1}>
                                <div className="fw-bold">Technologies:</div>
                                <div>
                                    React, Redux, HTML5, JS, jQuery, CSS, SCSS,
                                    Pug, Webpack, CyPress, TypeScript.
                                </div>
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
