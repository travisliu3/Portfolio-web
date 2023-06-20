import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useState } from 'react';

export default function Work() {

    const [isExpanded, setisExpanded] = useState(false);

    function toggleNav(e) {
        setisExpanded(expand => expand = !expand);
    }

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
            <br />
            <Col>
                <Card bg="light">
                    <Card.Body>
                        <h2>Co-op Technologist Senior</h2>
                        <p></p>
                        <Button variant="primary">Read More</Button>
                    </Card.Body>
                </Card>
            </Col>
            <br />
            <Col>
                <Card bg="light">
                    <Card.Body>
                        <h2>Student Lab Assistant</h2>
                        <p>As a Technical Teaching Assistant, my role was to support the professor
                            and provide invaluable assistance to students in their academic journey.
                            I was dedicated to helping students excel in their assignments, troubleshooting
                            programming challenges, and grasping complex technical concepts.</p>
                        <div className={isExpanded ? '' : 'collapse'}>
                            <p>Assisted the professor in-class: I collaborated closely with the professor during lectures,
                                actively addressing students' doubts and questions related to assignments and technical concepts.
                                I provided clear explanations, relatable examples, and insightful clarifications to ensure students
                                comprehended the subject matter effectively.</p>
                            <p>Troubleshot programming problems: I guided students in overcoming programming challenges,
                                assisting them in identifying errors, debugging code, and developing logical thinking skills.
                                Through patient guidance and problem-solving techniques, I empowered students to enhance their
                                programming abilities and build strong logical frameworks.</p>
                            <p>Enhanced student understanding: I thrived on facilitating deep learning experiences for students.
                                Whether working individually or in small groups, I utilized my creativity to simplify complex
                                technical topics. By employing relatable analogies and engaging explanations, I ensured students
                                grasped these concepts easily and found them memorable.</p>
                            <p>Improved student grades: I tracked students' progress, identified areas where they may have
                                been struggling, and developed personalized strategies tailored to their needs.
                                By providing constructive feedback on assignments and exams, I helped students
                                identify their strengths and areas for growth, resulting in improved performance.</p>
                        </div>
                        <Button className="btn btn-primary" onClick={toggleNav}>Read More</Button>
                    </Card.Body>
                </Card>
            </Col>
            <br />
            <Col>
                <Card bg="light">
                    <Card.Body>
                        <h2>Board Of Directors</h2>
                        <p></p>
                        <Button variant="primary">Read More</Button>
                    </Card.Body>
                </Card>
            </Col>
            <br />
            <Col>
                <Card bg="light">
                    <Card.Body>
                        <h2>Coding Tutor</h2>
                        <p></p>
                        <Button variant="primary">Read More</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Container>

    );
}