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

                                <button type="button" id="sidebarCollapse" class={sidebarActive ? 'active navbar-btn' : 'navbar-btn'} onClick={handleSidebarToggle}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>

                            </div>
                        </nav>

                        {props.children}
                    </div>
                </div>
            </PageWrapper>
        </>
    )
}
