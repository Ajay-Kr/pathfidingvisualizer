import React from "react";
import Info from "../Info/Info";
import "./infoButton.css";

class InfoButton extends React.Component {
	constructor() {
		super();
		this.state = { show: false };
	}

	_show = (bool) => {
		this.setState({
			show: bool,
		});
	};

	render() {
		return (
			<span className="ib">
				<button
					type="button"
					className="btn info-btn"
					onClick={this._show.bind(null, true)}
				>
					<span className="btn-stack"></span>
					<span className="btn-stack"></span>
					<span className="btn-stack"></span>
				</button>
				{this.state.show && <Info />}
				{/* {this._show.bind(null, false)} */}
			</span>
		);
	}
}

export default InfoButton;
