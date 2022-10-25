import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='d-flex justify-content-center'>
           <Form className='p-md-5 m-md-5 w-75'>
           <h1 className='my-5 text-center'>Please Register</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" className='mb-5'>
       Log In
      </Button>
      <Form.Text className="text-danger px-5">
         error
        </Form.Text>
      <br />
     
        <Form.Text className="pt-5">
         Already have an account? Please <Link to='/login'>Log in</Link>
         <br />
         
        </Form.Text>
    </Form> 
        </div>
    );
};

export default Register;