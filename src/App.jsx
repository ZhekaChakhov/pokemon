import React from "react";
import "./index.scss";
import icon from "./assets/icon.svg";
import Chip from "@mui/material/Chip";

function App() {
	return (
		<div className="App">
			<div className="header">
				<div className="title">ПОКЕМОНЫ API</div>
				<div className="info">
					<img src={icon} />
					<div className="text">Нажмите на нужного Покемона</div>
				</div>
			</div>
			<div className="main">
				<div className="chips">
					<div className="upper-chips">
						<Chip label="bulbasaur" className="Chip" />
						<Chip label="ivysaur" className="Chip" />
						<Chip label="venusaur" className="Chip" />
					</div>
					<div className="lower-chips">
						<Chip label="charmander" className="Chip" />
						<Chip label="charizard" className="Chip" />
						<Chip label="weedle" className="Chip" />
					</div>
				</div>
				<div className="def"></div>
			</div>
		</div>
	);
}

export default App;
