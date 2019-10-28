import React, { Component } from "react";

// import Jumbotron from 'react-bootstrap/Jumbotron'

//Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//Assets
import StayIn from "../Assets/stayIn640x480.jpg";


const styles = {
	backdrop: {
		backgroundColor: "green",
		minHeight: "94vh",
		paddingTop: "2%",
		// margin: "0",
		  
	},
	card: {
        width: "18rem",
        marginBottom: "5%",
		// float: "left",
		// margin: "2% 5% 5% 5%",
		// width: "100%",
	},
	col: {
		// backgroundColor: "rgba(255,255,255,.6)",
		// padding: "0% 2%",
		// margin: "2%",
		// minHeight: "54vh",
		// position:"realative",
    },
    row: {
		// backgroundColor: "rgba(255,255,255,.6)",
		padding: "0",
		margin: "0",
		// minHeight: "54vh",
		// position:"realative",
	}
};

class Portfolio extends Component {

	render(){

		return(
			<div style={ { display: this.props.display ? '' : 'none' } }>
				<div style = {styles.backdrop}>
                    <Container>
                        <Row style={styles.row}>
                            <Col xs={12} sm={6} lg={4} style={styles.col}>
                                <Card style={styles.card}>
                                    <Card.Img variant="top" src={StayIn} />
                                    <Card.Body>
                                        <Card.Text>
                                            <h2>StayIn</h2>
                                        </Card.Text>
                                    </Card.Body>
                                    {/* <Card.Footer> This goes better in the Modal
                                        <Button variant="success">Visit Project</Button>
                                        <Button variant="primary">Visit Repo</Button>
                                    </Card.Footer> */}
                                </Card>
                            </Col>
                            {/* Breakpoint */}
                            
                            <Col xs={12} sm={6} lg={4} style={styles.col}>
                                <Card style={styles.card}>
                                    <Card.Img variant="top" src={StayIn} />
                                    <Card.Body>
                                        <Card.Text>
                                            <h2>StayIn</h2>
                                        </Card.Text>
                                    </Card.Body>
                                    {/* <Card.Footer> This goes better in the Modal
                                        <Button variant="success">Visit Project</Button>
                                        <Button variant="primary">Visit Repo</Button>
                                    </Card.Footer> */}
                                </Card>
                            </Col><Col xs={12} sm={6} lg={4} style={styles.col}>
                                <Card style={styles.card}>
                                    <Card.Img variant="top" src={StayIn} />
                                    <Card.Body>
                                        <Card.Text>
                                            <h2>StayIn</h2>
                                        </Card.Text>
                                    </Card.Body>
                                    {/* <Card.Footer> This goes better in the Modal
                                        <Button variant="success">Visit Project</Button>
                                        <Button variant="primary">Visit Repo</Button>
                                    </Card.Footer> */}
                                </Card>
                            </Col><Col xs={12} sm={6} lg={4} style={styles.col}>
                                <Card style={styles.card}>
                                    <Card.Img variant="top" src={StayIn} />
                                    <Card.Body>
                                        <Card.Text>
                                            <h2>StayIn</h2>
                                        </Card.Text>
                                    </Card.Body>
                                    {/* <Card.Footer> This goes better in the Modal
                                        <Button variant="success">Visit Project</Button>
                                        <Button variant="primary">Visit Repo</Button>
                                    </Card.Footer> */}
                                </Card>
                            </Col><Col xs={12} sm={6} lg={4} style={styles.col}>
                                <Card style={styles.card}>
                                    <Card.Img variant="top" src={StayIn} />
                                    <Card.Body>
                                        <Card.Text>
                                            <h2>StayIn</h2>
                                        </Card.Text>
                                    </Card.Body>
                                    {/* <Card.Footer> This goes better in the Modal
                                        <Button variant="success">Visit Project</Button>
                                        <Button variant="primary">Visit Repo</Button>
                                    </Card.Footer> */}
                                </Card>
                            </Col><Col xs={12} sm={6} lg={4} style={styles.col}>
                                <Card style={styles.card}>
                                    <Card.Img variant="top" src={StayIn} />
                                    <Card.Body>
                                        <Card.Text>
                                            <h2>StayIn</h2>
                                        </Card.Text>
                                    </Card.Body>
                                    {/* <Card.Footer> This goes better in the Modal
                                        <Button variant="success">Visit Project</Button>
                                        <Button variant="primary">Visit Repo</Button>
                                    </Card.Footer> */}
                                </Card>
                            </Col><Col xs={12} sm={6} lg={4} style={styles.col}>
                                <Card style={styles.card}>
                                    <Card.Img variant="top" src={StayIn} />
                                    <Card.Body>
                                        <Card.Text>
                                            <h2>StayIn</h2>
                                        </Card.Text>
                                    </Card.Body>
                                    {/* <Card.Footer> This goes better in the Modal
                                        <Button variant="success">Visit Project</Button>
                                        <Button variant="primary">Visit Repo</Button>
                                    </Card.Footer> */}
                                </Card>
                            </Col><Col xs={12} sm={6} lg={4} style={styles.col}>
                                <Card style={styles.card}>
                                    <Card.Img variant="top" src={StayIn} />
                                    <Card.Body>
                                        <Card.Text>
                                            <h2>StayIn</h2>
                                        </Card.Text>
                                    </Card.Body>
                                    {/* <Card.Footer> This goes better in the Modal
                                        <Button variant="success">Visit Project</Button>
                                        <Button variant="primary">Visit Repo</Button>
                                    </Card.Footer> */}
                                </Card>
                            </Col><Col xs={12} sm={6} lg={4} style={styles.col}>
                                <Card style={styles.card}>
                                    <Card.Img variant="top" src={StayIn} />
                                    <Card.Body>
                                        <Card.Text>
                                            <h2>StayIn</h2>
                                        </Card.Text>
                                    </Card.Body>
                                    {/* <Card.Footer> This goes better in the Modal
                                        <Button variant="success">Visit Project</Button>
                                        <Button variant="primary">Visit Repo</Button>
                                    </Card.Footer> */}
                                </Card>
                            </Col><Col xs={12} sm={6} lg={4} style={styles.col}>
                                <Card style={styles.card}>
                                    <Card.Img variant="top" src={StayIn} />
                                    <Card.Body>
                                        <Card.Text>
                                            <h2>StayIn</h2>
                                        </Card.Text>
                                    </Card.Body>
                                    {/* <Card.Footer> This goes better in the Modal
                                        <Button variant="success">Visit Project</Button>
                                        <Button variant="primary">Visit Repo</Button>
                                    </Card.Footer> */}
                                </Card>
                            </Col><Col xs={12} sm={6} lg={4} style={styles.col}>
                                <Card style={styles.card}>
                                    <Card.Img variant="top" src={StayIn} />
                                    <Card.Body>
                                        <Card.Text>
                                            <h2>StayIn</h2>
                                        </Card.Text>
                                    </Card.Body>
                                    {/* <Card.Footer> This goes better in the Modal
                                        <Button variant="success">Visit Project</Button>
                                        <Button variant="primary">Visit Repo</Button>
                                    </Card.Footer> */}
                                </Card>
                            </Col><Col xs={12} sm={6} lg={4} style={styles.col}>
                                <Card style={styles.card}>
                                    <Card.Img variant="top" src={StayIn} />
                                    <Card.Body>
                                        <Card.Text>
                                            <h2>StayIn</h2>
                                        </Card.Text>
                                    </Card.Body>
                                    {/* <Card.Footer> This goes better in the Modal
                                        <Button variant="success">Visit Project</Button>
                                        <Button variant="primary">Visit Repo</Button>
                                    </Card.Footer> */}
                                </Card>
                            </Col>


                            {/* Breakpoint */}
                        </Row>
                    </Container>
				</div>
			</div>
		)
	}
}

export default Portfolio;