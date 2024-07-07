"use client";
import React, { useState } from "react";
import Introduction from "../components/Introduction";
import AgeRange from "../components/AgeRange";
import Gender from "../components/Gender";
import ProgressBar from "../components/ProgressBar";
import Country from "../components/Country";
import Occupation from "../components/Occupation";
import IncomeLevelSelector from "../components/IncomeLevelSelector";
import PainPointSelector from "../components/PainPointSelector";
import GoalsSelector from "../components/GoalsSelector";
import SummaryAndFinish from "../components/SummaryAndFinish";

export default function Home() {
	const [step, setStep] = useState(1);
	const [userData, setUserData] = useState({
		introduction: true,
		ageRange: "",
		gender: "",
		country: {
			country: "",
			region: "",
		},
		occupation: "",
		incomeLevel: "",
		painPoint: "",
		goals: "",
	});

	const nextStep = (data: any) => {
		const newUserData = { ...userData, ...data };
		setUserData(newUserData);
		setStep(step + 1);
	};

	const prevStep = () => {
		setStep(Math.max(1, step - 1));
	};

	return (
		<div className='container mx-auto p-4 h-screen flex justify-center align-middle flex-col'>
			<ProgressBar currentStep={step} totalSteps={8} />
			{step === 1 && (
				<Introduction onNext={() => nextStep({ introduction: true })} />
			)}
			{step === 2 && (
				<AgeRange
					onNext={(data) => nextStep({ ageRange: data })}
					onBack={prevStep}
				/>
			)}
			{step === 3 && (
				<Gender
					onNext={(data) => nextStep({ gender: data })}
					onBack={prevStep}
				/>
			)}
			{step === 4 && (
				<Country
					onNext={(data) => nextStep({ country: data })}
					onBack={prevStep}
				/>
			)}
			{step === 5 && (
				<Occupation
					onNext={(data) => nextStep({ occupation: data })}
					onBack={prevStep}
				/>
			)}
			{step === 6 && (
				<IncomeLevelSelector
					onNext={(data) => nextStep({ incomeLevel: data })}
					onBack={prevStep}
				/>
			)}
			{step === 7 && (
				<PainPointSelector
					onNext={(data) => nextStep({ painPoint: data })}
					onBack={prevStep}
				/>
			)}
			{step === 8 && (
				<GoalsSelector
					onFinish={(data) => nextStep({ goals: data })}
					onBack={prevStep}
				/>
			)}
			{step === 9 && <SummaryAndFinish onBack={prevStep} userData={userData} />}
		</div>
	);
}
