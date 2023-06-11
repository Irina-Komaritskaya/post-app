//- закрыть при переходе
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { User } from "./user";
export const Header = () => {
    const user = {
        username: "Irina",
        name: "Irina Komaritskaia",
        email: "reena.message@gmail.com",
        website: "github.com/Irina-Komaritskaya",
    };
    return (
        <Navbar bg="light" expand="false" className="mb-3">
            <Container fluid>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-false`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                    placement="start"
                >
                    <Offcanvas.Header closeButton aria-label="Hide">
                        <Offcanvas.Title>Lorem ipsum</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="mb-2">
                            <Link to={`/`}>Home</Link>
                            <Link to={`/About`}>About</Link>
                        </Nav>
                        <User user={user} />
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};
