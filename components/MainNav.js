import { Button, Container, Form, Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap';
import Link from "next/link";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname, usePathsme } from 'next/navigation';

export default function MainNav() {
    const path = usePathname();
    const [isWorkClicked, setisWorkClicked] = useState(true);
    var intervalID;
    var timeoutID;
    var waitTime = 100;

    function listOfSkills() {
        if (isWorkClicked) {
            intervalID = setInterval(flashText, waitTime);
        }
        setisWorkClicked(false);
    }

    function handleNavLinkClick() {
        skill = 0;
        index = 0;
        setisWorkClicked(true);
        clearInterval(intervalID);
        clearTimeout(timeoutID);
    }

    let skill = 0;
    let index = 0;
    let arrayofskills = ['JavaScript', 'C/C++', 'Python', 'SQL', 'Data Modelling Process', 'DSA', 'Web Development Frameworks', 'Object-Orientation']
    function flashText() {
        const arraySkill = arrayofskills[skill];
        let len = arraySkill.length;
        if (arraySkill[index] && document.getElementById("my_skills")) {
            document.getElementById("my_skills").innerHTML += arraySkill[index];
        }
        else {
            return
        }
        index++;
        if (index > len - 1) {
            index = 0;
            skill++;
            clearInterval(intervalID);
            setTimeout(() => {
                if (document.getElementById("my_skills")) {
                    document.getElementById("my_skills").innerHTML = '&nbsp';
                }
                else {
                    return
                }
                setisWorkClicked(true);
                listOfSkills();
            }, 2000);
        }
        if (skill > arrayofskills.length - 1) {
            skill = 0;
        }
    }

    return (
        <>
            <Navbar class="text-center bg-light">
                <br />
                <br />
                <Row>
                    <Navbar.Brand className="fs-2 fw-bold">Travis Liu</Navbar.Brand>
                </Row>
                <br />
                <br />
                <Row>
                    <Nav className={`${'/' === path ? "fw-bold" : ""}`}>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                        >
                            <Link href="/" passHref legacyBehavior >
                                <Nav.Link href="/" onClick={handleNavLinkClick}>Home</Nav.Link>
                            </Link>
                        </motion.div>
                    </Nav>
                </Row>
                <Row>
                    <Nav className={`${'/about' === path ? "fw-bold" : ""}`}>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                        >
                            <Link href="/about" passHref legacyBehavior >
                                <Nav.Link href="/about" onClick={handleNavLinkClick}>About</Nav.Link>
                            </Link>
                        </motion.div>
                    </Nav>
                </Row>
                <Row>
                    <Nav className={`${'/education' === path ? "fw-bold" : ""}`}>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                        >
                            <Link href="/education" passHref legacyBehavior >
                                <Nav.Link href="/education" onClick={handleNavLinkClick}>Education</Nav.Link>
                            </Link>
                        </motion.div>
                    </Nav>
                </Row>
                <Row>
                    <Nav className={`${'/work' === path ? "fw-bold" : ""}`}>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                        >
                            <Link href="/work" passHref legacyBehavior >
                                <Nav.Link href="/work" onClick={listOfSkills}>Work Experience</Nav.Link>
                            </Link>
                        </motion.div>
                    </Nav>
                </Row>
                <Row>
                    <Nav className={`${'/project' === path ? "fw-bold" : ""}`}>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                        >
                            <Link href="/project" passHref legacyBehavior >
                                <Nav.Link href="/project" onClick={handleNavLinkClick}>Projects</Nav.Link>
                            </Link>
                        </motion.div>
                    </Nav>
                </Row>
                <Row>
                    <Nav className={`${'/contact' === path ? "fw-bold" : ""}`}>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                        >
                            <Link href="/contact" passHref legacyBehavior >
                                <Nav.Link href="/contact" onClick={handleNavLinkClick}>Contact me</Nav.Link>
                            </Link>
                        </motion.div>
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
            </Navbar >
        </>
    );
}