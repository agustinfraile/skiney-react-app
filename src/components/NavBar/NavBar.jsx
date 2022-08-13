import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

export default function NavBar() {
    return (
        <>
            <Navbar className="navbar-principal" bg="dark" variant="dark">
                <Container className="navbar-principal-cont">
                    <Navbar.Brand href="#home">SKINEY</Navbar.Brand>
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link> */}
                        <Nav.Link href="#features">Productos</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </>
    );
}