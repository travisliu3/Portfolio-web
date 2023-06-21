import { Container, Row, Col } from 'react-bootstrap';
import MainNav from './MainNav';
import PageWrapper from './page-wrapper'

export default function Layout(props) {
    return (
        <>
            <Row>
                <Col lg={3} className='bg-light'>
                    <PageWrapper>
                        <MainNav />
                    </PageWrapper>
                </Col>
                <Col lg={9} className='bg-secondary'>
                    {props.children}
                </Col>
            </Row>
        </>
    )
}
