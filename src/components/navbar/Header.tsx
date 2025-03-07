"use client";
import { usePathname } from "next/navigation";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Link from "next/link";
import { NavLinkType } from "../../types/types";

function Header() {
    const pathname = usePathname();

    const navLinks: NavLinkType[] = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },

    ];

    return (
        <Navbar expand="lg" className="py-3 shadow-sm">
            <Container>
                <Navbar.Brand href="/" className="d-flex align-items-center">
                    <Image
                        src="https://cdn.prod.website-files.com/60e4a233ef2c63474dd2a3e0/60e4a233ef2c6316f6d2a419_logo-dentist-template.svg"
                        alt="Dentist Logo"
                        width={150}
                        height={50}
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                    <Nav className="align-items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`nav-link ${pathname === link.path ? "active fw-bold" : ""}`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link
                            href="tel:+201552242010"
                            className="border rounded py-2 px-3 mx-2 text-dark text-decoration-none"
                        >
                            +201552242010
                        </Link>

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
