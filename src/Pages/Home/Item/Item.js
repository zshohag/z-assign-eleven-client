import React from 'react';
import { Button, Card, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Item = ({item}) => {

    const {name, Name, image ,Description, description, id, _id ,price } = item
    
    const {isLoading}   = useAuth();
      
    if(isLoading){

        return <Spinner className="mt-5" animation="border" variant="success" />
    }

    return (
        <div>
            
             <Col  >
             
                    <Card className="bg-light" >
                      <Card.Img variant="top"  src={image} />
                      <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                         {description}
                        </Card.Text>

                        <Card.Title> Price : ${price}</Card.Title>
                      </Card.Body>
                    <div className="mb-2">
                      <Link to={`/order/${_id}`} >
  
                      <Button style={{backgroundColor:'cadetblue',border:'none' }} > Order  {name.toLowerCase()}  </Button>
                    
                      </Link> 
                    </div>
                    </Card>

              </Col>
        </div>
    );
};

export default Item;