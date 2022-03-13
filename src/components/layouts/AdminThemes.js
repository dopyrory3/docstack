import React from 'react'
import { Row, Col, Button, Stack } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowUp, faLink } from '@fortawesome/free-solid-svg-icons'

function AdminThemes() {
    return (
        <>
            <Row>
                <Col sm={1}></Col>
                <Col sm={10} className='text-center shadow'>
                    <img
                        src="/assets/theme-template.png"
                        width="auto"
                        className='w-100 rounded mt-3'
                    />
                    <h4 className='mt-4 text-dark'>Active theme</h4>
                    <h6 className='mt-3 text-muted'>Bookstack default</h6>
                    <h6 className='mt-0 text-muted'>By Dan Brown</h6>
                </Col>
                <Col sm={1}></Col>
            </Row>
            <Row className='d-flex align-items-center justify-content-between align-items-start mt-5'>
                <h5 className='text-dark'>Available themes</h5>
            </Row>
            <Row className='d-flex align-items-center justify-content-center align-items-center'>
                <Col sm={5} className='text-center shadow'>
                    <img
                        src="/assets/theme-template.png"
                        width="auto"
                        className='w-100 rounded mt-3'
                    />
                    <Stack direction='horizontal' className='d-flex justify-content-center align-items-center'>
                        <h6 className='mt-3 ms-3 me-1 text-muted'>Theme 1</h6>
                        <FontAwesomeIcon icon={faLink} size='sm' className='mt-3 text-primary' />
                    </Stack>
                    <p className='mt-0 text-muted'>By DocStack</p>
                </Col>
                <Col sm={1}></Col>
                <Col sm={5} className='text-center shadow'>
                    <img
                        src="/assets/theme-template.png"
                        width="auto"
                        className='w-100 rounded mt-3'
                    />
                    <Stack direction='horizontal' className='d-flex justify-content-center align-items-center'>
                        <h6 className='mt-3 ms-3 me-1 text-muted'>Theme 2</h6>
                        <FontAwesomeIcon icon={faLink} size='sm' className='mt-3 text-primary' />
                    </Stack>
                    <p className='mt-0 text-muted'>By DocStack</p>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center mt-5'>
                <Col sm={5} className='text-center shadow'>
                    <img
                        src="/assets/theme-template.png"
                        width="auto"
                        className='w-100 rounded mt-3'
                    />
                    <Stack direction='horizontal' className='d-flex justify-content-center align-items-center'>
                        <h6 className='mt-3 ms-3 me-1 text-muted'>Theme 3</h6>
                        <FontAwesomeIcon icon={faLink} size='sm' className='mt-3 text-primary' />
                    </Stack>
                    <p className='mt-0 text-muted'>By DocStack</p>
                </Col>
                <Col sm={1}></Col>
                <Col sm={5} className='text-center shadow'>
                    <img
                        src="/assets/theme-template.png"
                        width="auto"
                        className='w-100 rounded mt-3'
                    />
                    <Stack direction='horizontal' className='d-flex justify-content-center align-items-center'>
                        <h6 className='mt-3 me-3 text-muted'>Theme 4</h6>
                        <FontAwesomeIcon icon={faLink} size='sm' className='mt-3 text-primary' />
                    </Stack>
                    <p className='mt-0 text-muted'>By DocStack</p>
                </Col>
            </Row>
            <div className='position-relative d-flex mt-5 pt-5 justify-content-end align-middle align-items-center'>
                <Button className='me-5'>Get more</Button>
                <FontAwesomeIcon icon={faFileArrowUp} className='position-absolute bottom-0 end-0 text-primary p-1' size='2x' />
            </div>
        </>
    )
}

export default AdminThemes