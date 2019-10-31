import React, { Component } from "react";
import {Container, Row, Card, Col} from 'react-bootstrap';

class Name extends Component {


	render(){

		return(
			<div style={ { display: this.props.display ? '' : 'none' } }>

				<div>
                    <Container>
                        <Row>
                            <Col xs={12} lg={8}>
                                
                                <h1>Eric Jobin</h1>
                                <p>Certified Full-Stack Web Developer looking for a position to further expand web development skills and knowledge. Transitioning from a career in the electronics/telecommunications industry in a detail-oriented and compliance focused position in Quality Assurance.</p>
                                
                            </Col>
                            <Col xs={12} lg={4}>
                                <h4>Contact Info</h4>
                                26 Olive Ave #508<br/>
                                Toronto ON, M2N 7G7<br/>
                                (647) 888-7985<br/>
                                ejobin@gmail.com<br/>
                                <a target="_blank" href="https://github.com/EricJobin">GitHub</a><br/>
                                <a target="_blank" href="https://www.linkedin.com/in/eric-jobin-021887145/">LinkedIn</a><br/>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} lg={8}>
                                <h3>EXPERIENCE</h3>
                                {/* <h4>Full Stack Web Development Course</h4>
                                <b>2019</b>
                                <p>Created web projects using technologies including HTML, CSS, JavaScript, jQuery, Node.js, Express, MySQL, MongoDB, Mongoose, & React. Created team projects, tracking items and issues using Kanban, performed frequent Scrum sessions while managing code through GitHub.</p> */}

                                <h3>Quality Assurance and Test Set Maintenance</h3>
                                <b>iQor AMS - 2005 - 2017</b>
                                <p>Performed product and process audits to ensure compliance with customer requirements and standards such as ISO 9001, TL9000, and ANSI S20.20. Responsible for investigating and resolving customer issues. Developed & documented internal procedures and processes. Implemented and administrated Corrective & Preventative Action programs. Conducted training sessions on ESD, soldering and Quality programs. Ensured calibration & maintenance of test equipment.</p>

                                <h4>Repair and Refurbishment Technician</h4>
                                <b>Precision Communication Services - 2002 - 2005</b>
                                <p>Testing, troubleshooting and repair of electronic assemblies. Expert solderer and knowledgeable in the use of test equipment and schematics.</p>


                            </Col>

                            <Col xs={12} lg={4}>
                                <h4>Development Skills</h4>
                                <uo>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                    <li>Node.js</li>
                                    <li>Express</li>
                                    <li>MySQL</li>
                                    <li>MongoDB</li>
                                    <li>Mongoose</li>
                                    <li>React</li>
                                    <li>GitHub</li>
                                    <li>Kanban</li>
                                    <li>Scrum</li>
                                </uo>
                            </Col>


                        </Row>
                        <Row>
                            <Col xs={12} lg={8}>
                                <h3>EDUCATION</h3>
                                <ul>
                                    <li>
                                        <b>Full Stack Web Development</b><br/>
                                        University of Toronto - 2019
                                    </li>
                                    <li>
                                        <b>Electronics Engineering Technologist Diploma</b><br/>
                                        RCC College of Technology - 2002
                                    </li>
                                </ul>
                                <h3>PROJECTS</h3>

                                <a target="_blank" href="https://thawing-tundra-48363.herokuapp.com/"><b>Dream Shift</b></a><br/>
                                <a target="_blank" href="https://github.com/EricJobin/dreamshift">Vist Project Repository</a><br/>
                                <p>Full Stack MERN application designed to make filling shifts easy and simple. A manager can post a shift using the app and their employees will be notified and are able to respond with their availability to take the shift.</p>

                                <a target="_blank" href="https://limitless-ocean-73138.herokuapp.com"><b>Stay In</b></a><br/>
                                <a target="_blank" href="https://github.com/EricJobin/HomeChef">Vist Project Repository</a><br/>
                                <p>A utility to link private chefs with new clients. A user can find chefs in their area and book an appointment to come cook in their home. Backend uses MySQL to store customers and chefs, and uses JavaScript to match and display bookings.</p>

                                <a target="_blank" href="https://ericjobin.github.io/Emergency-Recipe"><b>Emergency Recipe</b></a><br/>
                                <a target="_blank" href="https://github.com/EricJobin/Emergency-Recipe">Vist Project Repository</a><br/>
                                <p>Enter the name of the ingredient you’d like to use and this application will provide you with recipe ideas along with nutritional information, a shopping list, and locations of nearby grocery stores.</p>

                            </Col>

                            <Col xs={12} lg={4}>
                                <h4>Transferable Skills</h4>
                                <uo>
                                    <li><b>Excellent verbal & written communication skills</b> – Conducted group training sessions and wrote internal processes and documentation.</li>

                                    <li><b>Excels at identifying problems and finding solutions</b> – Led Root Cause Analysis investigations into customer complaints and internal audit findings.</li>

                                    <li><b>Able to quickly parse new information and skills</b> – Responsible for understanding multiple standards and developing and implementing compliance programs to meet their requirements.</li>
                                </uo>

                                <hr/>

                                <h4>Addtional Roles</h4>
                                <uo>
                                    <li>Joint Health and Safety Committee -Worker Co-Chair conducted workplace inspections & incident investigations</li>

                                    <li>Social Committee - Helped plan and run workplace events to boost morale</li>

                                    <li>First Aider & CPR</li>

                                    <li>Lean Six Sigma Training</li>
                                </uo>
                                
                            </Col> 
                        </Row>
                    </Container>
				</div>
			</div>
		)
	}
}

export default Name;