import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions.json";
import Question from "../components/Questions";

const TransferForm = () => {
	const navigate = useNavigate();
	const [answers, setAnswers] = useState({});

	// Handle general answer updates
	const handleAnswer = (idOrUpdater, value) => {
		if (typeof idOrUpdater === 'function') {
			setAnswers((prev) => idOrUpdater(prev));
		} else {
			setAnswers((prev) => ({ ...prev, [idOrUpdater]: value }));
		}
	};

	// Handle checkbox-based questions
	const handleCheckboxChange = (id, value, credits, checked) => {
		const prevAnswers = answers[id] || [];
		if (checked) {
			setAnswers({
				...answers,
				[id]: [...prevAnswers, { course: value, credits }],
			});
		} else {
			setAnswers({
				...answers,
				[id]: prevAnswers.filter((item) => item.course !== value),
			});
		}
	};

	// Handle form submission
	const handleSubmit = () => {
		const completed = answers["completed_courses"] || [];
		const totalCredits = completed.reduce((sum, item) => sum + item.credits, 0);

		console.log("Thank you for submitting!", answers);
		console.log("Total Credits Earned:", totalCredits);

		navigate("/results", { state: { answers, totalCredits } });
	};

	return (
		<div>
			<h1>Transfer Form Questionnaire</h1>
			<form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
				{questions.map((q) => (
					<Question
						key={q.id}
						questionData={q}
						answer={answers[q.id]}
						onAnswer={handleAnswer}
						onCheckboxChange={handleCheckboxChange}
					/>
				))}
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default TransferForm;
