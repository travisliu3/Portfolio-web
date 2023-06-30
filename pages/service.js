import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function Education() {

    return (

        <>
            <Container className='text-center'>
                <Row className="gy-2">
                    <h2>Services & Pricing</h2>
                    <p>I have over 2 years of web and mobile software development experience. Take a look at my
                        <Link class='text-decoration-none' href='/project'> project portfolio </Link>
                        and <Link class='text-decoration-none' target='-blank' href='https://docs.google.com/document/d/1JA15dv7o4OG5xqljaS52mykiDGDDmg_r/edit'> online resume </Link>
                        to learn more about my skills.</p>
                    <p>I am currently available for freelance work and
                        can provide custom quotes or fixed pricing packages for your project. Contact me to discuss your
                        development needs.</p>
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
                <Row>
                    <h3>Service Packages</h3>
                </Row>
            </Container>
        </>

    );
}