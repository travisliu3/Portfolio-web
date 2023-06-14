import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function About() {

    return (

        <Container className='text-center'>
            <br />
            <br />
            <Row>
                <h2 className='fw-bold'>About Me</h2>
            </Row>
            <br />
            <Row>
                <Col>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg" alt="Travis picture" className="rounded-circle w-25 p-3" />
                    <br />
                    <br />
                </Col>
            </Row>
            <Row>
                <p>Hello! I'm Travis Liu, a passionate and innovative software
                    developer with a deep love for turning ideas into elegant, functional,
                    and user-friendly software solutions. With 2 years of
                    experience in the field, I thrive on challenging projects that allow
                    me to utilize my technical skills and creativity to deliver exceptional results.</p>
            </Row>
            <Row>
                <p>My journey in software development began when I discovered my knack for problem-solving
                    and my fascination with technology. Since then, I have honed my skills in various
                    programming languages such as C/C++, JavaScipt, Python, frameworks, and development methodologies,
                    allowing me to adapt and excel in dynamic and fast-paced environments.</p>
            </Row>
            <Row>
                <p>As a software developer, I am dedicated to delivering high-quality code and
                    ensuring that my applications are not only efficient and scalable but also
                    meet the unique needs of the end-users. I am experienced in full-stack
                    development, handling both front-end and back-end components to create
                    seamless and robust applications.</p>
            </Row>
        </Container>

    );
}