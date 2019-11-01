import React, { Component } from "react";
import AboutMe from "../Components/AboutMe";
import Portfolio from "../Components/Portfolio";
import Resume from "../Components/Resume";

import Nav from 'react-bootstrap/Nav';

const styles = {
	backdrop: {
		minHeight: "100vh",
		backgroundImage: "linear-gradient(to bottom right, #bbbbcc, #eeeeee, #8888aa)",
	}
};

class Home extends Component {

	state = {
		showaboutme: true,
		showportfolio: false,
		showresume: false,
		// showlinks: false,
	};

	tabclick = (tab)=>{
		this.setState({ showaboutme: tab==="bio" ? true : false })
		this.setState({ showportfolio: tab==="port" ? true : false })
		this.setState({ showresume: tab==="cv" ? true : false })
		// this.setState({ showlinks: tab==="link" ? true : false })
		
		console.log(this.state)
	}

	render(){

	
		return(
			
			<div style = {styles.backdrop}>
				<Nav variant="tabs" defaultActiveKey="Bio">
					<Nav.Item onClick={() => this.tabclick('bio')}>
						<Nav.Link eventKey="Bio">Bio</Nav.Link>
					</Nav.Item>
					<Nav.Item onClick={() => this.tabclick('port')}>
						<Nav.Link eventKey="Portfolio">Portfolio</Nav.Link>
					</Nav.Item>
					<Nav.Item onClick={() => this.tabclick('cv')}>
						<Nav.Link eventKey="Resume">Resume</Nav.Link>
					</Nav.Item>
					{/* <Nav.Item onClick={() => this.tabclick('link')}>
						<Nav.Link eventKey="Links">Links</Nav.Link>
					</Nav.Item> */}
					
				</Nav>
				<AboutMe display={this.state.showaboutme} />
				<Portfolio display={this.state.showportfolio}/>
				<Resume display={this.state.showresume}/>
			</div>
		)
	}
}

export default Home;