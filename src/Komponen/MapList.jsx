import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const MapList = () => {
    return (
        <div >
            <Card className='cardnya mb-5' style={{ width: '18rem' ,backgroundColor: '#E66C2C' , margin:'auto',borderRadius:'15px'}}>
                
                <Card.Body>
                    <Card.Title>ID : 1234</Card.Title>
                    <Card.Text>
                        Aplikasi to do react js
                    </Card.Text>
                    <Button variant="primary" className='mt-4 buttoncard' style={{ backgroundImage: 'linear-gradient(to right,#033E3E,#033E3E,#2E8B57)', border: 'none' }}>Update</Button>{'   '}
                    <Button variant="primary" className='mt-4 buttoncard' style={{ backgroundImage: 'linear-gradient(to right,#4863A0,#151B54,#008B8B)', border: 'none' }}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

