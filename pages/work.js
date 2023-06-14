import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useState } from 'react'

export default function Work() {

    const [isExpanded, setisExpanded] = useState(false);

    return (

        <Container className='text-center'>
            <br />
            <br />
            <Row className="gy-4">
                <h2>I have experience working in</h2>
            </Row>
            <Row className="gy-4">
                <h3 id="my_skills"></h3>
            </Row>
        </Container>

    );
}