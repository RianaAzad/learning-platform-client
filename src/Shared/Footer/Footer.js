import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-center mt-5 p-5 bg-dark d-flex justify-content-between justify-content-lg-around text-white'>
            <div>
            <h5>Follow Us</h5>
            <div className='d-flex justify-content-center'>
                <a href='https://www.facebook.com' className='p-3 h3 text-warning'><FaFacebook></FaFacebook></a>
                <a href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D' className='p-3 h3 text-warning'><FaTwitter></FaTwitter></a>
                <a href='https://www.whatsapp.com/' className='p-3 h3 text-warning'><FaWhatsapp></FaWhatsapp></a>
            </div>
            </div>
            <div className='text-white text-start'>
                <h5>Address</h5>
                <p>House: 3; Road: 5</p>
                <p>Sector: 32</p>
                <p>Uttara, Dhaka-1230</p>
            </div>
        </div>
    );
};

export default Footer;

