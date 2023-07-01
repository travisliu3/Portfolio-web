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
    const [isDark, setisDark] = useState(false);

    var waitTime = 100;

    function darkMode() {
        setisDark(dark => !dark)
    }

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
                <div class={isDark ? 'wrapper dark-mode' : 'wrapper'}>
                    {/* <!-- Sidebar Holder --> */}
                    <MainNav />

                    {/* <!-- Page Content Holder --> */}
                    <div id="content">

                        <Navbar expanded={isExpanded} bg="light" expand="lg" className="navbar navbar-light bg-light">
                            <Container>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNav} />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <br />
                                        {!isExpanded ? (
                                            <Button id="sidebarCollapse" className={sidebarActive ? 'active navbar-btn' : 'navbar-btn'} onClick={handleSidebarToggle}>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </Button>
                                        ) : (
                                            <Row>
                                                <Col>
                                                    <a href="https://www.linkedin.com/in/travis-liu-3aa989215/" target='_blank'><svg width={20} height={20} viewBox="0 0 448 512"><path fill="currentColor" d="M100.3 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.6 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path></svg></a>
                                                </Col>
                                                <Col>
                                                    <a href="https://github.com/travisliu3" target='_blank'><svg width={20} height={20} viewBox="0 0 480 512"><path fill="currentColor" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path></svg></a>
                                                </Col>
                                                <Col>
                                                    <a href="https://www.instagram.com/travisliu52/" target='_blank'><svg height={20} width={20} viewBox="-19.5036 -32.49725 169.0312 194.9835"><path fill="currentColor" d="M65.033 0C37.891 0 29.953.028 28.41.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468-4.125 4.282-6.625 9.55-7.53 15.812-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28a27.22 27.22 0 0017.75-14.53c1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624-4.3-4.108-9.56-6.608-15.829-7.512C102.338.157 101.733.027 86.193 0z" /><path fill="currentColor" d="M65.033 0C37.891 0 29.953.028 28.41.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468-4.125 4.282-6.625 9.55-7.53 15.812-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28a27.22 27.22 0 0017.75-14.53c1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624-4.3-4.108-9.56-6.608-15.829-7.512C102.338.157 101.733.027 86.193 0z" /><path d="M65.003 17c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C17.06 50.327 17 51.964 17 65s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97a5.76 5.76 0 105.76 5.758c0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C78.616 89.645 89.65 78.613 89.65 65S78.615 40.35 65.002 40.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z" fill="#fff" /></svg></a>
                                                </Col>
                                            </Row>
                                        )}
                                    </Nav>

                                    <Nav>
                                        {!isExpanded ? ('') : (
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <Link href="/" passHref legacyBehavior >
                                                    <Nav.Link className={`${'/' === path ? "fw-bold nav-link" : "nav-link"}`} href="/" onClick={handleNavLinkClick}>Home</Nav.Link>
                                                </Link>
                                            </motion.div>

                                        )}
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <Link href="/about" passHref legacyBehavior >
                                                <Nav.Link className={`${'/about' === path ? "fw-bold nav-link" : "nav-link"}`} href="/about" onClick={handleNavLinkClick}>About</Nav.Link>
                                            </Link>
                                        </motion.div>
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
                                                <Link href="/service" passHref legacyBehavior >
                                                    <Nav.Link className={`${'/service' === path ? "fw-bold nav-link" : "nav-link"}`} href="/service" onClick={handleNavLinkClick}>Services</Nav.Link>
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
                                <input onClick={darkMode} type="checkbox" id="switch" /><label id='switchlable' for="switch">Toggle</label>
                            </Container>
                        </Navbar>

                        {props.children}
                    </div>
                </div >
            </PageWrapper >
        </>
    )
}
