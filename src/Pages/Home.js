import React, { Component } from "react";
import AboutMe from "../Components/AboutMe";

const styles = {
	backdrop: {
		// background: "green",
		// height: "100vh",
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
				<ul className="nav nav-tabs">
					<li className="nav-item" onClick={() => this.tabclick('bio')}>Bio</li> | 
					<li className="nav-item" onClick={() => this.tabclick('port')}>Portfolio</li> | 
					<li className="nav-item" onClick={() => this.tabclick('cv')}>Resume</li> | 
					<li className="nav-item" onClick={() => this.tabclick('link')}>Links</li> | 
				</ul>
				<AboutMe display={this.state.showaboutme} />
				{/* <Portfolio/> */}
				{/* <Resume/> */}
				{/* <Links/> */}

			</div>
		)
	}
}

export default Home;