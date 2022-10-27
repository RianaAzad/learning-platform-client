import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='text-center mt-5 p-5 bg-dark d-flex justify-content-between justify-content-lg-around text-white'>
            <div>
            <h5>Contact us</h5>
            <div className='d-flex justify-content-center'>
                <p className='p-3 h3'><FaFacebook></FaFacebook></p>
                <p className='p-3 h3'><FaTwitter></FaTwitter></p>
                <p className='p-3 h3'><FaWhatsapp></FaWhatsapp></p>
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