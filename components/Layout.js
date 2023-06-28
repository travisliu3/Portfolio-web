import MainNav from './MainNav';
import PageWrapper from './page-wrapper';
import { sidebarAtom } from '../store';
import { useAtom } from 'jotai';
import { Button, Navbar, Nav, Col, Row } from 'react-bootstrap';
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
        console.log('interval clear ' + intervalID);
        if (isWorkClicked) {
            intervalID = setInterval(flashText, waitTime);
            console.log(intervalID);
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
            console.log('interval clear ' + intervalID);
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
                            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNav} />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <div class="container-fluid">
                                    <Nav>
                                        {!isExpanded ? (<Button id="sidebarCollapse" className={sidebarActive ? 'active navbar-btn' : 'navbar-btn'} onClick={handleSidebarToggle}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </Button>) : ('')}
                                    </Nav>

                                    <Nav>
                                        <Row>
                                            <div class='col'>
                                                <Link className={`${'/' === path ? "fw-bold nav-link" : "nav-link"}`} href="/" onClick={handleNavLinkClick}>Home</Link>
                                            </div>
                                            <div class='col'>
                                                <Link className={`${'/project' === path ? "fw-bold nav-link" : "nav-link"}`} href="/project" onClick={handleNavLinkClick}>Portfolio</Link>
                                            </div>
                                            <div class='col'>
                                                <Link className={`${'/work' === path ? "fw-bold nav-link" : "nav-link"}`} href="/work" onClick={listOfSkills}>Work</Link>
                                            </div>
                                            <div class='col'>
                                                <Link className={`${'/contact' === path ? "fw-bold nav-link" : "nav-link"}`} href="contact" onClick={handleNavLinkClick}>Contact</Link>
                                            </div>
                                        </Row>
                                    </Nav>
                                </div>
                            </Navbar.Collapse>
                        </Navbar>

                        {props.children}
                    </div>
                </div>
            </PageWrapper>
        </>
    )
}
