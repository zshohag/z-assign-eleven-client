import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import OrderArea from '../OrderArea/OrderArea';

const MyOrder = () => {

        const { user } = useAuth();

        const [orders, setOrders] = useState([]);
        useEffect( () => {
          fetch(`http://localhost:5000/orders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
        }, [user.email]);
      
        console.log(orders);

    return (
        <div>
              <h1 className="mt-3" > Total Order -   {orders.length} </h1>

              
        <Row xs={1} md={4} className="g-4 m-4 ">
                          
            {
              orders.map(order=> <OrderArea order={order} > </OrderArea> )
            }
       
        </Row>
  
    
        </div>
    );
};

export default MyOrder;