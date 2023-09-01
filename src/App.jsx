import React from "react";
import "./index.scss";
import icon from "./assets/icon.svg";

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
		</div>
	);
}

export default App;
