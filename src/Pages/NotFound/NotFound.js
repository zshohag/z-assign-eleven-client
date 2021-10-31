import React from 'react';
import './Notfound.css'
const NotFound = () => {
    return (
        <div className=' text-center mt-2 pt-5' >
            <h5 className='error_message' >OOPS! PAGE NOT FOUND</h5>
            <h1 className="error"  >404</h1>
            <h2 className='error_message'  >WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS <br /> NOT FOUND </h2>

          
        </div>
    );
};

export default NotFound;