import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Spinners = () => {
    return (
        <Row className="mb-3 justify-content-md-center">
            <Spinner animation="grow" variant="secondary" className="m-3" />
            <Spinner animation="grow" variant="secondary" className="m-3" />
            <Spinner animation="grow" variant="secondary" className="m-3" />
        </Row>
    );
};
