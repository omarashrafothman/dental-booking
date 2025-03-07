"use client"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';

function Header() {
    return (
        <Navbar expand="lg" className="py-3 shadow-sm ">
            <Container>
                {/* Logo Section */}
                <Navbar.Brand href="/" className="d-flex align-items-center">
                    <Image
                        src={"https://cdn.prod.website-files.com/60e4a233ef2c63474dd2a3e0/60e4a233ef2c6316f6d2a419_logo-dentist-template.svg"}
                        alt="Dentist Logo"
                        width={150}
                        height={50}

                    />

                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" />


                <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                    <Nav className="align-items-center">
                        <Nav.Link href="#" className="nav-item active">Home</Nav.Link>

                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Services</Nav.Link>


                        {/* Contact Button */}
                        <Button variant="outline-light" className="border rounded px-3 mx-2 text-dark">

                            +201552242010
                        </Button>

                        {/* Book Now Button */}
                        <Button variant="primary" className="rounded px-4">
                            Book Now
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;