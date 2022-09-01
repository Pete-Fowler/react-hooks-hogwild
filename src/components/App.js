import React, { useState } from "react";
import Nav from "./Nav";
import HogBox from './HogBox';

import hogs from "../porkers_data";

function App() {
	const [ showGreased, setShowGreased ] = useState(false);
	const [ sortedBy, setSortedBy ] = useState(null)

	function sortName() {
		setSortedBy(sortedBy => 'name');
	}
	
	function sortWeight() {
		setSortedBy(sortedBy => 'weight');
	}

	function toggleGreased() {
		setShowGreased(showGreased => !showGreased);
	}

const hogsShown = hogs
	.filter(hog => showGreased ? hog.greased : hog)
	.sort((a, b) => {
		if(sortedBy === 'weight') {
			return a.weight - b.weight;
		} else if(sortedBy === 'name') {
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
		}
})

	return (
		<div className="App">
			<Nav toggleGreased={toggleGreased} showGreased={showGreased} sortName={sortName} sortWeight={sortWeight}/>
			<HogBox hogs={hogsShown} />
		</div>
	);
}

export default App;
