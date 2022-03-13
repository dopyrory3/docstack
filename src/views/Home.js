import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Stack, Row, Col, Container, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'

function Home() {

    useEffect(() => {
        document.body.style.backgroundColor = '#fff';
        document.body.style.backgroundImage = 'url("/assets/home-bg.svg")';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'right top';
    });

    const textGradient = {
        'background': '-webkit-linear-gradient(#FF0080, #7928CA)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
    }

    const bgGradient = {
        'background': 'linear-gradient(to bottom right, #FF0080, #7928CA)',
        'background-position': 'right bottom',
        'border': 'none',
        'color': 'white'
    }

    return (
        <>
            <Stack direction='horizontal' className='d-flex justify-content-start w-20 p-4'>
                <img
                    src="/assets/logo.svg"
                    width="auto"
                    height="55"
                    className='m-3'
                />
                <h2 className='mt-2' style={textGradient}>Dochost</h2>
            </Stack>
            <Container fluid>
                <Row className='mt-5 mb-5'></Row>
                <Row className='mt-5 mb-5'></Row>

                <Row className='mb-5'>
                    <Col>
                        <h1 style={{ ...textGradient, ...{ 'font-size': '64px', 'background-color': '#fff !important' } }} className='ms-3 mb-4 p-2'>Bookstack Hosting</h1>
                    </Col>
                </Row>
                <Row className='w-50'>
                    <ul className='ms-4'>
                        <li className='ms-3 text-secondary' style={{ 'list-style-type': 'disc ' }}>
                            <h4>Fully managed hosting</h4>
                        </li>
                        <li className='ms-3 text-secondary' style={{ 'list-style-type': 'disc ' }}>
                            <h4>Modify bookstack settings</h4>
                        </li>
                        <li className='ms-3 text-secondary' style={{ 'list-style-type': 'disc ' }}>
                            <h4>Metrics dashboard</h4>
                        </li>
                        <li className='ms-3 text-secondary' style={{ 'list-style-type': 'disc ' }}>
                            <h4>Admin manager</h4>
                        </li>
                        <li className='ms-3 text-secondary' style={{ 'list-style-type': 'disc ' }}>
                            <h4>Theme marketplace</h4>
                        </li>
                        <li className='ms-3 text-secondary' style={{ 'list-style-type': 'disc ' }}>
                            <h4>Easy backup recovery</h4>
                        </li>
                    </ul>
                </Row>
                <Row className='p-4'>
                    <Stack direction='horizontal' gap={3}>

                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Beta registration is closed</Tooltip>}>
                            <span className="d-inline-block">
                                <Button disabled size='lg' style={{ ...bgGradient, ...{ pointerEvents: 'none' } }}>
                                    JOIN BETA
                                </Button>
                            </span>
                        </OverlayTrigger>
                        <a href='/login'>
                            <Button size='lg' style={bgGradient}>
                                LOGIN
                            </Button>
                        </a>
                    </Stack>
                </Row>
            </Container>

        </>
    )
}

export default Home