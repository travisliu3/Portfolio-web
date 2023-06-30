import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import TravisImage from '../public/TravisImage.jpg';

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
        <Row>
          <Col>
            <Image variant="top" src={TravisImage} width={200} height={200} />
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
        <Button className='bg-secondary m-2'>
          <Link className='text-white fw-bold text-decoration-none' href={'https://docs.google.com/document/d/1JA15dv7o4OG5xqljaS52mykiDGDDmg_r/edit'} target='_blank'>
            <svg width="25" height="15" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM272 416h-160C103.2 416 96 408.8 96 400C96 391.2 103.2 384 112 384h160c8.836 0 16 7.162 16 16C288 408.8 280.8 416 272 416zM272 352h-160C103.2 352 96 344.8 96 336C96 327.2 103.2 320 112 320h160c8.836 0 16 7.162 16 16C288 344.8 280.8 352 272 352zM288 272C288 280.8 280.8 288 272 288h-160C103.2 288 96 280.8 96 272C96 263.2 103.2 256 112 256h160C280.8 256 288 263.2 288 272z"></path></svg>
            View Resume
          </Link>
        </Button>
      </Container>
      <br />
      <br />
    </>
  )
}
