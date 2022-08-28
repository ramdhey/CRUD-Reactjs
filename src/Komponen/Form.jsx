import React, { useState } from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Formnya = () => {

    const [input, setInput] = useState("")

    console.log("input",input)

    const handleChange = (event) => {
        setInput(event.target.value)

    }


    return (
        <div>

            <Form className='text-center mt-5'>
                <Form.Group className="mb-4 justify-content-center forminputan" controlId="inputToDo" style={{ width: '300px' }}>
                    <Form.Label>Input To Do</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan data yang mau di Input" className='inputdatanya' onChange={handleChange} value={input} />
                    <Button className='mt-4 buttonform' style={{ backgroundImage: 'linear-gradient(to right,#3F000F, #7D0552, #C58917)', border: 'none' }}>Add</Button>{' '}

                </Form.Group>

                <Form.Group className="mb-5 forminputan mt-5" controlId="updateToDo" style={{ width: '300px' }}>
                    <Form.Label>Update To Do</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan data yang mau di Update" className='inputdatanya' onChange={handleChange} value={input} />
                    <Button className='mt-4 buttonform' style={{ backgroundImage: 'linear-gradient(to right,#033E3E,#033E3E,#2E8B57)', border: 'none' }}>Update</Button>{' '}
                </Form.Group>


            </Form>

        </div>
    )
}

