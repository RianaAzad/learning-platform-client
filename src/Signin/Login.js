import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {

    const {providerLogin} = useContext(AuthContext)

    const GoogleProvider = new GoogleAuthProvider();

const handleGoogleSignIn = () =>{
    providerLogin(GoogleProvider)
    .then(result => {
        const user = result.user;
        console.log(user);
    })
    .catch(error => console.error(error))
}


    return (
       <div>
         <div className='d-flex justify-content-center'>
            
            <Form className='p-md-5 m-md-5 w-75'>
            <h1 className='my-5 text-center'>Please Log In</h1>
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
          Don't have an account? Please <Link to='/register'>Register</Link>
          <br />
         </Form.Text>
     </Form> 
         </div>
         <div className='d-flex justify-content-center'>
         <ButtonGroup vertical>
      <Button onClick={handleGoogleSignIn} variant="outline-dark mb-3"><FaGoogle></FaGoogle> Sign in with Google</Button>
      <Button variant="outline-dark"><FaGithub></FaGithub> Sign in with Github</Button>
    </ButtonGroup>
         </div>
       </div>
    );
};

export default Login;