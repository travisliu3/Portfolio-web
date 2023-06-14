import { Button, Container, Form, Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router'
import Link from "next/link"
import { useState } from 'react'

export default function MainNav() {

    const [isWorkClicked, setisWorkClicked] = useState(true);
    const [intervalID, setIntervalID] = useState();

    function listOfSkills() {
        if (isWorkClicked) {
            setIntervalID(setInterval(flashText, 100));
        }
        setisWorkClicked(false);
    }

    function handleNavLinkClick() {
        setisWorkClicked(true);
        clearInterval(intervalID);
    }

    function wait(ms) {
        var start = new Date().getTime();
        var end = start;
        while (end < start + ms) {
            end = new Date().getTime();
        }
    }
    let skill = 0;
    let index = 0;
    let arrayofskills = ['JavaScript', 'C/C++', 'Python', 'SQL', 'Data Modelling Process', 'DSA', 'Web Development Frameworks']
    function flashText() {
        const arraySkill = Array.from(arrayofskills[skill]);
        let len = arraySkill.length;
        document.getElementById("my_skills").innerText += arraySkill[index];
        index++;
        if (index > len) {
            index = 0;
            skill++;
            wait(2000);
            document.getElementById("my_skills").innerHTML = '';
        }
        if (skill > 6) {
            skill = 0;
        }
    }

    return (
        <>
            <Navbar class="text-center bg-light">
                <br />
                <br />
                <Row>
                    <Navbar.Brand className="color={black} fs-2 fw-bold">Travis Liu</Navbar.Brand>
                </Row>
                <br />
                <br />
                <Row>
                    <Nav className="me-auto">
                        <Link href="/" passHref legacyBehavior >
                            <Nav.Link href="/" onClick={handleNavLinkClick}>Home</Nav.Link>
                        </Link>
                    </Nav>
                </Row>
                <Row>
                    <Nav className="me-auto">
                        <Link href="/about" passHref legacyBehavior >
                            <Nav.Link href="/about" onClick={handleNavLinkClick}>About</Nav.Link>
                        </Link>
                    </Nav>
                </Row>
                <Row>
                    <Nav className="me-auto">
                        <Link href="/education" passHref legacyBehavior >
                            <Nav.Link href="/education" onClick={handleNavLinkClick}>Education</Nav.Link>
                        </Link>
                    </Nav>
                </Row>
                <Row>
                    <Nav className="me-auto">
                        <Link href="/work" passHref legacyBehavior >
                            <Nav.Link href="/work" onClick={listOfSkills}>Work Experience</Nav.Link>
                        </Link>
                    </Nav>
                </Row>
                <Row>
                    <Nav className="me-auto">
                        <Link href="/project" passHref legacyBehavior >
                            <Nav.Link href="/project" onClick={handleNavLinkClick}>Projects</Nav.Link>
                        </Link>
                    </Nav>
                </Row>
                <Row>
                    <Nav className="me-auto">
                        <Link href="/contact" passHref legacyBehavior >
                            <Nav.Link href="/contact" onClick={handleNavLinkClick}>Contact me</Nav.Link>
                        </Link>
                    </Nav>
                </Row>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </Navbar>
        </>
    );
}