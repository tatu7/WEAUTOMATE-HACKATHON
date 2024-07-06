import React from "react";

function test() {
	return (
		<>
			<div className='max-w-xl mx-auto px-4 pb-20'>
				<article>
					<div className='mb-6 lg:mb-12'>
						<div className='flex items-center justify-between mb-4'>
							<div className='flex-none mr-3 lg:mr-4 rounded-[22.5%] w-20 h-20 overflow-hidden'>
								<img
									className='w-20 h-20'
									src='https://cdn.1000.tools/logos/0uvUPHvxW8ofHTVeOI7l1HMZz7442kZHjHFEmfX1.png?width=512'
									alt='Logo of AskDocs: Quickly search, find, understand, and summarize documents'
									loading='lazy'
								/>{" "}
							</div>

							<div>
								<a
									className='btn btn-sm btn-primary'
									href='https://www.askdocs.com'
									target='_blank'>
									<span>www.askdocs.com</span>

									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 20 20'
										fill='currentColor'
										className='ml-1 w-4 h-4'>
										<path
											fill-rule='evenodd'
											d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
											clip-rule='evenodd'></path>
									</svg>
								</a>
							</div>
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
						<a
							className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'
							href='https://1000.tools/supadoc-ai-writer'
							target='_top'>
							<div className='flex-none mr-3 rounded-none w-16 h-16 overflow-hidden'>
								<img
									className='w-16 h-16'
									src='https://cdn.1000.tools/logos/vpjhkjdZZwVo2sBchT1bjj4UtIDK2w87Q1IMX8Ft.svg?width=128'
									alt='Logo of SupaDoc AI Writer: Quick, smart document creation'
									loading='lazy'
								/>{" "}
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
						</a>
						<a
							className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'
							href='https://1000.tools/documind'
							target='_top'>
							<div className='flex-none mr-3 rounded-full w-16 h-16 overflow-hidden'>
								<img
									className='w-16 h-16'
									src='https://cdn.1000.tools/logos/0HKC2XI3Re9hioOocJA500mRzQRs8fzU5MZ2gaXk.jpg?width=128'
									alt='Logo of Documind: Say goodbye to the hassle of scrolling lengthy documents endlessly to find the information you need. Documind will do the hard work for you.'
									loading='lazy'
								/>{" "}
							</div>

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
						</a>
						<a
							className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'
							href='https://1000.tools/searchmydocs'
							target='_top'>
							<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
								<img
									className='w-16 h-16'
									src='https://cdn.1000.tools/logos/MQFQoBTI3Las0TOZ6fZLnW5rXWb9ems1io7zpHUz.png?width=128'
									alt='Logo of SearchMyDocs: Search, ask, chat with your documents effortlessly'
									loading='lazy'
								/>{" "}
							</div>

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
						</a>
						<a
							className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'
							href='https://1000.tools/trickle-ai'
							target='_top'>
							<div className='flex-none mr-3 rounded-none w-16 h-16 overflow-hidden'>
								<img
									className='w-16 h-16'
									src='https://cdn.1000.tools/logos/coH6wF6hMizIU2uN7SvHkVX0X2ICP4HTghRldVP4.png?width=128'
									alt='Logo of Trickle AI: Summarize, organize, and easily search your screenshots'
									loading='lazy'
								/>{" "}
							</div>

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
						</a>
						<a
							className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'
							href='https://1000.tools/docses'
							target='_top'>
							<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
								<img
									className='w-16 h-16'
									src='https://cdn.1000.tools/logos/mFYZ4fgCWgpumRZanS0PhrsyBj6WWOPEHCesN3yJ.png?width=128'
									alt='Logo of Docses: Legal Document Sumarizer'
									loading='lazy'
								/>{" "}
							</div>

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
						</a>
						<a
							className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'
							href='https://1000.tools/summarize-this'
							target='_top'>
							<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
								<img
									className='w-16 h-16'
									src='https://cdn.1000.tools/logos/oei3LLrtLZ2bqqDvq2SywH0FVbV2enlfCjClThZ1.png?width=128'
									alt='Logo of Summarize This: Effortlessly summarize text, websites, pdfs, and youtube videos anytime, anywhere'
									loading='lazy'
								/>{" "}
							</div>

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
						</a>
						<a
							className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'
							href='https://1000.tools/echonotes'
							target='_top'>
							<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
								<img
									className='w-16 h-16'
									src='https://cdn.1000.tools/logos/Xln8glgfVE7UWv4KcOzuk3dZABZAbPJo3cx6NPkD.png?width=128'
									alt='Logo of Echonotes: Quickly Organize Ideas into Clear, Structured Notes'
									loading='lazy'
								/>{" "}
							</div>

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
						</a>
						<a
							className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'
							href='https://1000.tools/pdf-search'
							target='_top'>
							<div className='flex-none mr-3 rounded-none w-16 h-16 overflow-hidden'>
								<img
									className='w-16 h-16'
									src='https://cdn.1000.tools/logos/1c9sdLJSi144fTQnuVvaS4bd2Opi1Da4t0wNVEtI.png?width=128'
									alt='Logo of PDF Search: Search documents in seconds with Artificial Intelligence'
									loading='lazy'
								/>{" "}
							</div>

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
						</a>
						<a
							className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'
							href='https://1000.tools/pdfchat'
							target='_top'>
							<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
								<img
									className='w-16 h-16'
									src='https://cdn.1000.tools/logos/CFnMD7TGg7mMlMO0f5IEqxh1GLL4o4fP6kCBUBDg.png?width=128'
									alt='Logo of PDFChat: AI assistant for your documents'
									loading='lazy'
								/>{" "}
							</div>

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
						</a>
					</div>
				</div>

				<div className='lg:hidden w-full mt-8'>
					<a
						className='relative shrink-0 btn btn-sm btn-navigate w-full'
						href='https://1000.tools/apyhub'>
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
					</a>
				</div>

				<div className='hidden lg:block fixed left-4 top-1/2 -translate-y-1/2'>
					<a
						data-turbo-preload=''
						className='btn btn-circle btn-circle-lg btn-navigate'
						href='https://1000.tools/job-boardly'
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
					</a>
				</div>
			</div>
		</>
	);
}

export default test;
