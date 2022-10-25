import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CourseMenu = ({course}) => {
    const {name, picture, about} = course;
    return (
        <div>
            <Card>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         {about}
        </Card.Text>
        <Button variant="primary">Enroll</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default CourseMenu;