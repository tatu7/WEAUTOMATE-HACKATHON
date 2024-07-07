import React, { useState } from "react";

interface AgeRangeProps {
	onNext: (selectedAge: string) => void;
	onBack: () => void;
}

export default function AgeRange({ onNext, onBack }: AgeRangeProps) {
	const [selectedAge, setSelectedAge] = useState<string | null>(null);

	const ageRanges = [
		"Under 20",
		"20 - 29",
		"30 - 39",
		"40 - 49",
		"50 - 59",
		"60+",
	];

	const handleNext = () => {
		if (selectedAge) {
			onNext(selectedAge); // Bu qadamda tanlangan yosh oraliqni onNext funktsiyasi orqali jo'natamiz
		}
	};

	return (
		<div className='bg-white p-6 rounded-lg shadow-md max-w-md mx-auto'>
			<h2 className='text-xl font-bold mb-4'>
				1. What is the age range of your ideal client?
			</h2>

			<div className='-ml-2 grid grid-cols-3 grid-rows-2 gap-4 text-center text-lg font-medium mb-4'>
				{ageRanges.map((range, index) => (
					<div
						key={index}
						onClick={() => setSelectedAge(range)}
						className={`cursor-pointer whitespace-nowrap rounded-lg border-2 px-6 py-2 text-center text-lg ${
							selectedAge === range
								? "border-electric-300 bg-indigo-200"
								: "border-gray-300 bg-white "
						}`}>
						{range}
					</div>
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
					disabled={!selectedAge}
					className={`px-4 py-2 rounded ${
						selectedAge
							? "bg-indigo-600 text-white hover:bg-indigo-700"
							: "bg-gray-300 text-gray-500 cursor-not-allowed"
					}`}>
					Next
				</button>
			</div>
		</div>
	);
}
