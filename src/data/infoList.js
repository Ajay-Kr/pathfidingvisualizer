import img0 from "../img/img.gif";
import img1 from "../img/dijkstra.gif";
import img2 from "../img/aStar.gif";
import img3 from "../img/wall.gif";
import img4 from "../img/clear.gif";
import img5 from "../img/nodeVisited.gif";

const infoList = [
	{
		id: 0,
		heading: "Path Finding Visualizer",
		para: "Pathfinding algorithms</em></b> are usually an attempt to solve the shortest path problem in graph theory. They try to find the best path given a starting point and ending point based on some predefined criteria.",
		img: img0,
	},
	{
		id: 1,
		heading: "Dijksatra",
		para: "The father of pathfinding algorithms. Guarantees the shortest path",
		img: img1,
		a: "More",
		link: "https://www.youtube.com/watch?v=GazC3A4OQTE",
	},
	{
		id: 2,
		heading: "A*",
		para: "Arguably the best pathfinding algorithm. Uses heuristics to guarantee the shortest path. Much faster than Dijkstra's Algorithm.",
		img: img2,
		a: "More",
		link: "https://www.youtube.com/watch?v=ySN5Wnu88nE",
	},
	{
		id: 3,
		heading: "Costs & Weights",
		para: "Algorithms on this application are adapted for a 2D grid, where 90 degree turns have a 'cost' of 1 and movements from a node to another have a 'cost' of 1.",
		img: "",
	},
	{
		id: 4,
		heading: "Adding Walls",
		para: "Click on the grid to add a wall. Walls are impenetrable, meaning that a path cannot cross through them.",
		img: img3,
	},
	{
		id: 5,
		heading: "Clear",
		para: "Clear Grid and Clear Walls clears the grid and the walls respectively",
		img: img4,
	},
	{
		id: 6,
		heading: "Nodes Visited",
		para: "At the end of completion of the algorithm, the total number of nodes visited in order to reach the destination pops up at the top right corner of the window. Along with it whether the search resulted in success or not is also indicated via message.",
		img: img5,
	},
];

export default infoList;
