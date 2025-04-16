import React from 'react'; 
import {useNavigate} from 'react-router-dom'; 

const Home = () => {

	const navigate = useNavigate(); 

	const handleStartClick = () => {
		navigate("/transform"); //navigate to Transfer Form
	}

	return (
		<>
			<div className="home-container">
				<span className="welcome-text">
					Find your path from NOVA to your dream school!
				</span>
				<button className="start-button" onClick={handleStartClick}>Get Started</button>
			</div>
		</>
	);
};

export default Home;
