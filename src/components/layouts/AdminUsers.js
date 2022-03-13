import React from 'react'
import { Table, Stack } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

function AdminUsers() {
    return (
        <>
            <Table striped hover className='table-borderless mt-5'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email address</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>admin</td>
                        <td>admin@example.com</td>
                        <td>
                            <Stack direction='horizontal' gap={3}>
                                <FontAwesomeIcon icon={faPencil} className='text-primary' />
                                <span className='text-primary'>Edit</span>
                                <FontAwesomeIcon icon={faTrash} className='ms-3 text-danger' />
                            </Stack>
                        </td>
                    </tr>
                    <tr>
                        <td>John Smith</td>
                        <td>adm.smithj@example.com</td>
                        <td>
                            <Stack direction='horizontal' gap={3}>
                                <FontAwesomeIcon icon={faPencil} className='text-primary' />
                                <span className='text-primary'>Edit</span>
                                <FontAwesomeIcon icon={faTrash} className='ms-3 text-danger' />
                            </Stack>
                        </td>
                    </tr>
                    <tr>
                        <td>Jane Doe</td>
                        <td>adm.doeja@example.com</td>
                        <td>
                            <Stack direction='horizontal' gap={3}>
                                <FontAwesomeIcon icon={faPencil} className='text-primary' />
                                <span className='text-primary'>Edit</span>
                                <FontAwesomeIcon icon={faTrash} className='ms-3 text-danger' />
                            </Stack>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <div className='position-relative mt-5 pt-5'>
                <FontAwesomeIcon icon={faPlusCircle} className='position-absolute bottom-0 end-0 text-primary' size='2x' />
            </div>

        </>
    )
}

export default AdminUsers