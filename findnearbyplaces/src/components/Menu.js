//import App from "../App";
import { Container, Navbar, Nav } from 'react-bootstrap';
const Menu = () => {
    return (
        <Navbar variant="pills" defaultActiveKey="/" bg="dark">
            <Container>
                <Nav.Item>
                    <Nav.Link href="#/">Home</Nav.Link>
                </Nav.Item>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Item>
                        <Nav.Link href="#login">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#sign">Signup</Nav.Link>
                    </Nav.Item>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Menu;