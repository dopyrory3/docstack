import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, } from '@fortawesome/free-solid-svg-icons'
import { Form, FormControl, Row, Col, Stack, Card } from 'react-bootstrap'

import ButtonToggle from '../forms/ButtonToggle'

function AdminServerSettings() {
    return (
        <>
            <Row className='mt-3 mb-3'>
                <h6>GENERAL</h6>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Site url</Form.Label>
                        <Form.Control placeholder="example.com" />
                    </Form.Group>
                </Col>
                <Col>
                    <ButtonToggle title="Draw.io" name="toggle-drawio" enabled={true}></ButtonToggle>
                </Col>
                <Col>
                    <ButtonToggle title="Debug" name="toggle-debug" enabled={false}></ButtonToggle>
                </Col>
            </Row>
            <Row className='mt-3 mb-3'>
                <Col>
                    <Form.Group>
                        <Form.Label>Language</Form.Label>
                        <Form.Select>
                            <option>English (UK)</option>
                            <option>English (US)</option>
                            <option>Spanish</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Timezone</Form.Label>
                        <Form.Select>
                            <option>(GMT) Western Europe Time, London</option>
                            <option>(GMT) Western Europe Time, London</option>
                            <option>(GMT) Western Europe Time, London</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <h6>EMAIL</h6>
            <Row>
                <Col sm={4}>
                    <Form.Group>
                        <Form.Label>Email Driver</Form.Label>
                        <Form.Select>
                            <option>Mailgun</option>
                            <option>Smtp</option>
                            <option>PHPMail</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col sm={8}>
                    <Form.Group className="mb-3">
                        <Form.Label>From name</Form.Label>
                        <Form.Control placeholder="Example Team" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className='mt-3 mb-3'>
                <Col sm={4}>
                </Col>
                <Col sm={8}>
                    <Form.Group className="mb-3">
                        <Form.Label>From address</Form.Label>
                        <Form.Control placeholder="team@example.com" />
                    </Form.Group>
                </Col>
            </Row>
            <h6>AUTHENTICATION</h6>
            <Row>
                <Col sm={4}>
                    <Form.Group>
                        <Form.Label>Authentication type</Form.Label>
                        <Form.Select>
                            <option>Azure</option>
                            <option>Facebook</option>
                            <option>Google</option>
                            <option>Local</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col sm={8}>
                    <Form.Group className="mb-3">
                        <Form.Label>Tenant</Form.Label>
                        <Form.Control placeholder="example.onmicrosoft.com" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={9}>
                    <Form.Group className="mb-3">
                        <Form.Label>App id</Form.Label>
                        <Form.Control placeholder="9384hfnsks297475vnjs8sn3j38dc" />
                    </Form.Group>
                </Col>
                <Col sm={3}>
                    <ButtonToggle title="Auto register" name="toggle-autoregister" enabled={false}></ButtonToggle>
                </Col>
            </Row>
            <Row>
                <Col sm={9}>
                    <Form.Group className="mb-3">
                        <Form.Label>App secret</Form.Label>
                        <Form.Control placeholder="93j34j49394dsdsds82j2n2bf8f8" />
                    </Form.Group>
                </Col>
                <Col sm={3}>
                    <ButtonToggle title="Confirm email" name="toggle-confirmemail" enabled={false}></ButtonToggle>
                </Col>
            </Row>
            <Row className='mt-3 mb-3'>
                <h6>VISUAL</h6>
                <Col sm={9}>
                    <Form.Group className="mb-3">
                        <Form.Label>Avatar url</Form.Label>
                        <Form.Control placeholder="https://seccdn.libravatar.org/avatar/${hash}?s=${size}&d=identicon" />
                    </Form.Group>
                </Col>
                <Col sm={3}>
                    <ButtonToggle title="Dark mode" name="toggle-darkmode" enabled={false}></ButtonToggle>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                    <Stack>
                        <Form.Group className='mb-3'>
                            <Form.Label>Books layout</Form.Label>
                            <Form.Select>
                                <option>List</option>
                                <option>Grid</option>
                            </Form.Select>
                        </Form.Group>
                        <Card>
                            <Card.Img variant="top" src="/assets/books-list-pic.png" />
                        </Card>
                    </Stack>
                </Col>
                <Col>
                    <Stack>
                        <Form.Group className='mb-3'>
                            <Form.Label>Shelves layout</Form.Label>
                            <Form.Select>
                                <option>Grid</option>
                                <option>List</option>
                            </Form.Select>
                        </Form.Group>
                        <Card>
                            <Card.Img variant="top" src="/assets/shelves-grid-pic.png" />
                        </Card>
                    </Stack>
                </Col>
                <Col>
                    <Stack>
                        <Form.Group className='mb-3'>
                            <Form.Label>Shelf layout</Form.Label>
                            <Form.Select>
                                <option>Grid</option>
                                <option>List</option>
                            </Form.Select>
                        </Form.Group>
                        <Card>
                            <Card.Img variant="top" src="/assets/shelf-grid-pic.png" />
                        </Card>
                    </Stack>
                </Col>
            </Row>
            <Row className='mt-3 mb-3'>
                <h6>SECURITY</h6>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Trusted proxies</Form.Label>
                        <Form.Control rows={4} as="textarea" placeholder="pxy1.example.com \n 182.11.513.90" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Allowed iframe hosts</Form.Label>
                        <Form.Control rows={4} as="textarea" placeholder="ref.thirdparty.com &#10; 50.172.44.19" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ButtonToggle title="Page scripts" name="toggle-pagescripts" enabled={true}></ButtonToggle>
                </Col>
                <Col>
                    <ButtonToggle title="Allow robots" name="toggle-allowrobots" enabled={true}></ButtonToggle>
                </Col>
                <Col>
                    <ButtonToggle title="Untrusted server fetching" name="toggle-serverfetching" enabled={false}></ButtonToggle>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                    <Form.Group className='mb-3'>
                        <Form.Label>Session lifetime</Form.Label>
                        <Form.Select>
                            <option>Auto</option>
                            <option>1hr</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Cookie name</Form.Label>
                        <Form.Control placeholder="examplecom_session" />
                    </Form.Group>
                </Col>
            </Row>
        </>
    )
}

export default AdminServerSettings