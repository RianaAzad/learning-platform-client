import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course)

    return (
        <div className='container d-flex justify-content-center pt-5'>
            <Card style={{ width: '50%' }}>
      <Card.Img variant="top" src={course.picture} />
      <Card.Body>
        <Card.Title>{course.name}</Card.Title>
        <Card.Text>
          {course.about}
        </Card.Text>
        <p>{course.rating}</p>
        <p>{course.language}</p>
        <Button variant="primary">Go somewhere</Button>
        <Link to ='/courses'><Button variant="primary">Back to All Courses</Button></Link>
        <Link to ='/checkout'><Button variant="primary">Check Out</Button></Link>
      </Card.Body>
    </Card>
        </div>
    );
};

export default CourseDetails;