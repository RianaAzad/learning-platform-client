import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../src/logo.png';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Header = () => {
    const {user} = useContext(AuthContext);
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
            <Link className='mx-2 text-decoration-none text-white' to='/courses'>Courses</Link>
            <Link className='mx-2 text-decoration-none text-white' to='/faq'>FAQ</Link>
            <Link className='mx-2 text-decoration-none text-white' to='/blog'>Blog</Link>
          </Nav>

          <Nav>
            <Button variant='light mx-2 circular' size="sm"><Link to= '/login'>Log In</Link></Button>
            <Button variant='light' size="sm"><Link to= '/login'>Register</Link></Button>
            <Link>
            <div>
                <p>{user?.displayName}</p>
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