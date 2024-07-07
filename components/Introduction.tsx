interface IntroductionProps {
	onNext: () => void;
}

export default function Introduction({ onNext }: IntroductionProps) {
	return (
		<div className='bg-white p-6 rounded-lg shadow-md max-w-md  mx-auto'>
			<h2 className='text-xl font-bold mb-4 align-middle text-center'>
				Welcome!
			</h2>
			<p className='mb-4'>
				We're excited to offer business owners the opportunity to elevate their
				ventures using cutting-edge technology. Our service harnesses the power
				of artificial intelligence to create personalized websites, ebooks, and
				videos tailored to your unique business needs. The first step in this
				process is understanding your requirements and goals. Let's work
				together to craft the most effective digital solutions for your
				business. Click the button below to begin and take the first step
				towards your future success!" This introduction explains the core
				concept of the service to business owners and encourages them to proceed
				to the next step. You can further customize this text to align more
				closely with your specific service offerings and target audience.
			</p>

			<button
				onClick={onNext}
				className=' w-full align-middle relative group inline-flex items-center px-8 py-2.5 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-lg hover:text-white group hover:bg-gray-50'>
				<span className='absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease'></span>
				<span className='absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease'>
					<svg
						className='w-5 h-5'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='M14 5l7 7m0 0l-7 7m7-7H3'></path>
					</svg>
				</span>
				<span className='relative text-center align-middle ml-36 text-base font-semibold transition-all duration-300 group-hover:-translate-x-3'>
					Start
				</span>
			</button>
		</div>
	);
}
