import React, { Component } from "react";
import PortfolioCard from "./PortfolioCard"

// import Jumbotron from 'react-bootstrap/Jumbotron'

//Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

//Assets
// import StayIn from "../Assets/stayIn640x480.jpg";

//Data
import cards from "../portfolioData.json"


const styles = {
	backdrop: {
		backgroundColor: "green",
		minHeight: "94vh",
		paddingTop: "2%",
		// margin: "0",
		  
	},
	// card: {
    //     width: "18rem",
    //     marginBottom: "5%",
		// float: "left",
		// margin: "2% 5% 5% 5%",
		// width: "100%",
	// },
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

                            {cards.map(
                                (cards, i) => (<PortfolioCard 
                                    {...cards} // Breaks out mem data for rendering each card
                                    key={i} // Gives each card a react key i
                                    />)
                            )}

                                                        
                        </Row>
                    </Container>
				</div>
			</div>
		)
	}
}

export default Portfolio;