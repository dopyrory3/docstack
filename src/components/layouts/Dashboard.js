import React from 'react'
import { Row, Col, Stack, Container } from 'react-bootstrap'
import faker from '@faker-js/faker'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    scales: {
        x: {
            grid: {
                display: false
            }
        },
        y: {
            grid: {
                display: false
            }
        }
    },
    plugins: {
        legend: {
            position: 'bottom',
        },

        title: {
            display: true
        },
    },
};

const labels = ['2nd Jan', '3rd Jan', '4th Jan', '5th Jan', '6th Jan', '7th Jan', '8th Jan', '9th Jan', '10th Jan', '11th Jan', '12th Jan'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Site traffic',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 300 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ],
};

function Dashboard() {
    return (
        <>
            <Row>
                <Col className="d-flex shadow justify-content-between p-3 me-3" style={{ height: '24%' }}>
                    <Stack className='pt-2 ps-2'>
                        <h1 style={{ color: '#A94747' }}>12</h1>
                        <span>Shelves</span>
                    </Stack>
                    <img
                        src='/assets/shelf.png'
                        width="auto"
                        height="100"
                        className=''
                    />
                </Col>
                <Col className="d-flex shadow justify-content-between p-3 p-3 ms-3 me-3" style={{ height: '24%' }}>
                    <Stack className='pt-2 ps-2'>
                        <h1 style={{ color: '#077B70' }}>41</h1>
                        <span>Books</span>
                    </Stack>
                    <img
                        src='/assets/book.png'
                        width="auto"
                        height="100"
                        className=''
                    />
                </Col>
                <Col className="d-flex shadow justify-content-between p-3 ms-3 me-3" style={{ height: '24%' }}>
                    <Stack className='pt-2 ps-2'>
                        <h1 style={{ color: '#206EA7' }}>131</h1>
                        <span>Pages</span>
                    </Stack>
                    <img
                        src='/assets/page.png'
                        width="auto"
                        height="100"
                        className=''
                    />
                </Col>
                <Col className="d-flex shadow justify-content-between p-3 ms-3" style={{ height: '24%' }}>
                    <Stack className='pt-2 ps-2'>
                        <h1 style={{ color: '#99BBD1' }}>8</h1>
                        <span>Users</span>
                    </Stack>
                    <img
                        src='/assets/users.png'
                        width="auto"
                        height="100"
                        className=''
                    />
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col className='p-3 shadow'>
                    <Line options={options} data={data} />
                </Col>
            </Row>
        </>
    )
}

export default Dashboard