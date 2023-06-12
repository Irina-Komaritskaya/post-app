import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";

export const Spinners = () => {
    return (
        <Row className="mb-3 justify-content-md-center">
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="secondary" />
        </Row>
    );
};
