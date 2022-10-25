import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../../LeftSideNav/LeftSideNav';
import CourseMenu from './CourseMenu';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[])

    return (
        <div>
            <Container>
                <Row>
                    <Col lg="3" className='bg-dark d-flex align-items-center'>
                        <div>
                        {
                            courses.map(course => <LeftSideNav
                            key={course.id}
                            course = {course}
                            ></LeftSideNav>)
                        }
                        </div>
                    </Col>
                    <Col lg="9">
                    <Row xs={1} md={2} className="g-4">
                        {
                            courses.map(course => <CourseMenu
                            key={course.id}
                            course={course}
                            ></CourseMenu>)
                        }
                        </Row>
                    </Col>
                </Row>
            </Container>
            <h2>courses are here</h2>
        </div>
    );
};

export default Courses;