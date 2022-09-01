import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({ toggleGreased, showGreased, sortName, sortWeight }) => {
	
	const greasedText = showGreased ? 'Show all hogs' : 'Greased only!';
	
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<button onClick={toggleGreased}>{greasedText}</button>
			<button onClick={sortName}>Sort by Name</button>
			<button onClick={sortWeight}>Sort by Weight</button>
		</div>
	);
};

export default Nav;
