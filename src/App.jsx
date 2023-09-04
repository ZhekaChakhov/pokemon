import React from "react";
import "./index.scss";
import icon from "./assets/icon.svg";
import Chip from "@mui/material/Chip";
import axios from "axios";

function ucFirst(str) {
	if (!str) return str;

	return str[0].toUpperCase() + str.slice(1);
}

function App() {
	const [data, setData] = React.useState();
	const [name, setName] = React.useState();
	const [number, setNumber] = React.useState(1);
	const [height, setHeight] = React.useState();
	const [attack, setAttack] = React.useState();
	const [moves, setMoves] = React.useState();

	const URL = `https://pokeapi.co/api/v2/pokemon/${number}`;

	React.useEffect(() => {
		axios
			.get(URL)
			.then((response) => {
				// console.log(response.data);
				setData(response.data);
				setName(response.data.name);
				setHeight(response.data.height);
				setAttack(response.data.stats[1].base_stat);
				setMoves(response.data.moves.length);
			})
			.catch((err) => {
				window.alert(err);
			});
	}, [URL]);

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
					<Chip
						label="bulbasaur"
						className="Chip"
						onClick={() => {
							setNumber(1);
						}}
					/>
					<Chip
						label="ivysaur"
						className="Chip"
						onClick={() => {
							setNumber(2);
						}}
					/>
					<Chip
						label="venusaur"
						className="Chip"
						onClick={() => {
							setNumber(3);
						}}
					/>
					<Chip
						label="charmander"
						className="Chip"
						onClick={() => {
							setNumber(4);
						}}
					/>
					<Chip
						label="charmeleon"
						className="Chip"
						onClick={() => {
							setNumber(5);
						}}
					/>
					<Chip
						label="charizard"
						className="Chip"
						onClick={() => {
							setNumber(6);
						}}
					/>
					<Chip
						label="squirtle"
						className="Chip"
						onClick={() => {
							setNumber(7);
						}}
					/>
					<Chip
						label="wartortle"
						className="Chip"
						onClick={() => {
							setNumber(8);
						}}
					/>
					<Chip
						label="blastoise"
						className="Chip"
						onClick={() => {
							setNumber(9);
						}}
					/>
					<Chip
						label="caterpie"
						className="Chip last"
						onClick={() => {
							setNumber(10);
						}}
					/>
				</div>
				<div className="def">
					<div className="def-header">
						<h1>{ucFirst(name)}</h1>
					</div>
					<div className="img-container">
						<img src={data ? data.sprites.front_shiny : "<p>Loading...</p>"} />
					</div>
					<div className="text">
						<ul>
							<li>Снялся в {moves} сериях</li>
							<li>id: {number}</li>
							<li>height: {height}</li>
							<li>attack: {attack}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
