{
	/*
Displays:

Whether the student is eligible to transfer to the selected dream school (e.g., VT).

Requirements they've met and still need to meet.

GPA comparison chart or "You're on track!" message.

Maybe "Suggested next steps" like meeting a counselor or taking specific courses.
    */
}

import { useLocation } from "react-router-dom";

const Results = () => {
	const location = useLocation();
	const { answers, totalCredits } = location.state || {};

	return (
		<div>
			<h1>Results</h1>
			<p>Total Credits: {totalCredits}</p>
			
		</div>
	);
};

export default Results;

