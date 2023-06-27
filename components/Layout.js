import MainNav from './MainNav';
import PageWrapper from './page-wrapper';
import { sidebarAtom } from '../store';
import { useAtom } from 'jotai';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap';

export default function Layout(props) {

    const [sidebarActive, setSidebarActive] = useAtom(sidebarAtom);

    const handleSidebarToggle = () => {
        setSidebarActive(!sidebarActive);
    };

    return (
        <>
            {/* <Col lg={3} className='bg-light'> */}
            <PageWrapper>
                <div class="wrapper">
                    {/* <!-- Sidebar Holder --> */}
                    <MainNav />

                    {/* <!-- Page Content Holder --> */}
                    <div id="content">

                        <nav class="navbar navbar-light bg-light">
                            <div class="container-fluid">

                                <Button id="sidebarCollapse" className={sidebarActive ? 'active navbar-btn' : 'navbar-btn'} onClick={handleSidebarToggle}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </Button>
                                <Button class="btn btn-dark d-inline-block d-lg-none ml-auto" data-toggle="collapse" data-target="#navbarSupportedContent">
                                    <i class="fas fa-align-justify"></i>
                                </Button>

                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="nav navbar-nav ml-auto d-flex">
                                        <li class="nav-item active">
                                            <a class="nav-link" href="#">Page</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Page</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Page</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Page</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </nav>

                        {props.children}
                    </div>
                </div>
            </PageWrapper>
        </>
    )
}
