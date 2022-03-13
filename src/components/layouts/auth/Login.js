import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

function Login() {
    return (
        <>
            <Container className='mb-5 mt-5 p-4 shadow rounded justify-content-center text-center' style={{ 'width': '30%' }}>
                <Row className='mt-3 mb-5 text-secondary'>
                    <h3>Login</h3>
                </Row>
                <Row className='mt-2 mb-4'>
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <Form.Control placeholder="Username or email" />
                    </Col>
                    <Col sm={1}></Col>
                </Row>
                <Row className='mb-5'>
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                    <Col sm={1}></Col>
                </Row>
                <Row className='mt-5 mb-5'></Row>
                <Row className='mt-5 mb-5 d-flex justify-content-center'>
                    <Button style={{ 'width': '50%' }}>Login</Button>
                </Row>
            </Container>
        </>
    )
}

//<Form.Group className="mb-3" style={{ 'width': '100%' }}>
export default Login