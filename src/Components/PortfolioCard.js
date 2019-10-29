import React, { Component } from "react";
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';

import {Button, Modal, Card, Col} from 'react-bootstrap';

const styles = {
	card: {
        width: "18rem",
        // marginBottom: "5%",
        // color: "red",
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
	box: {
		marginBottom: "5%",
	}
};

// const PortfolioCard = (props) => {
// 	return (
// 		// console.log(props),
//         <Col xs={12} sm={6} lg={4} style={styles.col}>
//             <Card style={styles.card} id={props.id}>
//                 <Card.Img variant="top" src={props.image} />
//                 <Card.Body>
//                     <h3>{props.title}</h3>
//                 </Card.Body>
//             </Card>
//         </Col>

// 	);
// }

class PortfolioCard extends Component {
    state = {
        showModal: false,
    }

    close = () => {
        this.setState({ showModal: false });
    }

    open = () => {
        this.setState({ showModal: true });
    }

    render() {
    
        return (
			console.log(this.props),
			
			<div style={styles.box}>
				{/* <Button
					// bsStyle="primary"
					// bsSize="large"
					onClick={this.open}
				>
					Launch demo modal
				</Button> */}

				<Col xs={12} sm={6} lg={4} style={styles.col}>
					<Card style={styles.card} id={this.props.id} onClick={this.open}>
						<Card.Img variant="top" src={this.props.image} />
						<Card.Body>
							<h3>{this.props.title}</h3>
						</Card.Body>
					</Card>
				</Col>




				<Modal show={this.state.showModal} onHide={this.close}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h4>Text in a modal</h4>
						<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
						{this.props.title}
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.close}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
        );
    }
};

export default PortfolioCard;
