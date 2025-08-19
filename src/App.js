import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';

function App() {
    let styles = {
        display: 'flex',
        justifyContent: "center",
        gap: "20px"
    }


    return (
        <>
        <div className='App' >
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

        <header style={{textAlign:"center", }}>
            <h1>I am Olamide Ajikan</h1>
            <p>Welcome to my page</p>
        </header>

        <div style={styles}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/a/m/AmericanGoldfinch_MattWilliams_4000x2200.jpg?crop=0%2C0%2C4000%2C2200&wid=1300&hei=715&scl=3.076923076923077" style={{height:"160px"}}/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://live.staticflickr.com/65535/51980751292_38b3d98b76_b.jpg" style={{height:"160px"}}/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://gardenandgun.com/wp-content/uploads/2024/04/AdobeStock_475438898-1600x1067.jpeg" style={{height:"160px"}}/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </div>
        </div>
        </>
    );
    }

    export default App;