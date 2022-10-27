import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import categoryImage from '../Assests/categoryImage.png';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('https://education-platform-server.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className='p-lg-2 pb-lg-5 rounded-3 d-flex justify-content-end pt-lg-5 p-sm-1 justify-content-lg-center'>
            <div>
            <h2 className='text-center'>Our Courses</h2>
            <div className='mt-lg-5'>
            {
                categories.map(category => <p
                className='bg-dark bg-opacity-100 p-lg-4 px-sm-5 rounded-pill'
                key={category.category_id}>
                    <FaArrowRight className='text-white lg-h4'></FaArrowRight>
                    <Link className='text-decoration-none
                    m-2 lg-h5 text-white' to={`/courses/${category.category_id}`}>{category.name}</Link>
                </p>)
            }
            <img className='w-100 mt-5 pt-5 rounded-circle d-none d-lg-block' src={categoryImage} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Categories;