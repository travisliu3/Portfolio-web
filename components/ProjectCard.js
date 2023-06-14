import Link from "next/link";
import { Card, Button } from 'react-bootstrap';
import CPrj2 from '../public/C++2.png';
import CPrj3 from '../public/C++3.png';
import web422 from '../public/web.png';
import web422S from '../public/WebService.png';
import Image from 'next/image';

export default function ProjectCard(props) {

    let image = CPrj2;
    if (props.image == 'CPrj2') {
        image = CPrj2;
    }
    else if (props.image == 'CPrj3') {
        image = CPrj3;
    }
    else if (props.image == 'web422') {
        image = web422;
    }
    else if (props.image == 'web422S') {
        image = web422S;
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Image variant="top" src={image} width={286} height={200} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.prjDes}
                    </Card.Text>
                    <Link href={props.project} target="_blank" passHref>
                        <Button variant="primary">{props.type}</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    );
}