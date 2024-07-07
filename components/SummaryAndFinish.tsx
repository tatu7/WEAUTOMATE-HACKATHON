import React from "react";
import { useRouter } from "next/navigation";
interface SummaryAndFinishProps {
	userData: {
		introduction: boolean;
		ageRange: string;
		gender: string;
		country: any;
		region: string;
		occupation: string;
		incomeLevel: string;
		painPoint: string;
		goals: string;
	};
	onBack: () => void;
}

export default function SummaryAndFinish({ userData }: SummaryAndFinishProps) {
	const router = useRouter();
	const handleFinish = () => {
		router.push("/services");
	};

	return (
		<>
			<div className='flex flex-col text-gray-900  bg-indigo-50 p-6 xl:py-9 xl:px-6 transition-all duration-500 hover:bg-gray-100 rounded-lg shadow-md max-w-md mx-auto'>
				<h3 className='font-manrope text-2xl font-bold mb-3'>
					About your business:
				</h3>
				<ul className='mb-2 space-y-6 text-left text-lg text-gray-500'>
					<li className='flex items-center space-x-4'>
						<svg
							className='flex-shrink-0 w-6 h-6 text-indigo-600'
							viewBox='0 0 30 30'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z'
								stroke='currentColor'
								stroke-width='1.6'
								stroke-linecap='round'
								stroke-linejoin='round'></path>
						</svg>
						<span>
							<b>Age Range:</b> {userData.ageRange}
						</span>
					</li>
					<li className='flex items-center space-x-4'>
						<svg
							className='flex-shrink-0 w-6 h-6 text-indigo-600'
							viewBox='0 0 30 30'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z'
								stroke='currentColor'
								stroke-width='1.6'
								stroke-linecap='round'
								stroke-linejoin='round'></path>
						</svg>
						<span>
							<b>Gender:</b> {userData.gender}{" "}
						</span>
					</li>
					<li className='flex items-center space-x-4'>
						<svg
							className='flex-shrink-0 w-6 h-6 text-indigo-600'
							viewBox='0 0 30 30'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z'
								stroke='currentColor'
								stroke-width='1.6'
								stroke-linecap='round'
								stroke-linejoin='round'></path>
						</svg>
						<span>
							<b>Country:</b> {userData.country.country} ,{" "}
							{userData.country.region}{" "}
						</span>
					</li>
					<li className='flex items-center space-x-4'>
						<svg
							className='flex-shrink-0 w-6 h-6 text-indigo-600'
							viewBox='0 0 30 30'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z'
								stroke='currentColor'
								stroke-width='1.6'
								stroke-linecap='round'
								stroke-linejoin='round'></path>
						</svg>
						<span>
							<b>Occupation:</b> {userData.occupation}
						</span>
					</li>
					<li className='flex items-center space-x-4'>
						<svg
							className='flex-shrink-0 w-6 h-6 text-indigo-600'
							viewBox='0 0 30 30'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z'
								stroke='currentColor'
								stroke-width='1.6'
								stroke-linecap='round'
								stroke-linejoin='round'></path>
						</svg>
						<span>
							<b>Income Level: </b>
							{userData.incomeLevel}
						</span>
					</li>
					<li className='flex items-center space-x-4'>
						<svg
							className='flex-shrink-0 w-6 h-6 text-indigo-600'
							viewBox='0 0 30 30'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z'
								stroke='currentColor'
								stroke-width='1.6'
								stroke-linecap='round'
								stroke-linejoin='round'></path>
						</svg>
						<span>
							<b>Pain Point:</b> {userData.painPoint}
						</span>
					</li>
					<li className='flex items-center space-x-4'>
						<svg
							className='flex-shrink-0 w-6 h-6 text-indigo-600'
							viewBox='0 0 30 30'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z'
								stroke='currentColor'
								stroke-width='1.6'
								stroke-linecap='round'
								stroke-linejoin='round'></path>
						</svg>
						<span>
							<b>Goals: </b>
							{userData.goals}
						</span>
					</li>
				</ul>

				<label className='my-2'>Additional information</label>
				<textarea
					className='block w-full h-40 px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none resize-none leading-relaxed'
					placeholder='Enter a description...'></textarea>

				<div className='flex justify-between mt-6 w-full'>
					<button
						className='bg-indigo-600 text-white px-4 w-full py-2 rounded hover:bg-indigo-700'
						onClick={handleFinish}>
						Finish
					</button>
				</div>
			</div>
		</>
	);
}
