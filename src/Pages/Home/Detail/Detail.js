import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Detail = (props) => {

    const {detailId} = useParams();  
     
    const [detail,setDetail] = useState([]) 
    
    useEffect(()=>{
        const url = `https://dark-fangs-46754.herokuapp.com/foods`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetail(data))
    },[])
    
    const [single,setSingle] =  useState({})

    useEffect( ()=> {
        
        const exactItem =  detail.find( z => z?.id == detailId )
         setSingle(exactItem)
      },[detail])

    return (
        <div>

        <div className='m-5 p-5 ' >
        <h3> Order {single?.Name} Here </h3>
        <div className="card  bg-light " >
        <div className="row g-0">
            <div className="col-md-4">
            <img src={single?.image} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8 mt-5 ">
            <div className="card-body mt-4 ">
                <h2 className="card-title mt-5 pt-2 ">{single?.name}</h2>
                <p className="card-text">{single?.description}</p>
                <h3 className="card-text"> Price - ${single?.price}</h3>
                
                <Link to="/home" >
                  <Button className='text-white me-4 ' variant="dark"> Go Back</Button>
               </Link> 

                <Link to= '/myOrder' >
                  <Button className='text-white' variant="dark"> Order Now </Button>
                  
               </Link> 

            </div>
            </div>
        </div>
        </div>


          <div>
             <h2>{detailId}</h2>
          </div>

    </div>
       
    



    </div>

      
    );
};

export default Detail;