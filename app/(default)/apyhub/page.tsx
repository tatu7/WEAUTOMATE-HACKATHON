"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Home() {
	return (
		<>
			<div className='h-16 w-full mx-auto flex items-center justify-between px-4  mb-6'>
				<div>
					<p>
						<Image
							width={48}
							height={24}
							src={"https://1000.tools/build/assets/logo-cf14bd45.svg"}
							alt={""}
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
			<div className='max-w-xl mx-auto px-4 pb-20'>
				<article>
					<div className='mb-6 lg:mb-12'>
						<div className='flex items-center justify-between mb-4'>
							<div className='flex-none mr-3 lg:mr-4 rounded-[22.5%] w-20 h-20 overflow-hidden'></div>

							<div></div>
						</div>

						<div>
							<h1 className='font-bold mb-0'>AskDocs</h1>

							<h2 className='text-sm text-gray-400'>
								Quickly search, find, understand, and summarize documents
							</h2>
						</div>
					</div>

					<div className='prose prose-sm prose-img:rounded-xl'>
						<p>Sick of wasting time digging through documents?</p>
						<p>
							Let AskDocs give you a hand. It's like a super smart reading
							helper that helps you locate relevant information your reports,
							contracts, financial documents, academic papers, and policy
							documents-in minutes!
						</p>
						<p>
							<strong>Just upload your documents to AskDocs:</strong> PDFs,
							Word, Excel, EPUB, CSV, text files...even YouTube videos. It scans
							them fast, finds what you need, and explains it clearly.{" "}
						</p>
						<p>
							<strong>No more document overwhelm:</strong>
						</p>
						<ul>
							<li>
								<p>
									<strong>Search it all at once:</strong> Find answers across
									your files and save lots of time.
								</p>
							</li>
							<li>
								<p>
									<strong>Get reliable answers:</strong> Instant explanations
									and definitions of confusing terms, acronyms and concepts
									based on your document.{" "}
								</p>
							</li>
							<li>
								<p>
									<strong>It understands you:</strong> Multilingual support,
									even if you type or speak to it.
								</p>
							</li>
							<li>
								<p>
									<strong>Relax, AskDocs locks your stuff up tight,</strong>{" "}
									using trusted cloud security that keeps your info safe as can
									be. AskDocs prioritizes user data security and privacy, with
									documents remaining exclusively accessible to the uploader.
									Your document remains in your control.
								</p>
							</li>
						</ul>
						<p>
							<strong>9 out of 10</strong> knowledge workers say{" "}
							<strong>tools like AskDocs help them get more done.</strong>{" "}
						</p>
						<p>
							Ready to use the simplest way to quickly understand confusing text
							and get your time back?
						</p>
					</div>
				</article>

				<div className='mt-12'>
					<div className='flex items-center space-x-4 mb-10 md:mb-4'>
						<h2 className='flex-none leading-none'>Alternative tools</h2>

						<div className='w-full h-[1px] bg-gradient-to-r from-gray-300 to-white'></div>
					</div>

					<div className='grid gap-10 md:gap-4'>
						<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
							<div className='flex-none mr-3 rounded-none w-16 h-16 overflow-hidden'>
								<img
									className='w-16 h-16'
									src='https://cdn.1000.tools/logos/vpjhkjdZZwVo2sBchT1bjj4UtIDK2w87Q1IMX8Ft.svg?width=128'
									alt='Logo of SupaDoc AI Writer: Quick, smart document creation'
								/>
							</div>

							<div className='flex-grow'>
								<div className='flex items-center justify-between mb-0.5'>
									<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
										SupaDoc AI Writer
									</h3>

									<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
								</div>

								<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
									Quick, smart document creation
								</p>
							</div>

							<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
						</p>
						<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
							<div className='flex-none mr-3 rounded-full w-16 h-16 overflow-hidden'></div>

							<div className='flex-grow'>
								<div className='flex items-center justify-between mb-0.5'>
									<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
										Documind
									</h3>

									<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
								</div>

								<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
									Say goodbye to the hassle of scrolling lengthy documents
									endlessly to find the information you need. Documind will do
									the hard work for you.
								</p>
							</div>

							<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
						</p>
						<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
							<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'></div>

							<div className='flex-grow'>
								<div className='flex items-center justify-between mb-0.5'>
									<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
										SearchMyDocs
									</h3>

									<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
								</div>

								<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
									Search, ask, chat with your documents effortlessly
								</p>
							</div>

							<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
						</p>
						<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
							<div className='flex-none mr-3 rounded-none w-16 h-16 overflow-hidden'></div>

							<div className='flex-grow'>
								<div className='flex items-center justify-between mb-0.5'>
									<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
										Trickle AI
									</h3>

									<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
								</div>

								<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
									Summarize, organize, and easily search your screenshots
								</p>
							</div>

							<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
						</p>
						<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
							<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'></div>

							<div className='flex-grow'>
								<div className='flex items-center justify-between mb-0.5'>
									<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
										Docses
									</h3>

									<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
								</div>

								<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
									Legal Document Sumarizer
								</p>
							</div>

							<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
						</p>
						<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
							<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'></div>

							<div className='flex-grow'>
								<div className='flex items-center justify-between mb-0.5'>
									<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
										Summarize This
									</h3>

									<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
								</div>

								<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
									Effortlessly summarize text, websites, pdfs, and youtube
									videos anytime, anywhere
								</p>
							</div>

							<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
						</p>
						<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
							<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'></div>

							<div className='flex-grow'>
								<div className='flex items-center justify-between mb-0.5'>
									<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
										Echonotes
									</h3>

									<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
								</div>

								<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
									Quickly Organize Ideas into Clear, Structured Notes
								</p>
							</div>

							<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
						</p>
						<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
							<div className='flex-none mr-3 rounded-none w-16 h-16 overflow-hidden'></div>

							<div className='flex-grow'>
								<div className='flex items-center justify-between mb-0.5'>
									<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
										PDF Search
									</h3>

									<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
								</div>

								<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
									Search documents in seconds with Artificial Intelligence
								</p>
							</div>

							<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
						</p>
						<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
							<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'></div>

							<div className='flex-grow'>
								<div className='flex items-center justify-between mb-0.5'>
									<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
										PDFChat
									</h3>

									<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
								</div>

								<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
									AI assistant for your documents
								</p>
							</div>

							<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
						</p>
					</div>
				</div>

				<div className='lg:hidden w-full mt-8'>
					<p className='relative shrink-0 btn btn-sm btn-navigate w-full'>
						Next
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							className='w-4 h-4 absolute top-1/2 -translate-y-1/2 right-3'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M8.25 4.5l7.5 7.5-7.5 7.5'></path>
						</svg>
					</p>
				</div>

				<div className='hidden lg:block fixed left-4 top-1/2 -translate-y-1/2'>
					<p
						data-turbo-preload=''
						className='btn btn-circle btn-circle-lg btn-navigate'
						id='previous-tool'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							className='w-5 h-5'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M15.75 19.5L8.25 12l7.5-7.5'></path>
						</svg>
					</p>
				</div>
			</div>
		</>
	);
}
