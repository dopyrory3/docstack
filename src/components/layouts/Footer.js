import React from 'react'
import { Container, Row, Col, Stack } from 'react-bootstrap'

function Footer() {
    return (
        <>
            <Container className='p-5' style={{ 'background-color': 'rgba(243, 243, 243, 0.959)' }}>
                <Container fluid className='d-flex justify-content-center'>
                    <Row>
                        <Col>
                            <Stack direction='horizontal' gap={3}>
                                <a href='#' className='text-decoration-none'>About us</a>
                                <a href='#' className='text-decoration-none'>Privacy policy</a>
                                <a href='#' className='text-decoration-none'>FAQ</a>
                                <a href='#' className='text-decoration-none'>Contact us</a>
                            </Stack>
                        </Col>
                    </Row>
                </Container>
                <Row className='text-center'>
                    <Col>
                        <img
                            src="/assets/logo.svg"
                            width="auto"
                            height="55"
                            className='m-3'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <small>
                            Copyright DocStack ©️ 2022
                        </small>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Footer