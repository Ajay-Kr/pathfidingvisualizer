import React from "react";
import "./header.css";
import GitRibbon from "../GitRibbon/GitRibbon";
import Image from "../../img/img.gif";

const Header = () => {
	return (
		<div className="h">
			<nav className="h-navbar">
				<header className="h-header">
					<h1>
						<img src={Image} className="h1-img" alt="" />
						Path<span className="h1-stretch">F</span>inding{" "}
						<span className="h1-span">Visualizer</span>
					</h1>
					<GitRibbon />
				</header>
			</nav>
		</div>
	);
};

export default Header;
