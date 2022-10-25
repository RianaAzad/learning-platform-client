import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const CourseMenu = ({course}) => {

    const {name, picture, about, id} = course;
    return (
        <div>
            <Card>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         {about}
        </Card.Text>
        <Link to={`/course-details/${id}`}><Button variant="primary">Enroll</Button></Link>
      </Card.Body>
    </Card>
        </div>
    );
};

export default CourseMenu;