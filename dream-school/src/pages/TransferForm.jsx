{
	/*
A form that asks:

What's your GPA?

What degree/program are you in?

What semester are you hoping to transfer? (Fall/Spring)

Are you in the ADVANCE program?

Have you completed ENG 111 / MTH 161 / etc.? (Checkbox list)

A "Submit" button that fetches data from your custom API. 
    */
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions.json";

const TransferForm = () => {
	const navigate = useNavigate();

	const [answers, setAnswers] = useState({});

	const handleChange = (id, value) => {
		setAnswers({ ...answers, [id]: value });
	};

	const handleSubmit = () => {
		console.log("Thank you for submitting!", answers);
		//navigate to TransferResults...after submitting
		navigate("/results");
	};

	return (
		<div>
			<h1>Transfer Form Questionnaire</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit();
				}}
			>
				{questions.map((q) => (
					<div key={q.id}>
						<label>{q.question}</label> <br />
						{q.type == "number" && (
							<input
								type="number"
								placeholder={q.placeholder}
								onChange={(e) => handleChange(q.id, e.target.value)}
								required
							/>
						)}
						{q.type === "boolean" && (
							<select
								onChange={(e) => handleChange(q.id, e.target.value === "yes")}
								required
							>
								<option value="">Select</option>
								<option value="yes">Yes</option>
								<option value="no">No</option>
							</select>
						)}
						{q.type === "select" && (
							<select
								onChange={(e) => handleChange(q.id, e.target.value)}
								required
							>
								<option value="">Select</option>
								{q.options.map((opt, idx) => (
									<option key={idx} value={opt}>
										{opt}
									</option>
								))}
							</select>
						)}
					</div>
				))}
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default TransferForm;
