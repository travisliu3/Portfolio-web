import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useState } from 'react';
import { motion } from 'framer-motion';

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

var read1 = 'More';
var read2 = 'More';
var read3 = 'More';
var read4 = 'More';

export default function Work() {

    const [isExpanded1, setisExpanded1] = useState(false);
    const [isExpanded2, setisExpanded2] = useState(false);
    const [isExpanded3, setisExpanded3] = useState(false);
    const [isExpanded4, setisExpanded4] = useState(false);

    function toggleNav1(e) {
        if (read1 == 'More') {
            read1 = 'Less';
        } else {
            read1 = 'More';
        }
        setisExpanded1(expand => expand = !expand);
    }

    function toggleNav2(e) {
        if (read2 == 'More') {
            read2 = 'Less';
        } else {
            read2 = 'More';
        }
        setisExpanded2(expand => expand = !expand);
    }

    function toggleNav3(e) {
        if (read3 == 'More') {
            read3 = 'Less';
        } else {
            read3 = 'More';
        }
        setisExpanded3(expand => expand = !expand);
    }

    function toggleNav4(e) {
        if (read4 == 'More') {
            read4 = 'Less';
        } else {
            read4 = 'More';
        }
        setisExpanded4(expand => expand = !expand);
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
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <Col>
                    <motion.div
                        variants={item}
                    >
                        <Card bg="light">
                            <Card.Body>
                                <h2>Co-op Technologist Senior</h2>
                                <p>As a web developer specializing in Angular, small projects, and REST API, my primary
                                    responsibility was to design, develop, and maintain web applications with a focus
                                    on front-end development using Angular framework.</p>
                                <div className={isExpanded1 ? '' : 'collapse'}>
                                    <p>I developed responsive and interactive user interfaces, ensuring seamless user
                                        experiences across different devices and browsers. I leveraged my proficiency in
                                        HTML, CSS, and JavaScript to create well-structured and semantic code, adhering
                                        to industry best practices and coding standards.</p>
                                    <p>As a web developer, I stayed abreast of the latest trends and advancements in web
                                        development, particularly within the Angular ecosystem. I continuously expanded
                                        my knowledge and skills through self-learning and professional development opportunities.</p>
                                    <p>Furthermore, I integrated RESTful APIs into the web applications, establishing secure
                                        and efficient communication between the front-end and backend systems. I implemented
                                        API endpoints, handled data retrieval and manipulation, and ensured proper error
                                        handling and validation.</p>
                                    <p>Lastly, I documented the development process, including code documentation,
                                        architectural diagrams, and technical specifications. This ensured the maintainability
                                        and scalability of the web applications, allowing for future enhancements and updates.</p>
                                </div>
                                <Button className="btn btn-primary" onClick={toggleNav1}>Read {read1}</Button>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </Col>
                <br />
                <Col>
                    <motion.div
                        variants={item}
                    >
                        <Card bg="light">
                            <Card.Body>
                                <h2>Student Lab Assistant</h2>
                                <p>As a Technical Teaching Assistant, my role was to support the professor
                                    and provide invaluable assistance to students in their academic journey.</p>
                                <div className={isExpanded2 ? '' : 'collapse'}>
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
                                <Button className="btn btn-primary" onClick={toggleNav2}>Read {read2}</Button>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </Col>
                <br />
                <Col>
                    <motion.div
                        variants={item}
                    >
                        <Card bg="light">
                            <Card.Body>
                                <h2>Board Of Directors</h2>
                                <p>As a member of the Board of Directors for the Seneca Student Federation (SSF), my primary
                                    responsibility was to provide strategic direction and governance oversight for the organization.</p>
                                <div className={isExpanded3 ? '' : 'collapse'}>
                                    <p>My duties included attending regular board meetings, where I actively participated in discussions
                                        and decision-making processes. I collaborated with other board members to establish and review
                                        policies, as well as develop long-term plans and initiatives that aligned with the SSF's vision.</p>
                                    <p>During my tenure, I contributed to the formulation of the SSF's annual budget and financial
                                        plans, ensuring responsible financial management and transparency. I actively engaged in
                                        monitoring the organization's financial performance, reviewing financial statements, and
                                        implementing necessary controls and procedures to safeguard the SSF's assets.</p>
                                    <p>Another essential aspect of my role was advocating for the needs and concerns of
                                        the student community. I actively sought feedback from students, organizing regular
                                        town hall meetings and open forums to gather input and address their concerns. I
                                        served as a liaison between the SSF and the broader student body, representing their
                                        interests and communicating their perspectives to the board.</p>
                                    <p>Furthermore, I actively participated in various committees, task forces,
                                        and working groups, collaborating with other stakeholders to develop and implement
                                        initiatives that enhanced the student experience. This included working closely
                                        with the SSF executive team, providing guidance and support in executing their
                                        responsibilities and representing the SSF at external events and meetings.</p>
                                </div>
                                <Button className="btn btn-primary" onClick={toggleNav3}>Read {read3}</Button>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </Col>
                <br />
                <Col>
                    <motion.div
                        variants={item}
                    >
                        <Card bg="light">
                            <Card.Body>
                                <h2>Coding Tutor</h2>
                                <p>As a coding tutor, I was responsible for guiding and mentoring individuals
                                    in their journey to learn and improve their coding skills.</p>
                                <div className={isExpanded4 ? '' : 'collapse'}>
                                    <p>In this role, my primary objective was to facilitate a conducive learning
                                        environment and foster a positive and encouraging atmosphere. I achieved
                                        this by tailoring my teaching methods to meet the unique needs and learning
                                        styles of each student. I utilized my expertise in coding languages and concepts
                                        to deliver clear and concise explanations, ensuring that students grasped the
                                        fundamental principles.</p>
                                    <p>During the tutoring sessions, I conducted hands-on coding exercises, projects,
                                        and challenges to reinforce the theoretical knowledge. I encouraged students
                                        to actively engage in problem-solving and critical thinking, enabling them to
                                        develop their analytical skills and become more self-sufficient coders.</p>
                                </div>
                                <Button className="btn btn-primary" onClick={toggleNav4}>Read {read4}</Button>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </Col>
            </motion.div>
            <br />
            <br />
        </Container>

    );
}