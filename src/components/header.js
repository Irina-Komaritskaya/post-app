//- закрыть при переходе
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <Navbar bg="light" expand="false" className="mb-3">
            <Container fluid>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-false`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Lorem ipsum</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav>
                            <Link to={`/`}>Home</Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};
