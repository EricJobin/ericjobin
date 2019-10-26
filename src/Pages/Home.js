import React, { Component } from "react";
import AboutMe from "../Components/AboutMe";
import Nav from 'react-bootstrap/Nav';

const styles = {
	navStyle: {
		// background: "green",
		// height: "6vh",
		// padding: "0",
		// margin: "0",
		  
	},
};

class Home extends Component {

	state = {
		showaboutme: true,
		showportfolio: false,
		showresume: false,
		showlinks: false,
		// show: false,
	};

	tabclick = (tab)=>{
		this.setState({ showaboutme: tab==="bio" ? true : false })
		this.setState({ showportfolio: tab==="port" ? true : false })
		this.setState({ showresume: tab==="cv" ? true : false })
		this.setState({ showlinks: tab==="link" ? true : false })
	}

	render(){

	
		return(
			// <div style = {styles.backdrop}>
			<div>
				<Nav variant="tabs" defaultActiveKey="Bio" style = {styles.navStyle}>
					<Nav.Item onClick={() => this.tabclick('bio')}>
						<Nav.Link eventKey="Bio">Bio</Nav.Link>
					</Nav.Item>
					<Nav.Item onClick={() => this.tabclick('port')}>
						<Nav.Link eventKey="Portfolio">Portfolio</Nav.Link>
					</Nav.Item>
					<Nav.Item onClick={() => this.tabclick('cv')}>
						<Nav.Link eventKey="Resume">Resume</Nav.Link>
					</Nav.Item>
					<Nav.Item onClick={() => this.tabclick('link')}>
						<Nav.Link eventKey="Links">Links</Nav.Link>
					</Nav.Item>
				</Nav>
				<AboutMe display={this.state.showaboutme} />
				{/* <Portfolio/> */}
				{/* <Resume/> */}
				{/* <Links/> */}

			</div>
		)
	}
}

export default Home;