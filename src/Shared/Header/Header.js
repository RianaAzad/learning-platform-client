import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../src/Assests/logo.png';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";
import { Image } from 'react-bootstrap';
import Categories from '../../Courses/Categories';
import './Header.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';



const Header = () => {
    const {user, logout} = useContext(AuthContext);

  const handleLogOut = () =>{
    logout()
    .then( () => {})
    .catch(error => console.error(error))
  }

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
     {user.displayName}
    </Tooltip>
  );

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <div className='bg-light bg-opacity-50 rounded-pill'>
        <img style={{width: '35px', margin: "5px"}} src={logo} alt="" />
        <Navbar.Brand><Link className='text-white text-decoration-none h1' to='/'>Edu.com</Link></Navbar.Brand>
        </div>
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
            <div className='d-block d-lg-flex'>
            <Nav.Link>
              {
                user?.uid? 
                <div className='d-block d-lg-flex'>
                <div><Button variant="outline-warning" className='text-white text-decoration-none' onClick={handleLogOut}>Log Out</Button></div>
                <div><Link className='text-decoration-none' to='/profile'><span className='text-white h6 ms-lg-3 py-3 pe-3 text-decoration-none'>{user?.displayName}</span></Link>
                {user?.photoURL ?
                    <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                    ><Link to='/profile'><Image
                    style={{height: '30px', margin: '0 10px 0 0'}} roundedCircle
                    src={user?.photoURL}></Image> </Link>
                    </OverlayTrigger>
                : <FaUser></FaUser>   
                }</div>
                </div>

                : 
                <>
                <Button className='me-2' variant='outline-warning'><Link className='text-white text-decoration-none' to='/login'>Login</Link></Button>
                <Button variant='outline-warning'><Link 
                className='text-white text-decoration-none'to='/register'>Register</Link></Button>
                </>
              }
                
                
                </Nav.Link>
                <Nav.Link>
                    
                </Nav.Link>
            </div>
            </Link>
            <div className='d-lg-none d-md-none'><Categories></Categories></div>
          </Nav>
        </Navbar.Collapse>
        <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
      </Container>
    </Navbar> 
        </div>
    );
};

export default Header;