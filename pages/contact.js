import React from 'react';
import { Container, Row, Button, Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Email from '../lib/smtp.js';

export default function Contact() {

    // 53CE9B9542DFEC56CF5D89266B958B519D3A
    const { register, handleSubmit, formState: { errors } } = useForm();

    async function submitForm(data) {
        let ebody = `
    <p>Name: ${data.name}</p>
    <p>Email: ${data.email}</p>
    <p>Phone: ${data.phone}</p>
    <p>Message: ${data.message}</p>
    `
        Email.send({
            SecureToken: process.env.SMTP_SECURITY_TOKEN,
            To: 'travisliu3@gmail.com',
            From: "travisliu3@gmail.com",
            Subject: "Prospcective employer " + data.name,
            Body: ebody
        }).then(
            message => alert(message)
        );
    }

    return (
        <>
            <Container className='text-center'>
                <br />
                <br />
                <Row className="gy-4">
                    <h1>Contact Me</h1>
                    <p>Thank you for visiting my website. I would love to hear from you! If you have any questions,
                        feedback, or collaboration opportunities, please don't hesitate to reach out to me using the contact form below.
                        I appreciate your time and look forward to connecting with you soon.</p>
                </Row>
            </Container>
            <br />
            <br />
            <Form onSubmit={handleSubmit(submitForm)}>
                <Row>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="" name="name" {...register("name", { required: true })} />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="" name="email" {...register("email", { required: true })} />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="" name="phone" {...register("phone")} />
                            <Form.Text className="text-muted">
                                (Optional)
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control type="text" placeholder="" name="message" {...register("message", { required: true })} className={errors.q ? "is-invalid" : ""} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br />
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
}