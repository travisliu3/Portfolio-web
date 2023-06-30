import Link from "next/link";
import { Card, Button } from 'react-bootstrap';
import CPrj2 from '../public/C-2.ico';
import CPrj3 from '../public/C-3.ico';
import web422 from '../public/Web.ico';
import web422S from '../public/WebService.ico';
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
                    <Card.Text className="fs-6">
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