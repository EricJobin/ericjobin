import React from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const styles = {
	card: {
        width: "18rem",
        marginBottom: "5%",
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
    }
};

const PortfolioCard = (props) => {
	return (
		// console.log(props),
        <Col xs={12} sm={6} lg={4} style={styles.col}>
            <Card style={styles.card} id={props.id}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <h3>{props.title}</h3>
                </Card.Body>
            </Card>
        </Col>

	);
}

export default PortfolioCard;
