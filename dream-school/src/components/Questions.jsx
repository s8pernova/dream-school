import React from "react";

const Question = ({ questionData, onAnswer, onCheckboxChange }) => {
	const { id, question, type, placeholder, options } = questionData;

	const handleChange = (e) => {
		let value = e.target.value;
		if (type === "boolean") value = value === "yes";
		onAnswer(id, value);
	};

	const handleCheckboxChange = (e, value, credits) => {
		onCheckboxChange(id, value, credits, e.target.checked);
	};

	return (
		<div className="question-block">
			<label className="question-label">{question}</label> <br />
			{type === "number" && (
				<input
					type="number"
					placeholder={placeholder}
					onChange={handleChange}
					className="question-input"
				/>
			)}
			{type === "boolean" && (
				<select className="question-select" onChange={handleChange}>
					<option value="">Select</option>
					<option value="yes">Yes</option>
					<option value="no">No</option>
				</select>
			)}
			{type === "select" && (
				<select className="question-select" onChange={handleChange}>
					<option value="">Select</option>
					{options.map((opt, idx) => (
						<option key={idx} value={opt}>
							{opt}
						</option>
					))}
				</select>
			)}
			{type === "checkbox" && (
				<div className="checkbox-group">
					{options.map((opt, idx) => (
						<label
							key={idx}
							className="checkbox-option"
							style={{ display: "block" }}
						>
							<input
								type="checkbox"
								value={opt.label}
								onChange={(e) =>
									handleCheckboxChange(e, opt.label, opt.credits)
								}
							/>
							{opt.label} ({opt.credits} credits)
						</label>
					))}
				</div>
			)}
		</div>
	);
};

export default Question;
