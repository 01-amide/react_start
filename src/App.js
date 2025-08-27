/**
 * Main Application Component
 * 
 * This is the root component of the React application that renders:
 * - A responsive navigation bar using React Bootstrap
 * - A header section with personal information
 * - A card gallery displaying nature images with descriptions
 * 
 * The component demonstrates the integration of React Bootstrap components
 * and inline styling approaches.
 */

// Import React Bootstrap components for UI elements
import Button from 'react-bootstrap/Button';        // Button component with various styles
import 'bootstrap/dist/css/bootstrap.min.css';      // Bootstrap CSS framework
import Container from 'react-bootstrap/Container';   // Responsive container wrapper
import Nav from 'react-bootstrap/Nav';              // Navigation component
import Navbar from 'react-bootstrap/Navbar';        // Navigation bar component
import NavDropdown from 'react-bootstrap/NavDropdown'; // Dropdown menu component
import Card from 'react-bootstrap/Card';            // Card component for content display
import Form from 'react-bootstrap/Form';  //Form component for comments of viewers

/**
 * Main App Component
 * 
 * Renders a complete web page with navigation, header, and content sections.
 * Uses React Bootstrap components for consistent styling and responsive design.
 * 
 * @returns {JSX.Element} The complete application UI
 */
function App() {
    // Inline styles object for the card container
    // This approach allows for dynamic styling and component-specific styles
    let styles = {
        display: 'flex',           // Use flexbox for layout
        justifyContent: "center",   // Center items horizontally
        gap: "20px"                // Space between cards
    }

    return (
        <>
        {/* Main application wrapper */}
        <div className='App' >
            
            {/* Navigation Bar Section */}
            {/* 
                React Bootstrap Navbar component with:
                - Responsive design that collapses on smaller screens
                - Light background theme
                - Brand logo/text
                - Navigation links and dropdown menu
            */}
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    {/* Brand/Logo section */}
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    
                    {/* Mobile hamburger menu toggle */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                    {/* Navigation menu content */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* Navigation links */}
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            
                            {/* Dropdown menu with multiple options */}
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

            {/* Header Section */}
            {/* 
                Personal introduction section with:
                - Centered text alignment
                - Main heading with name
                - Welcome message
            */}
            <header style={{textAlign:"center", }}>
                <h1>I am Olamide Ajikan</h1>
                <p>Welcome to my page</p>
            </header>

            {/* Card Gallery Section */}
            {/* 
                Container for displaying multiple cards in a flexbox layout.
                Each card shows a nature image with title, description, and action button.
            */}
            <div style={styles}>
                
                {/* First Card - American Goldfinch */}
                <Card style={{ width: '18rem' }}>
                    {/* Card image with fixed height for consistency */}
                    <Card.Img 
                        variant="top" 
                        src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/a/m/AmericanGoldfinch_MattWilliams_4000x2200.jpg?crop=0%2C0%2C4000%2C2200&wid=1300&hei=715&scl=3.076923076923077" 
                        style={{height:"160px"}}
                    />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                {/* Second Card - Nature Scene */}
                <Card style={{ width: '18rem' }}>
                    <Card.Img 
                        variant="top" 
                        src="https://live.staticflickr.com/65535/51980751292_38b3d98b76_b.jpg" 
                        style={{height:"160px"}}
                    />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                {/* Third Card - Garden Scene */}
                <Card style={{ width: '18rem' }}>
                    <Card.Img 
                        variant="top" 
                        src="https://gardenandgun.com/wp-content/uploads/2024/04/AdobeStock_475438898-1600x1067.jpeg" 
                        style={{height:"160px"}}
                    />
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

        <div style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', marginTop: '80px'}}>
            <h2>Tell us which birds you’d like to see more</h2>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3}/>
        </Form.Group>
        </Form>
        </div>
        </>
    );
}

// Export the App component as the default export
// This allows other files to import and use this component
export default App;