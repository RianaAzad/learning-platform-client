import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to='/'>Book Shelf</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="mx-auto">
            <Link className='mx-2 text-decoration-none text-white' to='/courses'>Courses</Link>
            <Link className='mx-2 text-decoration-none text-white' to='/faq'>FAQ</Link>
            <Link className='mx-2 text-decoration-none text-white' to='/blog'>Blog</Link>
          </Nav>

          <Nav>
            <Nav.Link>More deets</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
        </div>
    );
};

export default Header;