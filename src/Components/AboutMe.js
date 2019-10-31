import React, { Component } from "react";
import Face from "../Assets/ericJobin.jpg";
import Jumbotron from 'react-bootstrap/Jumbotron'

const styles = {
	backdrop: {
		backgroundColor: "rgba(255,0,0,.0",
		// backgroundAttachment: "scroll",
		// minHeight: "93vh",
		padding: "2%",
		// margin: "0",
		  
	},
	portrait: {
		height: "40vh",
		float: "left",
		margin: "0 2% 0 0",
		// width: "100%",
	},
	jumbo: {
		backgroundColor: "rgba(255,255,255,.8)",
		padding: "5% 5%",
		margin: "0",
		minHeight: "54vh",
		// position:"realative",

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
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat placeat nemo quae, illum quam dignissimos consequuntur, accusamus quibusdam sunt praesentium, nesciunt corrupti asperiores pariatur molestias deserunt eius aliquid hic magnam. Tempore alias, hic amet, perspiciatis ea illo, soluta nesciunt magni deserunt cum adipisci? Corporis libero natus dolorum sequi, mollitia magnam ducimus eaque dolores pariatur praesentium expedita harum exercitationem ut id nam, quasi porro, tempora sunt quibusdam eos velit minus vel officiis! Dolores sunt veritatis qui magni minima vero amet adipisci? Culpa quisquam rem, error aperiam sunt reiciendis deserunt, aspernatur illo eaque dolorem veritatis? Quo velit magni eos ipsam quis error incidunt molestiae saepe corporis, pariatur eligendi minima. Itaque tempore asperiores error incidunt odit magni soluta sed expedita natus voluptatum beatae provident repellat molestiae temporibus quasi neque, magnam voluptatibus porro velit quisquam repellendus. Impedit modi, facere, officiis esse cum est cumque a veritatis labore blanditiis consectetur nesciunt porro iure. Obcaecati recusandae eum temporibus ad maiores vitae omnis pariatur, quasi quibusdam eius hic maxime nobis vero ea nihil harum cumque quam exercitationem amet necessitatibus. Distinctio, unde non. Mollitia, rerum quibusdam earum, ullam corporis aperiam, sint nulla quae voluptates quia tempora laudantium quas fugit adipisci veritatis qui exercitationem eaque labore necessitatibus
						</span>
					</Jumbotron>
				</div>
			</div>
		)
	}
}

export default AboutMe;