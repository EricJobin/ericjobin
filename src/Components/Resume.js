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
                                
                                Eric Jobin
                                Certified Full-Stack Web Developer looking for a position to further expand web development skills and knowledge. Transitioning from a career in the electronics/telecommunications industry in a detail-oriented and compliance focused position in Quality Assurance.
                                EXPERIENCE

                                Full Stack Web Development Course
                                2019
                                Created web projects using technologies including HTML, CSS, JavaScript, jQuery, Node.js, Express, MySQL, MongoDB, Mongoose, & React. Created team projects, tracking items and issues using Kanban, performed frequent Scrum sessions while managing code through GitHub.

                                Quality Assurance and Test Set Maintenance
                                iQor AMS - 2005 - 2017
                                Performed product and process audits to ensure compliance with customer requirements and standards such as ISO 9001, TL9000, and ANSI S20.20. Responsible for investigating and resolving customer issues. Developed & documented internal procedures and processes. Implemented and administrated Corrective & Preventative Action programs. Conducted training sessions on ESD, soldering and Quality programs. Ensured calibration & maintenance of test equipment.

                                Repair and Refurbishment Technician
                                Precision Communication Services - 2002 - 2005
                                Testing, troubleshooting and repair of electronic assemblies. Expert solderer and knowledgeable in the use of test equipment and schematics.


                                EDUCATION

                                Full Stack Web Development
                                University of Toronto - 2019
                                Electronics Engineering Technologist Diploma
                                RCC College of Technology - 2002


                                PROJECTS

                                Dream Shift - https://thawing-tundra-48363.herokuapp.com/
                                Full Stack MERN application designed to make filling shifts easy and simple. A manager can post a shift using the app and their employees will be notified and are able to respond with their availability to take the shift.

                                Stay In - https://limitless-ocean-73138.herokuapp.com/
                                A utility to link private chefs with new clients. A user can find chefs in their area and book an appointment to come cook in their home. Backend uses MySQL to store customers and chefs, and uses JavaScript to match and display bookings.

                                Emergency Recipe - https://ericjobin.github.io/group-project-1/
                                Enter the name of the ingredient you’d like to use and this application will provide you with recipe ideas along with nutritional information, a shopping list, and locations of nearby grocery stores.

                            </Col>

                            <Col xs={12} lg={4}>
                                SKILLS

                                Excellent verbal & written communication skills – Conducted group training sessions and wrote internal processes and documentation.

                                Excels at identifying problems and finding solutions – Led Root Cause Analysis investigations into customer complaints and internal audit findings.

                                Able to quickly parse new information and skills – Responsible for understanding multiple standards and developing and implementing compliance programs to meet their requirements.



                                OTHER HIGHLIGHTS

                                Joint Health and Safety Committee -Worker Co-Chair conducted workplace inspections & incident investigations

                                Social Committee - Helped plan and run workplace events to boost morale

                                First Aider & CPR

                                Lean Six Sigma Training

                                
                            </Col> 
                        </Row>
                    </Container>
				</div>
			</div>
		)
	}
}

export default Name;