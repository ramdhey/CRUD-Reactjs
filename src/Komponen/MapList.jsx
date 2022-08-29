import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const MapList = ({ listnya }) => {
    console.log("list",listnya)
    return (
        <div >
            {listnya.map((item, index) => (
                <div key={index}>
                    <Card className='cardnya mb-5' style={{ width: '18rem', backgroundImage: 'linear-gradient(to left,#F6BE00,#F2BB66,#2E8B57)', margin: 'auto', borderRadius: '15px' }} >

                        <Card.Body>
                            <Card.Title className='idnya'>I D : {item.id}</Card.Title>
                            <Card.Text>
                                {item.text}
                            </Card.Text>
                            <Button variant="primary" className='mt-4 buttoncard' style={{ backgroundImage: 'linear-gradient(to right,#033E3E,#033E3E,#2E8B57)', border: 'none' }}>Update</Button>{'   '}
                            <Button variant="primary" className='mt-4 buttoncard' style={{ backgroundImage: 'linear-gradient(to right,#4863A0,#151B54,#008B8B)', border: 'none' }}>Delete</Button>
                        </Card.Body>
                    </Card>

                </div>


            ))}

        </div>
    )
}


