interface ProgressBarProps {
	currentStep: number;
	totalSteps: number;
}

export default function ProgressBar({
	currentStep,
	totalSteps,
}: ProgressBarProps) {
	return (
		<div className='flex justify-center w-full mb-6 overflow-x-auto'>
			<ol className='flex items-center text-xs text-gray-900 font-medium sm:text-base'>
				{[...Array(totalSteps)].map((_, index) => (
					<li
						key={index}
						className={`flex relative px-2 sm:px-4 ${
							index + 1 <= currentStep ? "text-indigo-600" : "text-gray-900"
						} ${
							index !== totalSteps - 1
								? "after:content-[''] after:w-full after:h-0.5 after:inline-block after:absolute after:top-3 sm:after:top-5 after:left-1/2"
								: ""
						} ${
							index + 1 <= currentStep
								? "after:bg-indigo-600"
								: "after:bg-gray-200"
						}`}>
						<div className='flex flex-col items-center whitespace-nowrap z-10'>
							<span
								className={`w-6 h-6 sm:w-10 sm:h-10 rounded-full flex justify-center items-center mb-1 sm:mb-2 text-xs sm:text-sm ${
									index + 1 === currentStep
										? "bg-indigo-50 border-2 border-indigo-600 text-indigo-600"
										: index + 1 < currentStep
										? "bg-indigo-600 border-2 border-transparent text-white"
										: "bg-gray-50 border-2 border-gray-200"
								}`}>
								{index + 1}
							</span>
							<span className='text-[10px] sm:text-xs text-center'>
								{index == 0
									? "Introduction"
									: index == 1
									? "Age range"
									: index == 2
									? "What is their"
									: index == 3
									? "Country/Region"
									: index == 4
									? "Income level"
									: index == 5
									? "Challenges"
									: index == 6
									? "Goals"
									: "Finish"}
							</span>
						</div>
					</li>
				))}
			</ol>
		</div>
	);
}
