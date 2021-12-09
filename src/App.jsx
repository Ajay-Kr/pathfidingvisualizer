import React from "react";
import "./App.css";
import PathfindingVisualizer from "./Components/PathfindingVisualizer/PathfindingVisualizer";
import Info from "./Components/Info/Info";
// import Tilt from "react-tilt";

function App() {
	return (
		<div className="App">
			<PathfindingVisualizer />
			{/* {showInfo(<Info />)} */}
			<Info />
		</div>
	);
}

export default App;
