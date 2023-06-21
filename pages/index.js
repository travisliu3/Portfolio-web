import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const inter = Inter({ subsets: ['latin'] })
/* <form action="https://formsubmit.co/anshgirdhar2002@gmail.com" method="POST">
                            <input type="text" class="field" name="Name" placeholder="Your Name" required="">
                            <input type="text" class="field" name="Email" placeholder="Your Email" required="">
                            <textarea placeholder="Message" name="Message" class="field"></textarea>
                            <button type="submit" class="btn b">Send</button>
                        </form> */
export default function Home() {
  return (
    <>
      <Container className='text-center'>
        <br />
        <br />
        <Row>
          <Col>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg" alt="Travis picture" className="rounded-circle w-25 p-3" />
            <br />
            <br />
            <p>Hello I'm</p>
          </Col>
        </Row>
        <Row>
          <h3>Travis Liu</h3>
        </Row>
        <br />
        <Row>
          <p>I'm thrilled to have you here, and I invite you to explore the world of technology through
            my projects and expertise. Whether you're a fellow developer seeking inspiration, a potential client looking for
            innovative solutions, or simply curious about the exciting realm of software development, you've come to the right place.</p>
          <p>Thank you for visiting my portfolio website. I invite you to delve into my projects, explore
            my technical expertise, and discover the potential for collaboration. Feel free to reach out with any inquiries or ideas –
            I'm always ready for exciting new ventures in software development.</p>
        </Row>
        <br />
        <Button type="button" variant="outline-dark" className="btn btn-floating">
          <a className="btn" href="./Travis Resume 2023.docx" download="TravisResume">My Resume</a>
        </Button>
      </Container>
      <br />
      <br />
    </>
  )
}
