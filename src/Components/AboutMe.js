import React, { Component } from "react";
import Face from "../Assets/ericJobin.jpg";
import Jumbotron from 'react-bootstrap/Jumbotron'

const styles = {
	backdrop: {
		backgroundColor: "rgba(255,0,0,.0",
		padding: "2%",
	},
	portrait: {
		height: "40vh",
		float: "left",
		margin: "0 2% 0 0",
	},
	jumbo: {
		backgroundColor: "rgba(255,255,255,.8)",
		padding: "5% 5%",
		margin: "0",
		minHeight: "54vh",
	}
};

class AboutMe extends Component {

	render(){

		return(
			<div style={ { display: this.props.display ? '' : 'none' } }>
				<div style = {styles.backdrop}>
					<Jumbotron style = {styles.jumbo}>
						<span>
							<img className="rounded-circle" alt="Eric Jobin" src={Face} style={styles.portrait}/>
						</span>
						<span> 
							Certified Full-Stack Web Developer looking for a position to further expand web development skills and knowledge. Transitioning from a career in the electronics/telecommunications industry in a detail-oriented and compliance focused position in Quality Assurance.<br/>
							
						</span>
					</Jumbotron>
				</div>
			</div>
		)
	}
}

export default AboutMe;