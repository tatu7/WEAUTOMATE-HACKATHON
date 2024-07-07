"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
interface ServicesSelectorProps {
	onNext: (selectedServices: string[]) => void;
}

export default function ServicesSelector() {
	const router = useRouter();
	const [selectedServices, setSelectedServices] = useState([]);

	const services = [
		"eBook",
		"Video Courses",
		"Landing Page",
		"SEO Optimization",
		"Social Media Management",
		"Email Marketing",
		"Content Creation",
		"Graphic Design",
		"Web Development",
		"Mobile App Development",
		"Cloud Services",
		"IT Consulting",
		"Cybersecurity Services",
		"Data Analysis",
		"Machine Learning Solutions",
		"Virtual Reality Experiences",
		"Blockchain Solutions",
		"IoT Solutions",
		"E-commerce Solutions",
	];

	const toggleService = (service) => {
		setSelectedServices((prev) => {
			if (prev.includes(service)) {
				return prev.filter((s) => s !== service);
			} else {
				return [...prev, service];
			}
		});
	};

	return (
		<div className='bg-white p-6  max-w-xl mx-auto h-screen flex justify-center align-middle flex-col w-full'>
			<h2 className='text-xl font-bold mb-4'>
				What kind of services do you need?
			</h2>
			<div className='-ml-2 flex w-full flex-wrap'>
				{services.map((service, index) => (
					<span
						key={index}
						onClick={() => toggleService(service)}
						className={`font-ABCDiatype m-2 cursor-pointer rounded-lg border-2 px-4 py-1 text-lg text-glass-700 border-glass-300 bg-white ${
							selectedServices.includes(service)
								? "bg-blue-100 border-blue-500"
								: "border-gray-300 bg-white"
						}`}>
						{service}
					</span>
				))}
			</div>
			<button
				onClick={() => {
					if (selectedServices.length) {
						router.push("/results");
					}
				}}
				disabled={!selectedServices.length}
				className={`w-full py-2 mt-4 rounded ${
					selectedServices.length
						? "bg-indigo-600 text-white hover:bg-indigo-700"
						: "bg-gray-300 text-gray-500 cursor-not-allowed"
				}`}>
				Next
			</button>
		</div>
	);
}
