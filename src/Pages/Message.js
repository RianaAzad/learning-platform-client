import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';


const Message = () => {
    const navigate = useNavigate();

    const notify = () => {
        navigate('/');
        alert('Your Message is submitted!')
    }

    return (
        <div className='my-5'>
            <h2 className='text-center my-5'>Message US!</h2>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your Message</Form.Label>
        <div className='input-group input-group-lg'>
  <input type="text" className="form-control" />
</div>
      </Form.Group>
      
      <Button onClick={notify} variant="outline-warning" type="submit">
       <Link className='text-decoration-none'>Submit</Link>
      </Button>
    </Form>
        </div>
    );
};

export default Message;