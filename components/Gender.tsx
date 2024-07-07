import React, { useState } from "react";

interface GenderProps {
	onNext: (selectedGender: string) => void;
	onBack: () => void;
}

export default function Gender({ onNext, onBack }: GenderProps) {
	const [selectedGender, setSelectedGender] = useState<string | null>(null);

	const handleNext = () => {
		if (selectedGender) {
			onNext(selectedGender);
		}
	};

	return (
		<div className='bg-white p-6 rounded-lg shadow-md max-w-md mx-auto w-full min-h-40'>
			<h2 className='text-xl font-bold mb-4'>2. What is their gender?</h2>
			<div className='grid grid-cols-2 gap-4 mb-4'>
				<button
					onClick={() => setSelectedGender("Male")}
					className={`bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 ${
						selectedGender === "Male" ? "bg-indigo-200" : ""
					}`}>
					Male
				</button>
				<button
					onClick={() => setSelectedGender("Female")}
					className={`bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 ${
						selectedGender === "Female" ? "bg-indigo-200" : ""
					}`}>
					Female
				</button>
			</div>
			<div className='flex justify-between mt-6'>
				<button
					onClick={onBack}
					className='bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300'>
					Back
				</button>
				<button
					onClick={handleNext}
					disabled={!selectedGender}
					className={`px-4 py-2 rounded ${
						selectedGender
							? "bg-indigo-600 text-white hover:bg-indigo-700"
							: "bg-gray-300 text-gray-500 cursor-not-allowed"
					}`}>
					Next
				</button>
			</div>
		</div>
	);
}
