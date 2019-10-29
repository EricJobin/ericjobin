import React, { Component } from "react";
import {Button, Modal} from 'react-bootstrap';

class ModalExample extends Component {
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
			<div style={ { display: this.props.display ? '' : 'none' } }>
				<Button
					// bsStyle="primary"
					// bsSize="large"
					onClick={this.open}
				>
					Launch demo modal
				</Button>

				<Modal show={this.state.showModal} onHide={this.close}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h4>Text in a modal</h4>
						<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
						
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.close}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
        );
    }
};

export default ModalExample;