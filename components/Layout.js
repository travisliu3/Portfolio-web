import { Container, Row, Col } from 'react-bootstrap';
import MainNav from './MainNav';
import PageWrapper from './page-wrapper'

export default function Layout(props) {
    return (
        <>
            <Row>
                <Col sm={3}>
                    <PageWrapper>
                        <MainNav />
                    </PageWrapper>
                </Col>
                <Col sm={9}>
                    {props.children}
                </Col>
            </Row>
        </>
    )
}
