import React from 'react';
import { Container, Row, Button, Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Email from '../lib/smtp.js';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Contact() {

    // 53CE9B9542DFEC56CF5D89266B958B519D3A
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    async function submitForm(data) {
        let ebody = `
    <p>Name: ${data.name}</p>
    <p>Email: ${data.email}</p>
    <p>Phone: ${data.phone}</p>
    <p>Message: ${data.message}</p>
    `
        let ethank = `
        <p>Dear ${data.name}</p>
        <br/>
        <p>I hope this message finds you well. I wanted to take a moment to express my sincerest gratitude for taking the time to fill out the contact form on my website. Your interest in considering me for potential employment opportunities means a great deal to me.</p>
        <p>I am truly honored that you have taken an interest in my skills, qualifications, and experiences. Your decision to reach out and explore the possibility of working together speaks volumes about your company and the values you uphold.</p>
        <p>I assure you that I am eagerly looking forward to the opportunity to connect with you further. I am confident that my unique blend of skills, dedication, and enthusiasm would make a valuable contribution to your organization.</p>
        <p>Once again, thank you for reaching out and expressing interest in my professional journey. I genuinely appreciate your consideration, and I am excited about the potential possibilities that lie ahead. I look forward to connecting with you soon to discuss how I can contribute to your team.</p>
        <p>With gratitude,</p>
        Travis Liu
    `
        Email.send({
            SecureToken: process.env.NEXT_PUBLIC_SMTP_SECURITY_TOKEN,
            To: data.email,
            From: "travisliu3@gmail.com",
            Subject: "Thank you for contacting Travis Liu",
            Body: ethank
        }).then(
            message => console.log('message sent')
        );
        Email.send({
            SecureToken: process.env.NEXT_PUBLIC_SMTP_SECURITY_TOKEN,
            To: 'travisliu3@gmail.com',
            From: "travisliu3@gmail.com",
            Subject: "Prospcective employer " + data.name,
            Body: ebody
        }).then(
            message => {
                alert('Thank you for contacting, I will reply atmost in 2 bussiness days.');
                router.push('/');;
            }
        );
    }

    return (
        <>
            <Container className='text-center'>
                <Row className="gy-4">
                    <h1>Contact Me</h1>
                    <p>Thank you for visiting my website. I would love to hear from you! If you have any questions,
                        feedback, or collaboration opportunities, please don't hesitate to reach out to me using the
                        contact form below or through my social media links or send me an email to
                        <a class="text-decoration-none" href="mailto:#"> travisliu3@gmail.com</a></p>
                    <p>I appreciate your time and look forward to connecting with you soon.</p>
                </Row>
            </Container>
            <br />
            <br />
            <Form onSubmit={handleSubmit(submitForm)}>
                <Row className='text-center'>
                    <h3 className='fw-bold'>Get In Touch</h3>
                </Row>
                <br />
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
                        <p className='fs-6'>
                            <svg width={20} height={20} viewBox="0 0 512 512"><path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"></path></svg>
                            &nbsp; Curious about the contents of each package? Explore the&nbsp;
                            <Link className='text-decoration-none' href={'/service'}>
                                Services & Pricing
                            </Link>
                            &nbsp;page for detailed information on what each package includes.
                        </p>
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
            <br />
            <br />
        </>
    );
}