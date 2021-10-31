import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import initializeAuthentication from '../Firebase/firebase.init';
import { useHistory, useLocation } from 'react-router';


initializeAuthentication()

const Login = () => {


    const {signInUsingGoogle } =  useAuth()
    const location = useLocation()

    const history = useHistory()
    const redirect_url =   location.state?.from || '/home' 

    const handleGoogleLogin =() => {
        
      signInUsingGoogle()
      .then(result => {
        
        history.push(redirect_url)
     })

    }

   return (

        <div>
        <div class="container mt-3 ">
        <div class="row">
        <div class="col-lg-4 col-md-4 ">
        <img className="img-fluid" src='https://image.freepik.com/free-vector/account-concept-illustration_114360-399.jpg' alt="" />
        </div>
        <div class="col-lg-8 col-md-8 ">
        <div >

        </div>
       
         <div className="mt-5 " >
         <Button onClick={handleGoogleLogin} style={{backgroundColor:'cadetblue'}} className="mt-5" variant="dark"> <i class="fab fa-google"></i> Google SignIn</Button>
         </div>


    </div>
    </div>
  </div>
  


        </div>
       
    );
};

export default Login;