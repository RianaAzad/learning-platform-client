import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Categories from '../Courses/Categories';
import Footer from '../Shared/Footer/Footer';

import Header from '../Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="4" className='d-none d-lg-block d-md-flex justify-content-center'>
                      <Categories></Categories>
                    </Col>
                    <Col lg="8">
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Row>
                    <Footer></Footer>
            </Row>
        </div>
    );
};

export default Main;