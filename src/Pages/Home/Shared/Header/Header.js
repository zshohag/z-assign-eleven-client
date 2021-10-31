import React from 'react';
import { Button, Container, Nav, Navbar  } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../../hooks/useAuth';
import './Header.css'



const Header = () => {

      const {user,logOut} = useAuth() 

    return (

         <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top"  >
            <Container   >
            <Navbar.Brand to="/home"> <div className="nav " > Hungry  Takeout  </div> </Navbar.Brand>
            <Navbar.Toggle />
           
            <Navbar.Collapse className="justify-content-end text ">
            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
             <Nav.Link as={HashLink} to="/myOrders">My Order</Nav.Link>
             <Nav.Link as={HashLink} to="/addANewItem">Add A New Item </Nav.Link>
             <Nav.Link as={HashLink} to="/about">About Us </Nav.Link>
               

          { 
            user?.email ? 
            <Button onClick={logOut}  variant="dark"><i class="fas fa-sign-out-alt"></i> Log Out</Button>
            :
           <Nav.Link  className='text-white bg-dark' as={HashLink} to="/login"><i class="fas fa-sign-in-alt"></i>  Login</Nav.Link>
           
           }
           <br />
           {   user?.email ? 
          
          <Navbar.Text className="ms-1" >
            Signed in as -  <span className='bg-white text-dark rounded m-1 p-2 ' > {user?.displayName }  </span>
          </Navbar.Text> 
            : <p></p>
          } 
              
    </Navbar.Collapse>
           
            </Container>
    </Navbar>       
        </>
    );
};

export default Header;