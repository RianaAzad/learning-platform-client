import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';

const Profile = () => {
    const {user} = useContext(AuthContext);

    return (
        <div className='m-5 bg-info bg-opacity-10 border-info rounded p-5'>
            <h2>Profile </h2>
            <div>
                <h4>Your Name: {user.displayName}</h4>
                <p>Email: {user.email}</p>
                <Image
                    style={{height: '80px', margin: '0 10px 0 0'}}
                    src={user?.photoURL}></Image>
            </div>
        </div>
    );
};

export default Profile;<h2>Profile here</h2>