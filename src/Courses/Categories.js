import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import categoryImage from '../Assests/categoryImage.png';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className='p-2 pb-5 rounded-3 d-flex justify-content-center pt-5'>
            <div>
            <h2 className='text-center'>Our Courses</h2>
            <div className='mt-5'>
            {
                categories.map(category => <p
                className='bg-dark bg-opacity-100 p-4 px-sm-5 rounded-pill'
                key={category.category_id}>
                    <FaArrowRight className='text-white h4'></FaArrowRight>
                    <Link className='text-decoration-none
                    m-2 h5 text-white' to={`/courses/${category.category_id}`}>{category.name}</Link>
                </p>)
            }
            <img className='w-100 mt-5 pt-5 rounded-circle d-none d-lg-block' src={categoryImage} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Categories;