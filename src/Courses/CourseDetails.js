import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowAltCircleRight, FaStar, FaSlackHash } from "react-icons/fa";

const CourseDetails = () => {
    const course = useLoaderData();
    return (
        <div>
            <Card style={{ margin: '40px 20px', border: 'none'}}>
                    <Card.Img variant="top" src={course.picture} />
                    <Card.Body>
                        <Card.Title><p className='h2'>{course.name}</p></Card.Title>
                        <Card.Text>
                        <p><i><strong>Instructor: {course.instructor}</strong></i></p>
                        <div className='d-flex justify-content-between bg-light p-3 rounded-3 my-4'>
                        <p>Language: {course.language}</p>
                        <p>Last Updated: {course.lastUpdated}</p>
                        </div>
                        <div className='d-flex justify-content-between bg-light p-3 rounded-3 my-4'>
                            <p>{course.student}</p>
                            <div className='d-flex justify-content-end text-warning'><p><FaStar></FaStar> </p>
                            <p><FaStar></FaStar> </p>
                            <p><FaStar></FaStar> </p>
                            <p><FaStar></FaStar> </p>
                            <p><FaStar></FaStar> </p></div>
                        </div>
                        <div><p className='h4'>Course Description</p>
                        {course.about}
                        </div>
                        <div className='border border-info rounded my-5 p-3 bg-info bg-opacity-10'>
                            <p className='h5 p-2 fst-italic text-decoration-underline'>What you will learn?</p>
                            {(course.learnings).map(point=> <p className='h6'>
                                <FaArrowAltCircleRight className='m-2 text-info'></FaArrowAltCircleRight>
                                {point}
                                </p>)}
                        </div>
                        <div>
                            <h5 >Requirements for the course</h5>
                            <p className='h6'>
                                <FaSlackHash className='h4 m-3'></FaSlackHash>{course.requirement}
                            </p>
                        </div>
                        </Card.Text>
                        <Link to='/checkout'><Button variant="outline-primary">Get Premium Access</Button></Link>
                    </Card.Body>
                    </Card>
        </div>
    );
};

export default CourseDetails;