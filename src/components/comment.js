import Container from "react-bootstrap/Container";

export const Comment = ({ data }) => {
    return (
        <Container className="pt-2">
            <div className="fw-bold bg-light">{data.email}</div>
            <div className="text-lowercase">{data.body}</div>
        </Container>
    );
};
