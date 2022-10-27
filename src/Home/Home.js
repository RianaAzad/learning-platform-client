import React from 'react';
import home from '../../src/Assests/home.png'

const Home = () => {
    return (
        <div>
          <h1 className='text-center h1 my-5 fst-italic text-info'>Improve your knowledge with the best courses</h1>  
          <img className='w-100 rounded-pill mt-5' src={home} alt="" />
          <div className='m-lg-5 p-lg-5 border-light border rounded-5'>
          <p className='h4 py-3'>What Experience You Get?</p>
          <ul className='h5'>
            <li className='bg-dark rounded-pill text-white p-2 m-2 text-center'>Lifetime access to the course</li>
            <li className='bg-dark rounded-pill text-white p-2 m-2 text-center'>Cirtificate on completion</li>
            <li className='bg-dark rounded-pill text-white p-2 m-2 text-center'>Learn from our highly qualified instructors</li>
            <li className='bg-dark rounded-pill text-white p-2 m-2 text-center'>Different language available</li>
            <li className='bg-dark rounded-pill text-white p-2 m-2 text-center'>Online library access</li>
            <li className='bg-dark rounded-pill text-white p-2 m-2 text-center'>24/7 support</li>
            
          </ul>
          </div>
        </div>
    );
};

export default Home;<h2>this is home</h2>