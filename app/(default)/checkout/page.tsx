export default function Home() {
	return (
		<>
			<div className='h-16 w-full mx-auto flex items-center justify-between px-4  mb-6'>
				<div>
					<p>
						<img
							className='h-[24px] w-[91.96px]'
							src='https://1000.tools/build/assets/logo-cf14bd45.svg'
							loading='lazy'
						/>
					</p>
				</div>

				<div className='flex items-center space-x-2 lg:space-x-3'>
					<p className='hidden lg:flex items-center lg:space-x-0.5 text-sm text-gray-500 leading-none'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 16 16'
							fill='currentColor'
							className='hidden lg:block text-gray-400 w-4 h-4'>
							<path d='M7.25 1.75a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0v-1.5ZM11.536 2.904a.75.75 0 1 1 1.06 1.06l-1.06 1.061a.75.75 0 0 1-1.061-1.06l1.06-1.061ZM14.5 7.5a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 .75-.75ZM4.464 9.975a.75.75 0 0 1 1.061 1.06l-1.06 1.061a.75.75 0 1 1-1.061-1.06l1.06-1.061ZM4.5 7.5a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 .75-.75ZM5.525 3.964a.75.75 0 0 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 1.06-1.061l1.061 1.06ZM8.779 7.438a.75.75 0 0 0-1.368.366l-.396 5.283a.75.75 0 0 0 1.212.646l.602-.474.288 1.074a.75.75 0 1 0 1.449-.388l-.288-1.075.759.11a.75.75 0 0 0 .726-1.165L8.78 7.438Z'></path>
						</svg>

						<div>Advertise</div>
					</p>

					<p className='text-sm text-gray-500 leading-none'>Analytics</p>

					<p className='text-sm text-gray-500 leading-none'>Submit</p>

					<p className='text-sm text-gray-500 leading-none'>My tools</p>

					<div
						data-controller='dropdown'
						data-action='click@window->dropdown#close'
						data-dropdown-visibility-className='hidden'
						className='relative flex items-center'>
						<button
							data-dropdown-target='toggler'
							data-action='click->dropdown#toggle'
							className='text-sm text-gray-500 leading-none'
							type='button'>
							Account
						</button>

						<div
							data-dropdown-target='dropdown'
							className='hidden w-32 absolute z-40 top-5 right-0 p-1 bg-white shadow-lg border rounded-md overflow-hidden'>
							<p className='w-full h-8 flex items-center px-2 text-gray-400 text-sm hover:bg-gray-100 rounded-md'>
								Billing
							</p>
							<form
								method='post'
								action='https://1000.tools/logout'
								data-turbo='false'>
								<input
									type='hidden'
									name='_token'
									value='TfRGguvMN4R3TQXXc3JlYr92H6OxlZ34cuHekvXl'
									autoComplete='off'
								/>{" "}
								<button className='w-full h-8 flex items-center px-2 text-gray-400 text-sm hover:bg-gray-100 rounded-md'>
									Log out
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className='max-w-2xl mx-auto px-4 pt-10 pb-24'>
				<div className='flex justify-center mb-6'>
					<h1 className='inline-block bg-gradient-to-r from-gray-600 to-black text-transparent bg-clip-text font-semibold'>
						Select plan
					</h1>
				</div>

				<div className='grid lg:grid-cols-2 gap-4'>
					<div className=''>
						<div className='bg-gray-100 p-6 rounded-xl'>
							<div className='flex space-x-1 items-baseline mb-2'>
								<span className='font-semibold mr-1'>Monthly</span>
								<span className='text-lg text-gray-500'>
									$1 <span className='text-gray-400 line-through'>$5.99</span>
								</span>
							</div>

							<div className='text-sm text-gray-500 mb-4'>
								* $1 first month, then $5.99/month.
							</div>

							<button
								type='button'
								className='text-gray-900 w-full bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
								<a
									href='https://1000.tools/checkout/9c75b897-8c60-4d1c-9447-2d17f401de80/monthly'
									data-turbo='false'>
									Buy
								</a>
							</button>

							<div className='text-center text-xs text-gray-500 mt-1'>
								Cancel anytime.
							</div>
						</div>
					</div>

					<div className='relative bg-gray-100 p-6 rounded-xl'>
						<div className='absolute w-full left-0 right-0 -top-3 flex justify-center'>
							<div className='bg-gray-500 text-white text-xs leading-none h-6 flex items-center px-2.5 rounded-full'>
								Save 15%
							</div>
						</div>

						<div className='flex space-x-1 items-baseline mb-2'>
							<span className='font-semibold mr-1'>Annual</span>
							<span className='text-lg text-gray-500'>
								$59.99{" "}
								<span className='text-gray-400 line-through'>$69.99</span>
							</span>
						</div>

						<div className='text-sm text-gray-500 mb-4'>* You save $10.</div>
						<button
							type='button'
							className='text-gray-900 w-full bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
							<a
								href='https://1000.tools/checkout/9c75b897-8c60-4d1c-9447-2d17f401de80/annual'
								data-turbo='false'>
								Buy
							</a>
						</button>

						<div className='text-center text-xs text-gray-500 mt-1'>
							Cancel anytime.
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
