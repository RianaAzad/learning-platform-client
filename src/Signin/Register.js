import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';


const Register = () => {
  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false);
  const {createUser,updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
    .then(result => {
      const user = result.user;
      form.reset();
      setError('');
      console.log(user);
      navigate('/')
      handleUpdateUserProfile(name, photoURL)
    })
    .catch(error => {
      console.error(error);
      setError(error.message);
    })
  }

  const handleUpdateUserProfile = (name, photoURL) =>{
    const profile={
      displayName: name,
      photoURL: photoURL
    }
    updateUserProfile(profile)
    .then (()=>{})
    .catch(error => console.error(error));
  }

  const handleAccepted = event =>{
    setAccepted(event.target.checked)
  }

    return (
        <div className='d-flex justify-content-center'>
            <Form onSubmit={handleSubmit} className='p-md-5 m-md-5 w-75'>
            <h1 className='my-5 text-center'>Please Register</h1>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Full Name</Form.Label>
         <Form.Control name="name" type="text" placeholder="Enter Your Full Name" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Photo URL</Form.Label>
         <Form.Control name="photoURL" type="text" placeholder="Enter Your Photo URL" />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control name="email" type="email" placeholder="Enter email" required/>
       </Form.Group>
 
       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control name="password" type="password" placeholder="Password" required/>
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" 
        onClick={handleAccepted}
        label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
      </Form.Group>
      
       <Button variant="primary" type="submit" disabled={!accepted} className='mb-5'>
        Register
       </Button>
       <Form.Text className="text-danger px-5">
          <p className='text-center'>{error}</p>
         </Form.Text>
       <br />
      
         <Form.Text className="pt-5">
          Already have an account? Please <Link to='/login'>Log In</Link>
          <br />
         </Form.Text>
     </Form> 
         </div> 
    );
};

export default Register;