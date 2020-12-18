import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Button, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function NaviBar() {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand> WebDev Blog </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                    <Nav.Link><Link to="/about">About</Link></Nav.Link>
                </Nav>
                    <Button variant="primary" className="mr-2">Log</Button>
                    <Button variant="primary">Sign out</Button>
            </Navbar.Collapse>
        </Navbar>
    </>
    )
}