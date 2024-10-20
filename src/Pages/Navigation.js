import { Link, Outlet } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';


const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Tano</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
}

export default Navigation;