import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';


const Course = () => {
    const allCourses = useLoaderData();
    console.log(allCourses);
    return (
        <div>
            <h1 className='my-lg-4'>{allCourses.length} courses found</h1>
            <CardGroup>
            {
                allCourses.map(course => <p key={course.id}>
                    <Card style={{ width: '20rem', margin: '5px' }}>
                    <Card.Img variant="top" src={course.picture} />
                    <Card.Body>
                        <Card.Title>{course.name}</Card.Title>
                        <Card.Text>
                        <p>Instructor: {course.instructor}</p>
                        <p>Language: {course.language}</p>
                        </Card.Text>
                        <Link to={`/course-details/${course.id}`}><Button variant="primary">Enroll</Button></Link>
                    </Card.Body>
                    </Card>
                </p>)
            }
            </CardGroup>
        </div>
    );
};

export default Course;