import React from "react";
import "./info.css";
import Tilt from "react-tilt";
// import InfoButton from "../InfoButton/InfoButton";
import InfoList from "../../data/infoList";

class Info extends React.Component {
	constructor() {
		super(...arguments);
		this.state = {
			hide: false,
			currentSlideIndex: 0,
			active: false,
		};
	}

	handleChildClick() {
		this.setState({ hide: true });
	}

	previousSlide() {
		const { currentSlideIndex } = this.state;
		const shouldResetIndex = currentSlideIndex === 0;
		const index = shouldResetIndex ? 0 : currentSlideIndex - 1;
		this.active = shouldResetIndex;

		this.setState({
			currentSlideIndex: index,
		});
	}

	nextSlide() {
		const lastIndex = InfoList.length - 1;
		const { currentSlideIndex } = this.state;
		const shouldResetIndex = currentSlideIndex === lastIndex;
		const index = shouldResetIndex ? lastIndex : currentSlideIndex + 1;
		this.active = shouldResetIndex;

		this.setState({
			currentSlideIndex: index,
		});
	}

	render() {
		const { hide } = this.state;
		if (hide) {
			return null;
		}

		const toRenderA = (param) => {
			if (param) {
				return (
					<span>
						<a
							href={InfoList[this.state.currentSlideIndex].link}
							target="_blank"
							rel="noopener noreferrer"
						>
							{InfoList[this.state.currentSlideIndex].a}
						</a>
					</span>
				);
			}
		};

		return (
			<div className="i">
				<Tilt className="i-tilt" options={{ max: 8, scale: 1, reverse: false }}>
					<h2>{`0${InfoList[this.state.currentSlideIndex].id + 1}`}</h2>
					<h3>{InfoList[this.state.currentSlideIndex].heading}</h3>
					<p>{InfoList[this.state.currentSlideIndex].para}</p>
					<img src={InfoList[this.state.currentSlideIndex].img} alt="" />
					{toRenderA(InfoList[this.state.currentSlideIndex].a)}
					{/* {this.state.showMessage && <Info />} */}
					<div className="i-nav">
						<span
							onClick={() => this.previousSlide()}
							className={
								InfoList[this.state.currentSlideIndex].id !== 0 ? "active" : ""
							}
						>
							⇤
						</span>
						<Child onClick={() => this.handleChildClick()} />
						<span
							onClick={() => this.nextSlide()}
							className={
								InfoList[this.state.currentSlideIndex].id !==
								InfoList.length - 1
									? "active"
									: ""
							}
						>
							⇥
						</span>
					</div>
				</Tilt>
			</div>
		);
	}
}

class Child extends React.Component {
	render() {
		const { onClick } = this.props;
		console.log(onClick);
		return (
			<button type="button" className="btn info-btn" onClick={onClick}>
				Close
			</button>
		);
	}
}

export default Info;
