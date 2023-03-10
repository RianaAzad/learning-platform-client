import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';


const Login = () => {

    const [error, setError] = useState(false);

    const {providerLogin, signIn} = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const GoogleProvider = new GoogleAuthProvider();
    const GitProvider = new GithubAuthProvider();

const handleGoogleSignIn = () =>{
    providerLogin(GoogleProvider)
    .then(result => {
        const user = result.user;
        setError('');
        navigate(from,{replace:true});
    })
    .catch(error => console.error(error))
}
const handleGitHubSignIn = () =>{
    providerLogin(GitProvider)
    .then(result => {
        const user = result.user;
        setError('');
        navigate(from,{replace:true});
    })
    .catch(error => console.error(error))
}

const handleSubmit = event =>{
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  signIn(email, password)
  .then(result =>{
    const user = result.user;
    console.log(user)
    form.reset();
    setError('');
    navigate(from,{replace:true});
  })
  .catch(error => {
    console.error(error);
    setError(error.message);
  })
}


    return (
       <div>
         <div className='d-flex justify-content-center'>
            
            <Form onSubmit={handleSubmit} className='p-md-5 m-md-5 w-75'>
            <h1 className='my-5 text-center'>Please Log In</h1>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control name="email" type="email" placeholder="Enter email" required/>
       </Form.Group>
 
       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control name="password" type="password" placeholder="Password" required/>
       </Form.Group>
       <Button variant="primary" type="submit" className='mb-5'>
        Log In
       </Button>
       <Form.Text className="text-danger">
          <p className='text-center'>{error}</p>
         </Form.Text>
       <br />
      
         <Form.Text className="pt-5">
          Don't have an account? Please <Link to='/register'>Register</Link>
          <br />
         </Form.Text>
     </Form> 
         </div>
         <div className='d-flex justify-content-center'>
        <div>
        <h6 className='text-center'>OR</h6>
          <hr></hr>
        <span onClick={handleGoogleSignIn}  className='h2 text-danger p-4'><FaGoogle></FaGoogle></span>
        <span onClick={handleGitHubSignIn} className='h2 text-dark p-4'><FaGithub></FaGithub></span>
        </div>
         </div>
       </div>
    );
};

export default Login;