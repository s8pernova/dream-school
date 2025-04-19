import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	const handleStartClick = () => {
		navigate("/transform"); //navigate to Transfer Form
	};

	return (
		<>
			<div className="home-container border">
				<div className="home-container-left border">
					<span className="welcome-text">
						Find your path from NOVA to your <i>dream school!</i>
					</span>
					<button className="default-button" onClick={handleStartClick}>
						Get Started
					</button>
				</div>
				<img
					className="home-image"
					src="./src/assets/happy-students.jpg"
					alt="Dream School"
				/>
			</div>
		</>
	);
};

export default Home;
