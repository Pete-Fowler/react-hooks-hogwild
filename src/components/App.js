import React, { useState } from "react";
import Nav from "./Nav";
import HogBox from './HogBox';

import hogs from "../porkers_data";

function App() {
	// const [ hogsShown, setHogsShown ] = useState(hogs);
	const [ showGreased, setShowGreased ] = useState(false);
	const [ sortedByName, setSortedByName ] = useState(false)
	const [ sortedByWeight, setSortedByWeight ] = useState(false)

	let hogsShown = hogs;

	function sortName() {
		if(sortedByName === false) {
			setHogsShown(hogsShown => hogsShown.sort((a, b) => {
				const nameA = a.name.toUpperCase();
				const nameB = b.name.toUpperCase();
				if( nameA < nameB) {
					return -1;
				}
				if(nameA > nameB) {
					return 1;
				} else {
					return 0;
				}
			}));
		} else {
			setHogsShown(hogsShown => hogs);
		}
		setSortedByName(sortedByName => !sortedByName);
	}
	
	function sortWeight() {
		if(sortedByWeight === false) {
			setHogsShown(hogsShown => hogsShown.sort((a, b) => a.weight - b.weight));
		} else {
			setHogsShown(hogsShown => hogs);
		}
		setSortedByWeight(sortedByWeight => !sortedByWeight);
	}

	function toggleGreased() {
		if(showGreased === false) {
			setHogsShown(hogsShown => hogsShown.filter(hog => hog.greased));
		} else {
			setHogsShown(hogsShown => hogs);
		}
		setShowGreased(showGreased => !showGreased);
	}

	return (
		<div className="App">
			<Nav toggleGreased={toggleGreased} showGreased={showGreased} sortName={sortName} sortWeight={sortWeight}/>
			<HogBox hogs={hogsShown} />
		</div>
	);
}

export default App;
