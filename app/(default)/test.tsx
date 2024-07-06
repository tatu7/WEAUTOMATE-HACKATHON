import React from "react";

function test() {
	return (
		<>
			<div className='w-full lg:max-w-xs mx-auto'>
				<a className='hidden' href='https://1000.tools'>
					<img
						className='h-[24px] mx-auto mb-8'
						src='https://1000.tools/build/assets/logo-cf14bd45.svg'
						loading='lazy'
					/>
				</a>

				<h1 className='text-center font-semibold mb-4'>
					Subscribe to our newsletter
				</h1>

				<div className='p-4 rounded-xl border'>
					<h3 className='mb-2'>Why subscribe</h3>

					<div className='space-y-1'>
						<div className='flex items-center space-x-2'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
								className='w-4 h-4'>
								<path
									fill-rule='evenodd'
									d='M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z'
									clip-rule='evenodd'></path>
							</svg>

							<p className='text-sm text-gray-500'>
								Stay up to date with new tools
							</p>
						</div>

						<div className='flex items-center space-x-2'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
								className='w-4 h-4'>
								<path
									fill-rule='evenodd'
									d='M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z'
									clip-rule='evenodd'></path>
							</svg>

							<p className='text-sm text-gray-500'>
								Exclusive founder interviews
							</p>
						</div>

						<div className='flex items-center space-x-2'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
								className='w-4 h-4'>
								<path
									fill-rule='evenodd'
									d='M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z'
									clip-rule='evenodd'></path>
							</svg>

							<p className='text-sm text-gray-500'>No spam, just tools</p>
						</div>
					</div>
				</div>

				<form
					method='post'
					className='space-y-4'
					action='https://1000.tools/subscribe'>
					<input
						type='hidden'
						name='_token'
						value='newRJVkNy51jP4YPr9kFrkNKCSm1Ic8YiisLSzCw'
					/>
					<div>
						<input
							type='email'
							className='form-control form-control w-full'
							id='email'
							name='email'
							placeholder='Your email address...'
						/>{" "}
					</div>

					<input className='hidden' type='checkbox' name='remember' />

					<div className='grid gap-2'>
						<button className='btn btn-primary w-full'>Subscribe</button>
						<a
							className='hidden btn btn-gray w-full'
							href='https://1000.tools/signup'>
							Sign up
						</a>
					</div>
				</form>
			</div>
		</>
	);
}

export default test;
