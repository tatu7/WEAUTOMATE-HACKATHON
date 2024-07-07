import React, { useState } from "react";

interface GoalsSelectorProps {
	onFinish: (selectedGoal: string) => void;
	onBack: () => void;
}

export default function GoalsSelector({
	onFinish,
	onBack,
}: GoalsSelectorProps) {
	const [selectedGoal, setSelectedGoal] = useState("");

	const goals = [
		"Becoming more efficient",
		"Reducing costs",
		"Improving quality",
		"Expanding market reach",
		"Personal development",
	];

	const handleFinish = () => {
		if (selectedGoal) {
			onFinish(selectedGoal);
		}
	};

	return (
		<div className='bg-white p-6 rounded-lg shadow-md max-w-md mx-auto'>
			<h2 className='text-xl font-bold mb-4'>
				7. What are their goals and aspirations?
			</h2>
			<div className='mb-4'>
				<select
					value={selectedGoal}
					onChange={(e) => setSelectedGoal(e.target.value)}
					className='w-full p-2 border border-gray-300 rounded'>
					<option value=''>Select a Goal</option>
					{goals.map((goal, index) => (
						<option key={index} value={goal}>
							{goal}
						</option>
					))}
				</select>
			</div>
			<div className='flex justify-between mt-6'>
				<button
					onClick={onBack}
					className='bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300'>
					Back
				</button>
				<button
					onClick={handleFinish}
					disabled={!selectedGoal}
					className={`px-4 py-2 rounded ${
						selectedGoal
							? "bg-indigo-600 text-white hover:bg-indigo-700"
							: "bg-gray-300 text-gray-500 cursor-not-allowed"
					}`}>
					Finish
				</button>
			</div>
		</div>
	);
}
