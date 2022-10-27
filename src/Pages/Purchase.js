import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import thank from '../Assests/thank.png'

const Purchase = () => {
    return (
        <div className='text-center my-5'>
           <img className='w-100 rounded-circle mt-5' src={thank} alt="" />
           <h1 className='text-success'>Thank you for your purchase!</h1>
           <Link to='/'><Button className='my-4'>Back to Home</Button> </Link>
        </div>
    );
};

export default Purchase;