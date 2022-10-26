import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className='bg-light p-2 pb-5 rounded-3 d-flex justify-content-center pt-5'>
            <div>
            <h2>Our Courses</h2>
            <div className='mt-5'>
            {
                categories.map(category => <p
                key={category.category_id}>
                    <Link className='text-decoration-none
                    m-2 h5' to={`/courses/${category.category_id}`}>{category.name}</Link>
                </p>)
            }
            </div>
            </div>
        </div>
    );
};

export default Categories;