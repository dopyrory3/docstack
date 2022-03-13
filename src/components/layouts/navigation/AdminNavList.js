import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDatabase, faServer, faUserShield } from '@fortawesome/free-solid-svg-icons'
import { Container, ListGroup, } from 'react-bootstrap'

function AdminNavList() {
    const location = useLocation()

    return (
        <>
            <Container className='border border-light rounded-2 shadow-sm p-0'>
                <ListGroup as="ul" variant="flush" className='m-2'>
                    <h6 className='mt-2 mb-0 ms-2 list-group-item-heading'>Settings</h6>
                    <hr className='w-100 mt-4'></hr>

                    <Link to='/admin/settings' style={{ textDecoration: 'none' }}>
                        <ListGroup.Item as="li" active={(location.pathname === '/admin' || location.pathname === '/admin/settings' || location.pathname === '/admin/')} className='mt-1 mb-1 border-0 rounded-1 list-group-item list-group-item-action'>
                            <FontAwesomeIcon icon={faServer} fixedWidth className='me-3' />
                            <span>Server Settings</span>
                        </ListGroup.Item>
                    </Link>
                    <Link to='/admin/users' style={{ textDecoration: 'none' }}>
                        <ListGroup.Item as="li" active={location.pathname === '/admin/users'} className='mt-1 mb-1 border-0 rounded-1 list-group-item list-group-item-action'>
                            <FontAwesomeIcon icon={faUserShield} fixedWidth className='me-3' />
                            <span>Admins</span>
                        </ListGroup.Item>
                    </Link>
                    <Link to='/admin/themes' style={{ textDecoration: 'none' }}>
                        <ListGroup.Item as="li" active={location.pathname === '/admin/themes'} className='mt-1 mb-1 border-0 rounded-1 list-group-item list-group-item-action'>
                            <FontAwesomeIcon icon={faCode} fixedWidth className='me-3' />
                            <span>Themes</span>
                        </ListGroup.Item>
                    </Link>
                    <Link to='/admin/backups' style={{ textDecoration: 'none' }}>
                        <ListGroup.Item as="li" active={location.pathname === '/admin/backups'} className='mt-1 mb-1 border-0 rounded-1 list-group-item list-group-item-action'>
                            <FontAwesomeIcon icon={faDatabase} fixedWidth className='me-3' />
                            <span>Backups</span>
                        </ListGroup.Item>
                    </Link>
                </ListGroup>
            </Container>
        </>
    )
}

export default AdminNavList