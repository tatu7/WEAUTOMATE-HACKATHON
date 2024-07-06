"use client";
import { useRouter } from "next/navigation";
export default function Home() {
	const router = useRouter();
	return (
		<>
			<div className='h-16 w-full mx-auto flex items-center justify-between px-4  mb-6'>
				<div>
					<a href='https://1000.tools'>
						<img
							className='h-[24px] w-[91.96px]'
							src='https://1000.tools/build/assets/logo-cf14bd45.svg'
							loading='lazy'
						/>
					</a>
				</div>

				<div className='flex items-center space-x-2 lg:space-x-3'>
					<a
						className='hidden lg:flex items-center lg:space-x-0.5 text-sm text-gray-500 leading-none'
						href='https://1000.tools/advertise'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 16 16'
							fill='currentColor'
							className='hidden lg:block text-gray-400 w-4 h-4'>
							<path d='M7.25 1.75a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0v-1.5ZM11.536 2.904a.75.75 0 1 1 1.06 1.06l-1.06 1.061a.75.75 0 0 1-1.061-1.06l1.06-1.061ZM14.5 7.5a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 .75-.75ZM4.464 9.975a.75.75 0 0 1 1.061 1.06l-1.06 1.061a.75.75 0 1 1-1.061-1.06l1.06-1.061ZM4.5 7.5a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 .75-.75ZM5.525 3.964a.75.75 0 0 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 1.06-1.061l1.061 1.06ZM8.779 7.438a.75.75 0 0 0-1.368.366l-.396 5.283a.75.75 0 0 0 1.212.646l.602-.474.288 1.074a.75.75 0 1 0 1.449-.388l-.288-1.075.759.11a.75.75 0 0 0 .726-1.165L8.78 7.438Z'></path>
						</svg>

						<div>Advertise</div>
					</a>

					<a
						className='text-sm text-gray-500 leading-none'
						href='https://plausible.io/1000.tools?period=30d&amp;keybindHint=T'
						target='_blank'>
						Analytics
					</a>

					<a
						className='text-sm text-gray-500 leading-none'
						href='https://1000.tools/my/tools/create'>
						Submit
					</a>

					<a
						className='text-sm text-gray-500 leading-none'
						href='https://1000.tools/my/tools'>
						My tools
					</a>

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
							<a
								className='w-full h-8 flex items-center px-2 text-gray-400 text-sm hover:bg-gray-100 rounded-md'
								href='https://1000.tools/billing'>
								Billing
							</a>
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
			<div className='max-w-sm mx-auto pt-10 pb-24 px-4'>
				<div className='flex justify-center mb-6'>
					<h1 className='inline-block bg-gradient-to-r from-gray-600 to-black text-transparent bg-clip-text font-semibold'>
						Submit tool
					</h1>
				</div>
				<form
					method='post'
					className='grid gap-6'
					action='https://1000.tools/my/tools'
					data-turbo='false'>
					<input
						type='hidden'
						name='_token'
						value='TfRGguvMN4R3TQXXc3JlYr92H6OxlZ34cuHekvXl'
						autoComplete='off'
					/>
					<div className='flex items-center space-x-2'>
						<input
							type='text'
							className='form-control form-control  w-300 bg-slate-50 h-8 '
							id='url'
							name='url'
							placeholder='e.g https://applogocreator.com'
						/>
						<button
							onClick={() => {
								router.push("/checkout");
							}}
							className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 flex items-center'
							type='submit'>
							Next
						</button>
					</div>
				</form>{" "}
			</div>
		</>
	);
}
