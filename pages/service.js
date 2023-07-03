import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function Education() {

    return (

        <>
            <Container className='text-center'>
                <Row className="gy-2">
                    <h2>Services & Pricing</h2>
                    <p>I have over 2 years of web and mobile software development experience. Take a look at my
                        <Link class='text-decoration-none' href='/project'> project portfolio </Link>
                        and <Link class='text-decoration-none' target='-blank' href='https://docs.google.com/document/d/1JA15dv7o4OG5xqljaS52mykiDGDDmg_r/edit'> online resume </Link>
                        to learn more about my skills.</p>
                    <p>I am currently available for freelance work and
                        can provide custom quotes or fixed pricing packages for your project. Contact me to discuss your
                        development needs.</p>
                    <Col className='text-center' lg={12}>
                        <Button>
                            <Link className='text-white fw-bold text-decoration-none' href={'/contact'}>
                                <svg width="25" height="15" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path></svg>
                                Hire Me
                            </Link>
                        </Button>
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <h3>Service Packages</h3>
                </Row>
                <br />
                <Row>
                    <table class="table-bordered">
                        <thead>
                            <tr>
                                <th></th>
                                <th><h5 className='text-primary'>Basic</h5></th>
                                <th><h5 className='text-primary'>Standard</h5></th>
                                <th><h5 className='text-primary'>Premium</h5></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='fw-bold'>Price</td>
                                <td className='fs-2 fw-bold'>$100</td>
                                <td className='fs-2 fw-bold'>$250</td>
                                <td className='fs-2 fw-bold'>$800</td>
                            </tr>
                            <tr>
                                <td className='fw-bold'>Details</td>
                                <td>Small web application with attractive and responsive design.</td>
                                <td>Medium sized web application with both front-end and back-end set-up with database set-up.</td>
                                <td>Large web site with content upload interface for the user and API service set-up.</td>
                            </tr>
                            <tr>
                                <td className='fw-bold'>Responsive Design</td>
                                <td><svg height={20} width={20} viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg></td>
                                <td><svg height={20} width={20} viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg></td>
                                <td><svg height={20} width={20} viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg></td>
                            </tr>
                            <tr>
                                <td className='fw-bold'>Content Upload</td>
                                <td><svg height={13} width={13} viewBox="0 0 460.775 460.775"><path fill="currentColor" d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" /></svg></td>
                                <td><svg height={13} width={13} viewBox="0 0 460.775 460.775"><path fill="currentColor" d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" /></svg></td>
                                <td><svg height={20} width={20} viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg></td>
                            </tr>
                            <tr>
                                <td className='fw-bold'>Database</td>
                                <td><svg height={13} width={13} viewBox="0 0 460.775 460.775"><path fill="currentColor" d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" /></svg></td>
                                <td><svg height={20} width={20} viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg></td>
                                <td><svg height={20} width={20} viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg></td>
                            </tr>
                            <tr>
                                <td className='fw-bold'>Number of Pages</td>
                                <td>3</td>
                                <td>7</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td className='fw-bold'>Revisions</td>
                                <td>1</td>
                                <td>3</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td className='fw-bold'>Delivery Time</td>
                                <td>3 days</td>
                                <td>7 days</td>
                                <td>24 days</td>
                            </tr>
                            <tr>
                                <td className='fw-bold'>Quick Delivery</td>
                                <td>1 day($130)</td>
                                <td>4 days($300)</td>
                                <td>14 days($1000)</td>
                            </tr>
                        </tbody>
                    </table>
                </Row>
                <br />
                <br />
            </Container>
        </>

    );
}
