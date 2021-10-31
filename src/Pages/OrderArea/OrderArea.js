import React from 'react';
import { Card, Col } from 'react-bootstrap';

const OrderArea = ({order}) => {

    const {productName,productImage,productPrice,productDescription} = order


    return (


        <div >

                <Col>
                <Card>
                <Card.Img variant="top" className='img-thumbnail' src={productImage} />
                <Card.Body className=' bg-light' >
                    <Card.Title> Order Item: {productName}</Card.Title>
                    <Card.Title>Item Price : {productPrice}</Card.Title>
                    <Card.Text>
                      {productDescription}
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>
                            
               
        </div>
    );
};

export default OrderArea;