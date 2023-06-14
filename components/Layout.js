import { Container, Row, Col } from 'react-bootstrap';
import MainNav from './MainNav';

export default function Layout(props) {
    return (
        <>
            <Row>
                <Col sm={3}>
                    <MainNav />
                </Col>
                <Col sm={9}>
                    {props.children}
                </Col>
            </Row>
        </>
    )
}
