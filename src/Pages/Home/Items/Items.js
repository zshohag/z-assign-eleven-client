import React, { useEffect } from 'react';
import { useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Item from '../Item/Item';

const Items = () => {

    const [items,setItems] = useState([])
    useEffect(()=>{
        fetch('https://dark-fangs-46754.herokuapp.com/foods')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
        
    const {isLoading}   = useAuth();
      
    if(isLoading){
        return <Spinner animation="border" variant="success" />
    }


    return (
        <div>
            <h2 className='mt-5' > Hungry takeout food  <span style={{backgroundColor:"cadetblue"}} className=" text-white p-1 rounded  " > items   </span>  </h2>
                

                <Row xs={1} md={4}  className="g-4 m-4 p-4 h-100 ">
                    
                 {
                   items.map(item => <Item key={item.id} item={item} > </Item>  ) 
                 }
                </Row>
            
        </div>
    );
};

export default Items;