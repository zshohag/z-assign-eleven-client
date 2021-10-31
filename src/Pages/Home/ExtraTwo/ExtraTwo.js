import React from 'react';
import { Card,  Col, Row } from 'react-bootstrap';

const ExtraTwo = () => {
    return (
        <div  className='m-5 p-4 ' >
              <h2  className='text-dark m-5 '  >We Offer <span style={{backgroundColor:"cadetblue"}} className=" text-white p-1 rounded " >Tasty &amp; Delicious </span> Food In Healthy Way</h2>
<Row xs={1} md={3} className=" g-4 m-2 " >
        
      <Col>
      <Card>
        <div>
        <Card.Img variant="top" src="https://i.ibb.co/q0FhWKg/2.jpg" />
        </div>
        <Card.Body className='bg-light' >
          <Card.Title  >Fiambre </Card.Title>
          <Card.Text  >
          Ingredients usually include numerous sausages and cold cuts, pickled baby corn and onion, beets, pacaya flower, different cheeses, olives, chicken, and sometimes even brussels sprouts.
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        
      <Col  >
      <Card>
   <Card.Img variant="top"  src="https://i.ibb.co/njPMss9/3.jpg" />
   <Card.Body className='bg-light' >
     <Card.Title>Thai Prawn Rice</Card.Title>
     <Card.Text>
     Thai Fried Rice is an amazing and easy fried rice dish made with key ingredients like chicken, jasmine rice, vegetables, and egg, and it's richly flavored with garlic, fresh ginger, fish sauce and oyster sauce
     </Card.Text>
   </Card.Body>

 </Card>
        </Col>
        
      <Col >
      <Card>
   <Card.Img variant="top" src="https://i.ibb.co/txtM3S3/4.jpg" />
   <Card.Body className='bg-light' >
     <Card.Title>Pane Carasau</Card.Title>
     <Card.Text>
     Pane Carasau: a thin, toasted and crispy bread made of durum wheat. This kind of flour is healthier than refined white flour, because it's rich in fibers, proteins, vitamins and mineral salts.
     </Card.Text>
   </Card.Body>

 </Card>
        </Col>
      </Row>


        </div>
    );
};

export default ExtraTwo;