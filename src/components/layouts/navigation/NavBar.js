import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faMessage, faLifeRing, faGaugeHigh } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'

function NavBar() {
    const location = useLocation()

    return (
        <>
            <Navbar variant="light" expand="lg">
                <Navbar.Brand href="#home" className='m-0'>
                    <img
                        src="/assets/logo.svg"
                        width="auto"
                        height="55"
                        className="d-inline-block align-top ms-3 me-3 p-1"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link as={Link} to='/dashboard' className={location.pathname.includes('/dashboard') ? 'border-bottom border-primary' : ''}>
                            <FontAwesomeIcon icon={faGaugeHigh} className='me-2' />
                            Dashboard
                        </Nav.Link>
                        <Nav.Link as={Link} to='/admin/settings' className={location.pathname.includes('/admin') ? 'border-bottom border-primary' : ''} >
                            <FontAwesomeIcon icon={faDesktop} className='me-2' />
                            Admin
                        </Nav.Link>
                        <Nav.Link to='/#forum'>
                            <FontAwesomeIcon icon={faMessage} className='me-2' />
                            Forums
                        </Nav.Link>
                        <Nav.Link to='#support'>
                            <FontAwesomeIcon icon={faLifeRing} className='me-2' />
                            Support
                        </Nav.Link>

                    </Nav>
                    <Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="primary" className='me-4'>Search</Button>
                        </Form>
                        <Nav.Link as={Link} to='/login' className='ms-2 me-2'>Login</Nav.Link>
                        <Nav.Link as={Link} to='/register' className='ms-2 me-2' >Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavBar