import React, { useState } from "react";

interface IncomeLevelSelectorProps {
	onNext: (selectedIncomeLevel: string) => void;
	onBack: () => void;
}

export default function IncomeLevelSelector({
	onNext,
	onBack,
}: IncomeLevelSelectorProps) {
	const [selectedIncomeLevel, setSelectedIncomeLevel] = useState("");

	const incomeLevels = [
		"$30,000 ~ $50,000/year",
		"$50,000 ~ $60,000/year",
		"$60,000 ~ $80,000/year",
		"$80,000 ~ $100,000/year",
		"$100,000+ /year",
	];

	const handleNext = () => {
		if (selectedIncomeLevel) {
			onNext(selectedIncomeLevel);
		}
	};

	return (
		<div className='bg-white p-6 rounded-lg shadow-md max-w-md mx-auto w-full min-h-40'>
			<h2 className='text-xl font-bold mb-4'>5. What is their income level?</h2>
			<div className='grid grid-cols-1 gap-4 mb-4'>
				{incomeLevels.map((level, index) => (
					<button
						key={index}
						onClick={() => setSelectedIncomeLevel(level)}
						className={`text-left w-full px-4 py-2 rounded-lg border-2 text-lg font-medium ${
							selectedIncomeLevel === level
								? "border-blue-500 bg-blue-100"
								: "border-gray-300 bg-white"
						}`}>
						{level}
					</button>
				))}
			</div>
			<div className='flex justify-between mt-6'>
				<button
					onClick={onBack}
					className='bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300'>
					Back
				</button>
				<button
					onClick={handleNext}
					disabled={!selectedIncomeLevel}
					className={`px-4 py-2 rounded ${
						selectedIncomeLevel
							? "bg-indigo-600 text-white hover:bg-indigo-700"
							: "bg-gray-300 text-gray-500 cursor-not-allowed"
					}`}>
					Next
				</button>
			</div>
		</div>
	);
}
