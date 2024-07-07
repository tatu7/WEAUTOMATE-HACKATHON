import React, { useState } from "react";

interface OccupationSelectorProps {
	onNext: (selectedOccupation: string) => void;
	onBack: () => void;
}

export default function Occupation({
	onNext,
	onBack,
}: OccupationSelectorProps) {
	const [selectedOccupation, setSelectedOccupation] = useState("");

	const handleNext = () => {
		if (selectedOccupation) {
			onNext(selectedOccupation);
		}
	};

	return (
		<div className='bg-white p-6 rounded-lg shadow-md max-w-md mx-auto min-w-10'>
			<h2 className='text-xl font-bold mb-4'>
				4. What is their occupation or industry?
			</h2>
			<div className='mb-4'>
				<select
					value={selectedOccupation}
					onChange={(e) => setSelectedOccupation(e.target.value)}
					className='w-full p-2 border border-gray-300 rounded'>
					<option value=''>Select Occupation</option>
					<option value='Software Engineer'>Software Engineer</option>
					<option value='Doctor'>Doctor</option>
					<option value='Teacher'>Teacher</option>
					<option value='Artist'>Artist</option>
					<option value='Other'>Other</option>
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
					disabled={!selectedOccupation}
					className={`px-4 py-2 rounded ${
						selectedOccupation
							? "bg-indigo-600 text-white hover:bg-indigo-700"
							: "bg-gray-300 text-gray-500 cursor-not-allowed"
					}`}>
					Next
				</button>
			</div>
		</div>
	);
}
