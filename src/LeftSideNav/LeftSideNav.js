import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";

const LeftSideNav = ({course}) => {
    const {name, id} = course;
    return (
        <div className='text-white bg-dark h3 hover-primary'>
            <FaAngleRight></FaAngleRight>
           <Link to={`/course-details/${id}`}className='text-decoration-none text-white text-center'>{name}</Link>
        </div>
    );
};

export default LeftSideNav;