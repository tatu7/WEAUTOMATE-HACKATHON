import React, { useState } from "react";

interface PainPointSelectorProps {
	onNext: (selectedPainPoint: string) => void;
	onBack: () => void;
}

export default function PainPointSelector({
	onNext,
	onBack,
}: PainPointSelectorProps) {
	const [selectedPainPoint, setSelectedPainPoint] = useState("");

	const painPoints = [
		"Lack of resources",
		"Time management issues",
		"Inefficient workflows",
		"High operational costs",
		"Difficulty adapting to technology",
	];

	const handleNext = () => {
		if (selectedPainPoint) {
			onNext(selectedPainPoint);
		}
	};

	return (
		<div className='bg-white p-6 rounded-lg shadow-md max-w-md mx-auto'>
			<h2 className='text-xl font-bold mb-4'>
				6. What are their main pain points or challenges?
			</h2>
			<div className='mb-4'>
				<select
					value={selectedPainPoint}
					onChange={(e) => setSelectedPainPoint(e.target.value)}
					className='w-full p-2 border border-gray-300 rounded'>
					<option value=''>Select a Reason</option>
					{painPoints.map((point, index) => (
						<option key={index} value={point}>
							{point}
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
					onClick={handleNext}
					disabled={!selectedPainPoint}
					className={`px-4 py-2 rounded ${
						selectedPainPoint
							? "bg-indigo-600 text-white hover:bg-indigo-700"
							: "bg-gray-300 text-gray-500 cursor-not-allowed"
					}`}>
					Next
				</button>
			</div>
		</div>
	);
}
