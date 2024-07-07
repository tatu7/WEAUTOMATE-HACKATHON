import React, { useState } from "react";

interface CountryRegionSelectorProps {
	onNext: (data: { country: string; region: string }) => void;
	onBack: () => void;
}

export default function CountryRegionSelector({
	onNext,
	onBack,
}: CountryRegionSelectorProps) {
	const [country, setCountry] = useState("");
	const [region, setRegion] = useState("");

	const handleNext = () => {
		if (country && region) {
			onNext({ country, region });
		}
	};

	return (
		<div className='bg-white p-6 rounded-lg shadow-md max-w-md mx-auto min-w-10'>
			<h2 className='text-xl font-bold mb-4'>
				1. Where do they live (country/region)?
			</h2>
			<div className='mb-4'>
				<select
					id='default_select_select'
					value={country}
					onChange={(e) => setCountry(e.target.value)}
					className='h-auto border mb-4 border-gray-300 text-gray-600 text-base rounded-lg block w-full p-2.5  focus:outline-none'>
					<option selected>Choose a country</option>
					<option value='US'>United States</option>
					<option value='CA'>Canada</option>
					<option value='FR'>France</option>
					<option value='DE'>Germany</option>
				</select>
				<select
					id='default_select_select'
					value={region}
					onChange={(e) => setRegion(e.target.value)}
					className='h-auto border border-gray-300 text-gray-600 text-base rounded-lg block w-full p-2.5  focus:outline-none'>
					<option value=''>Region</option>
					<option value='California'>California</option>
					<option value='Ontario'>Ontario</option>
					<option value='London'>London</option>
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
					disabled={!country || !region}
					className={`px-4 py-2 rounded ${
						country && region
							? "bg-indigo-600 text-white hover:bg-indigo-700"
							: "bg-gray-300 text-gray-500 cursor-not-allowed"
					}`}>
					Next
				</button>
			</div>
		</div>
	);
}
