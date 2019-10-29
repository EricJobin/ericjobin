import React, { Component } from "react";
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';

import {Button, Modal, Card, Col} from 'react-bootstrap';
import "./cardstyle.css";

// const styles = {

// };

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
			// console.log(this.props),
			
			<div className="box">

				<Col xs={12} sm={6} lg={4}>
					<Card id={this.props.id} onClick={this.open} className="portCard">
						<Card.Img variant="top" src={this.props.image} />
						<Card.Body>
							<h3>{this.props.title}</h3>
						</Card.Body>
					</Card>
				</Col>

				<Modal show={this.state.showModal} onHide={this.close}>
					<Modal.Header closeButton>
						<Modal.Title>{this.props.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<img alt={this.props.title} src={this.props.image} className="portimage"/>
						
						{this.props.blurb}
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
