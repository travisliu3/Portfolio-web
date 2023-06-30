import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import PageWrapper from '../components/page-wrapper';
import { motion } from 'framer-motion';
import Link from 'next/link';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export default function Project() {

    return (

        <>
            <PageWrapper>
                <Container className='text-center'>
                    <Row className="gy-2">
                        <h2>My Projects</h2>
                        <p>Welcome to my online portfolio. I offer freelance services and specialize in software development.
                            If you need assistance in building or improving your software, I'm here to help. Let's collaborate
                            for a better solution.</p>
                        <Col className='text-center' lg={12}>
                            <Button>
                                <Link className='text-white fw-bold text-decoration-none' href={'/contact'}>
                                    <svg width="25" height="15" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path></svg>
                                    Hire Me
                                </Link>
                            </Button>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        <Row className="gy-4">
                            <Col lg={3} md={6} sm={12}>
                                <motion.div
                                    variants={item}
                                >
                                    <ProjectCard project='https://github.com/travisliu3/Libraray-inventory-system' title='Libraray inventory system' type='GitHub' prjDes='Practice object-oriented C++ skills by developing a customizable
                        assembly line simulation with stations, product flow, error handling, and performance metrics.'
                                        image='CPrj2'></ProjectCard>
                                </motion.div>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <motion.div
                                    variants={item}
                                >
                                    <ProjectCard project='https://github.com/travisliu3/Line-manager' title='Line manager' type='GitHub' prjDes='Applied my C++ Object Oriented skills by developing a flexible assembly line simulation.
                    Created simulations to mimic manufacturing processes.'
                                        image='CPrj3'
                                    ></ProjectCard>
                                </motion.div>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <motion.div
                                    variants={item}
                                >
                                    <ProjectCard project='https://github.com/travisliu3/Web422-Assignmnet6' title='Web service(REST API)' type='GitHub' prjDes='Developed a robust and scalable web service using REST architecture,
                        enabling seamless communication and data exchange between client and server.'
                                        image='web422S'></ProjectCard>
                                </motion.div>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <motion.div
                                    variants={item}
                                >
                                    <ProjectCard project='https://web422assignment6-snowy.vercel.app/' title='Web Application(Next.js)' type='Link to Application' prjDes='Created a visually stunning web application to showcase artworks.
                        Display a curated collection of artworks with high-quality images and favorites option.'
                                        image='web422'></ProjectCard>
                                </motion.div>
                            </Col>
                        </Row>
                    </motion.div>
                </Container>
            </PageWrapper>
            <br />
            <br />
        </>
    );
}