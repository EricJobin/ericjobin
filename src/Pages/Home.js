import React, { Component } from "react";
import AboutMe from "../Components/AboutMe";

const styles = {
	backdrop: {
		background: "green",
		// height: "100vh",
		// padding: "0",
		// margin: "0",
		  
	},
};

class Home extends Component {


	render(){

		return(
			<div style = {styles.backdrop}>

				<AboutMe/>
				{/* <Portfolio/> */}
				{/* <Resume/> */}
				{/* <Links/> */}

			</div>
		)
	}
}

export default Home;