"use client";
import { useRouter } from "next/navigation";
export default function Home() {
	const router = useRouter();
	return (
		<div className='font-sans text-black antialiased min-h-screen lg:flex lg:items-center justify-center py-20 px-4'>
			<div className='fixed left-4 top-4 '>
				<p
					onClick={() => {
						router.back();
					}}
					className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 flex items-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
						fill='currentColor'
						className='w-5 h-5 mr-1'>
						<path
							fill-rule='evenodd'
							d='M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z'
							clip-rule='evenodd'></path>
					</svg>
					Back
				</p>
			</div>
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

					<label
						htmlFor='default-search'
						className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
						Search
					</label>
					<div className='relative'>
						<div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
							<svg
								className='w-4 h-4 text-gray-500 dark:text-gray-400'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 20 20'>
								<path
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
								/>
							</svg>
						</div>
						<input
							type='search'
							id='default-search'
							className='block w-full p-4 ps-10 text-sm text-gray-100 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 '
							placeholder='Search Mockups, Logos...'
							required
						/>
					</div>

					<div className='grid gap-2'>
						<button
							type='button'
							className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
							Subscribe
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
