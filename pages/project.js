import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

export default function Project() {

    return (

        <>
            <Container className='text-center'>
                <br />
                <br />
                <Row className="gy-4">
                    <h2>My Projects</h2>
                </Row>
                <br />
                <br />
                <Row className="gy-4">
                    <Col>
                        <ProjectCard project='https://github.com/travisliu3/Libraray-inventory-system' title='Libraray inventory system' type='GitHub' prjDes='Practice object-oriented C++ skills by developing a customizable
                        assembly line simulation with stations, product flow, error handling, and performance metrics.'
                            image='CPrj2'></ProjectCard>
                    </Col>
                    <Col>
                        <ProjectCard project='https://github.com/travisliu3/Line-manager' title='Line manager' type='GitHub' prjDes='Applied my C++ Object Oriented skills by developing a flexible assembly line simulation.
                    Create simulations with any number of stations to mimic real-world manufacturing processes.'
                            image='CPrj3'></ProjectCard>
                    </Col>
                    <Col>
                        <ProjectCard project='https://github.com/travisliu3/Web422-Assignmnet6' title='Web service(REST API)' type='GitHub' prjDes='Developed a robust and scalable web service using REST architecture,
                        enabling seamless communication and data exchange between client applications and server resources.'
                            image='web422S'></ProjectCard>
                    </Col>
                    <Col>
                        <ProjectCard project='https://web422assignment6-snowy.vercel.app/' title='Web Application(Next.js)' type='Link to Application' prjDes='Create a visually stunning web application to showcase artworks.
                        Display a curated collection of artworks with high-quality images.'
                            image='web422'></ProjectCard>
                    </Col>
                </Row>
            </Container>
        </>
    );
}