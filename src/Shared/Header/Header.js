import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../src/logo.png';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";
import { Image } from 'react-bootstrap';



const Header = () => {
    const {user, logout} = useContext(AuthContext);

  const handleLogOut = () =>{
    logout()
    .then( () => {})
    .catch(error => console.error(error))
  }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <img style={{width: '30px', margin: "10px"}} src={logo} alt="" />
        <Navbar.Brand><Link className='text-white text-decoration-none h1' to='/'>Book Shelf</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="mx-auto">
          <Link className='mx-2 text-decoration-none text-white' to='/'>Home</Link>
            <Link className='mx-2 text-decoration-none text-white' to='/courses/4'>Courses</Link>
            <Link className='mx-2 text-decoration-none text-white' to='/faq'>FAQ</Link>
            <Link className='mx-2 text-decoration-none text-white' to='/blog'>Blog</Link>
          </Nav>

          <Nav>
            <Link>
            <div className='d-flex'>
            <Nav.Link>
              {
                user?.uid? 
                <>
                <span>{user?.displayName}</span>
                <Button variant="light" onClick={handleLogOut}>Log Out</Button>
                </>

                : 
                <>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                </>
              }
                
                
                </Nav.Link>
                <Nav.Link>
                    {user?.photoURL ?
                <Image
                style={{height: '30px'}} roundedCircle
                src={user?.photoURL}></Image> 
                : <FaUser></FaUser>   
                }
                </Nav.Link>
            </div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
        </div>
    );
};

export default Header;