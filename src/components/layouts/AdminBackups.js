import React from 'react'
import { Row, Col, Button, Table, Stack, FormCheck } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faTrashRestore, faDownload, faTrash } from '@fortawesome/free-solid-svg-icons'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

function AdminBackups() {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: ['PHP', 'Images', 'JSON', 'CSS', 'Other'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    'rgb(169, 71, 71, 0.4)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgb(63, 63, 63, 0.4)',

                ],
                borderColor: [
                    'rgb(169, 71, 71,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgb(63, 63, 63, 1)',

                ],
                borderWidth: 0,
            },
        ],
    };

    return (
        <>
            <Row>
                <Col sm={5}>
                    <Pie data={data} />
                </Col>
                <Col sm={7}>
                    <div className='ms-3 mt-3'>
                        <h4 className='text-dark'>Backup #12354</h4>
                        <Row className='mt-5'>
                            <Col>
                                <h6 className='text-dark'>Date taken: </h6>
                            </Col>
                            <Col className='d-flex justify-content-end'>
                                <p className='text-muted'>10 Janurary 2022</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h6 className='text-dark'>Bookstack version: </h6>
                            </Col>
                            <Col className='d-flex justify-content-end'>
                                <p className='text-muted'>v21.01.2</p>
                            </Col>
                        </Row>
                        <Row className='mb-5'>
                            <Col>
                                <h6 className='text-dark'>Backup size: </h6>
                            </Col>
                            <Col className='d-flex justify-content-end'>
                                <p className='text-muted'>221 MB</p>
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col className='d-flex justify-content-end'>
                                <Button className='me-2'><FontAwesomeIcon icon={faFolder} className='me-2' />Browse backup</Button>
                                <Button className='ms-2'><FontAwesomeIcon icon={faTrashRestore} className='me-2' />Restore</Button>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Table striped hover className='table-borderless mt-5'>
                    <thead>
                        <tr>
                            <th><FormCheck disabled /></th>
                            <th>Backup date</th>
                            <th>Bookstack version</th>
                            <th>Size</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><FormCheck checked={true} /></td>
                            <td>4 Jan 2022</td>
                            <td>v21.01.3</td>
                            <td>243.5 MB</td>
                            <td>
                                <Stack direction='horizontal' gap={3}>
                                    <FontAwesomeIcon icon={faFolder} className='text-primary' />
                                    <span className='text-primary'>Browse</span>
                                    <FontAwesomeIcon icon={faDownload} className='ms-3 text-primary' />
                                </Stack>
                            </td>
                        </tr>
                        <tr>
                            <td><FormCheck /></td>
                            <td>3 Jan 2022</td>
                            <td>v21.01.3</td>
                            <td>240.1 MB</td>
                            <td>
                                <Stack direction='horizontal' gap={3}>
                                    <FontAwesomeIcon icon={faFolder} className='text-primary' />
                                    <span className='text-primary'>Browse</span>
                                    <FontAwesomeIcon icon={faDownload} className='ms-3 text-primary' />
                                </Stack>
                            </td>
                        </tr>
                        <tr>
                            <td><FormCheck /></td>
                            <td>2 Jan 2022</td>
                            <td>v21.02.2</td>
                            <td>236.4 MB</td>
                            <td>
                                <Stack direction='horizontal' gap={3}>
                                    <FontAwesomeIcon icon={faFolder} className='text-primary' />
                                    <span className='text-primary'>Browse</span>
                                    <FontAwesomeIcon icon={faDownload} className='ms-3 text-primary' />
                                </Stack>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </>
    )
}

export default AdminBackups