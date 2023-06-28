import MainNav from './MainNav';
import PageWrapper from './page-wrapper';
import { sidebarAtom } from '../store';
import { useAtom } from 'jotai';
import { motion } from 'framer-motion';
import { Button, Navbar, Nav, Col, Row, Container } from 'react-bootstrap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

let intervalID = 0;
var timeoutID;

export default function Layout(props) {

    const [sidebarActive, setSidebarActive] = useAtom(sidebarAtom);
    const path = usePathname();
    const [isWorkClicked, setisWorkClicked] = useState(true);
    const [isExpanded, setisExpanded] = useState(false);

    var waitTime = 100;

    function listOfSkills() {
        clearInterval(intervalID);
        if (isWorkClicked) {
            intervalID = setInterval(flashText, waitTime);
        }
        setisWorkClicked(false);
    }

    function handleNavLinkClick() {
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
            timeoutID = setTimeout(() => {
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
    const handleSidebarToggle = () => {
        setSidebarActive(!sidebarActive);
    };

    function toggleNav(e) {
        setisExpanded(expand => expand = !expand);
    }

    return (
        <>
            {/* <Col lg={3} className='bg-light'> */}
            <PageWrapper>
                <div class="wrapper">
                    {/* <!-- Sidebar Holder --> */}
                    <MainNav />

                    {/* <!-- Page Content Holder --> */}
                    <div id="content">

                        <Navbar expanded={isExpanded} bg="light" expand="lg" className="navbar navbar-light bg-light">
                            <Container>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNav} />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        {!isExpanded ? (
                                            <Button id="sidebarCollapse" className={sidebarActive ? 'active navbar-btn' : 'navbar-btn'} onClick={handleSidebarToggle}>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </Button>
                                        ) : ('')}
                                    </Nav>

                                    <Nav>
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <Link href="/" passHref legacyBehavior >
                                                <Nav.Link className={`${'/' === path ? "fw-bold nav-link" : "nav-link"}`} href="/" onClick={handleNavLinkClick}>Home</Nav.Link>
                                            </Link>
                                        </motion.div>
                                        {!isExpanded ? ('') : (
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <Link href="/about" passHref legacyBehavior >
                                                    <Nav.Link className={`${'/about' === path ? "fw-bold nav-link" : "nav-link"}`} href="/about" onClick={handleNavLinkClick}>About</Nav.Link>
                                                </Link>
                                            </motion.div>

                                        )}
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <Link href="/project" passHref legacyBehavior >
                                                <Nav.Link className={`${'/project' === path ? "fw-bold nav-link" : "nav-link"}`} href="/project" onClick={handleNavLinkClick}>Portfolio</Nav.Link>
                                            </Link>
                                        </motion.div>
                                        {!isExpanded ? ('') : (
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <Link href="/about" passHref legacyBehavior >
                                                    <Nav.Link className={`${'/education' === path ? "fw-bold nav-link" : "nav-link"}`} href="/education" onClick={handleNavLinkClick}>Education</Nav.Link>
                                                </Link>
                                            </motion.div>

                                        )}
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <Link href="/work" passHref legacyBehavior >
                                                <Nav.Link className={`${'/work' === path ? "fw-bold nav-link" : "nav-link"}`} href="/work" onClick={listOfSkills}>Work</Nav.Link>
                                            </Link>
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <Link href="/contact" passHref legacyBehavior >
                                                <Nav.Link className={`${'/contact' === path ? "fw-bold nav-link" : "nav-link"}`} href="/contact" onClick={handleNavLinkClick}>Contact</Nav.Link>
                                            </Link>
                                        </motion.div>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>

                        {props.children}
                    </div>
                </div >
            </PageWrapper >
        </>
    )
}
