import React, { Component } from "react";
import PortfolioCard from "./PortfolioCard"

//Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

//Data
import cards from "../portfolioData.json"


const styles = {
	backdrop: {
			paddingTop: "3%", 
	},
};

class Portfolio extends Component {

	render(){

		return(
			<div style={ { display: this.props.display ? '' : 'none' } }>

				<div style = {styles.backdrop}>
                    <Container>
                        <Row>

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