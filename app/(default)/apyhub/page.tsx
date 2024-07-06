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
			<div className='max-w-xl mx-auto px-4 pb-20'>
				<article>
					<div className='mb-6 lg:mb-12'>
						<div className='flex items-center justify-between mb-4'>
							<div className='flex-none mr-3 lg:mr-4 rounded-[22.5%] w-20 h-20 overflow-hidden'>
								<img
									className='w-20 h-20'
									src='https://cdn.1000.tools/logos/0sCoaGG5MOm9Kk9u0ckYkYstEtzYsbvTZTwF1ASM.png?width=512'
									alt='Logo of ApyHub: All-in-one developer API catalog'
									loading='lazy'
								/>{" "}
							</div>

							<div>
								<a
									className='btn btn-sm btn-primary'
									href='https://apyhub.com'
									target='_blank'>
									<span>apyhub.com</span>

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
							<h1 className='font-bold mb-0'>ApyHub</h1>

							<h2 className='text-sm text-gray-400'>
								All-in-one developer API catalog
							</h2>
						</div>
					</div>

					<div className='prose prose-sm prose-img:rounded-xl'>
						<p>
							ApyHub is an all-in-one developer tool offering APIs for common
							functionalities and standard data that can be consumed as a
							service within software applications. Our platform features a
							meticulously curated API catalog with over 110 APIs, ranging from
							simple data and document conversion APIs to advanced AI-powered
							utility APIs. ApyHub helps developers and development teams
							transform their projects through these utility APIs, saving 15-30%
							of the time spent developing and running services and up to 25% of
							infrastructure costs.
						</p>
						<p>ApyHub offers tools for every aspect of API development:</p>
						<ul>
							<li>
								<p>
									<strong>Build APIs</strong>: Design, develop, and test APIs in
									a collaborative environment with ApyHub Fusion.
								</p>
							</li>
							<li>
								<p>
									<strong>Test and document APIs</strong>: Save up to 60% of
									time in writing and sharing test cases.
								</p>
							</li>
							<li>
								<p>
									<strong>API playground</strong>: Run and test APIs directly
									from our platform without coding.
								</p>
							</li>
							<li>
								<p>
									<strong>API integrations</strong>: Easily integrate our APIs
									with any programming language or development background to
									enhance application capabilities.
								</p>
							</li>
						</ul>
						<p>
							ApyHub improves application stability by offloading non-core
							features and connecting to specialized APIs, reducing the codebase
							and potential bugs. Our platform ensures top-notch security with
							industry-leading encryption and protection measures.
						</p>
						<p>
							We streamline API management by bringing all team members together
							to work on different parts of the API lifecycle in one place,
							providing centralized monitoring and management. With a single
							subscription, you can rely on ApyHub for all your API needs,
							accelerating your development projects and boosting productivity.
						</p>
						<p>
							Join our community of over 45,000 developers who are using various
							APIs, powering 25,000+ applications. Take advantage of our fast,
							secure, and reliable API platform to enrich your application's
							capabilities, whether you use low-code platforms like Retool,
							Bubble, or Softr.
						</p>
					</div>
				</article>
			</div>
		</>
	);
}
