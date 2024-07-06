"use client";
import { useRouter } from "next/navigation";
export default function Home() {
	const router = useRouter();
	return (
		<>
			<div className='font-sans text-black antialiased flex'>
				<div
					className='hidden lg:block h-screen shrink-0 w-60 border-r overflow-y-auto scrollbar-thin'
					data-turbo-permanent=''
					id='categories_vertical'>
					<div
						data-controller='category-links'
						data-category-links-active-className='bg-gray-50 text-gray-700'
						data-category-links-inactive-className='hover:bg-gray-50 focus:bg-gray-50 text-gray-500'
						className='grid gap-1 p-4'>
						<p
							className='h-8 rounded-lg flex items-center pl-1 pr-3 bg-gray-50 text-gray-700'
							data-category-links-target='link'
							data-action='click->category-links#clicked'>
							<div className='shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2'>
								🏠
							</div>
							<div className='text-sm font-medium line-clamp-1'>All</div>
						</p>

						<p
							className='h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500'
							data-category-links-target='link'
							data-action='click->category-links#clicked'>
							<div className='shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2'>
								🤖
							</div>
							<div className='text-sm font-medium line-clamp-1'>
								Artificial intelligence
							</div>
						</p>
						<p
							className='h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500'
							data-category-links-target='link'
							data-action='click->category-links#clicked'>
							<div className='shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2'>
								📈
							</div>
							<div className='text-sm font-medium line-clamp-1'>
								Productivity
							</div>
						</p>
						<p
							className='h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500'
							data-category-links-target='link'
							data-action='click->category-links#clicked'>
							<div className='shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2'>
								📣
							</div>
							<div className='text-sm font-medium line-clamp-1'>Marketing</div>
						</p>
						<p
							className='h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500'
							data-category-links-target='link'
							data-action='click->category-links#clicked'>
							<div className='shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2'>
								💻
							</div>
							<div className='text-sm font-medium line-clamp-1'>
								Developer tools
							</div>
						</p>
						<p
							className='h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500'
							data-category-links-target='link'
							data-action='click->category-links#clicked'>
							<div className='shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2'>
								🎨
							</div>
							<div className='text-sm font-medium line-clamp-1'>Design</div>
						</p>
						<p
							className='h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500'
							data-category-links-target='link'
							data-action='click->category-links#clicked'>
							<div className='shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2'>
								🔍
							</div>
							<div className='text-sm font-medium line-clamp-1'>SEO</div>
						</p>
						<p
							className='h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500'
							data-category-links-target='link'
							data-action='click->category-links#clicked'>
							<div className='shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2'>
								🤖
							</div>
							<div className='text-sm font-medium line-clamp-1'>Chatbots</div>
						</p>
						<p
							className='h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500'
							data-category-links-target='link'
							data-action='click->category-links#clicked'>
							<div className='shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2'>
								📱
							</div>
							<div className='text-sm font-medium line-clamp-1'>
								Social media
							</div>
						</p>
						<p
							className='h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500'
							data-category-links-target='link'
							data-action='click->category-links#clicked'>
							<div className='shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2'>
								🤝
							</div>
							<div className='text-sm font-medium line-clamp-1'>
								Customer support
							</div>
						</p>
						<p
							className='h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500'
							data-category-links-target='link'
							data-action='click->category-links#clicked'>
							<div className='shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2'>
								🚫
							</div>
							<div className='text-sm font-medium line-clamp-1'>No code</div>
						</p>
						<p
							className='h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500'
							data-category-links-target='link'
							data-action='click->category-links#clicked'>
							<div className='shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2'>
								👨‍🎨
							</div>
							<div className='text-sm font-medium line-clamp-1'>
								Content creation
							</div>
						</p>
						<p
							className='h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500'
							data-category-links-target='link'
							data-action='click->category-links#clicked'>
							<div className='shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2'>
								📝
							</div>
							<div className='text-sm font-medium line-clamp-1'>Blogging</div>
						</p>
						<p
							className='h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500'
							data-category-links-target='link'
							data-action='click->category-links#clicked'>
							<div className='shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2'>
								✍️
							</div>
							<div className='text-sm font-medium line-clamp-1'>Writing</div>
						</p>
						<p
							className='h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500'
							data-category-links-target='link'
							data-action='click->category-links#clicked'>
							<div className='shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2'>
								🛠️
							</div>
							<div className='text-sm font-medium line-clamp-1'>
								Productized services
							</div>
						</p>
						<p
							className='h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500'
							data-category-links-target='link'
							data-action='click->category-links#clicked'>
							<div className='shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2'>
								💰
							</div>
							<div className='text-sm font-medium line-clamp-1'>Sales</div>
						</p>
						<p
							className='h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500'
							data-category-links-target='link'
							data-action='click->category-links#clicked'>
							<div className='shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2'>
								📱
							</div>
							<div className='text-sm font-medium line-clamp-1'>iOS</div>
						</p>
						<p
							className='h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500'
							data-category-links-target='link'
							data-action='click->category-links#clicked'>
							<div className='shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2'>
								👷
							</div>
							<div className='text-sm font-medium line-clamp-1'>
								Website builders
							</div>
						</p>
						<p
							className='h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500'
							data-category-links-target='link'
							data-action='click->category-links#clicked'>
							<div className='shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2'>
								👩‍💻
							</div>
							<div className='text-sm font-medium line-clamp-1'>
								Developer APIs
							</div>
						</p>
						<p
							className='h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500'
							data-category-links-target='link'
							data-action='click->category-links#clicked'>
							<div className='shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2'>
								📊
							</div>
							<div className='text-sm font-medium line-clamp-1'>Analytics</div>
						</p>
						<p
							className='h-8 rounded-lg flex items-center pl-1 pr-3 hover:bg-gray-50 focus:bg-gray-50 text-gray-500'
							data-category-links-target='link'
							data-action='click->category-links#clicked'>
							<div className='shrink-0 w-7 h-7 flex items-center justify-center bg-white border rounded-md mr-2'>
								🏗️
							</div>
							<div className='text-sm font-medium line-clamp-1'>
								Building products
							</div>
						</p>
					</div>
				</div>
				<div className='h-screen flex-grow overflow-y-auto scrollbar-thin'>
					<div className=' flex-grow overflow-y-auto scrollbar-thin'>
						<div className='h-16 max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-6 mb-8'>
							<div className='flex items-center space-x-4'>
								<p className='shrink-0'>
									<img
										className='h-[24px] w-[91.96px]'
										src='https://1000.tools/build/assets/logo-cf14bd45.svg'
										loading='lazy'
									/>
								</p>
								<div className='hidden lg:flex items-center space-x-1.5'>
									<span className='relative flex h-2 w-2'>
										<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75'></span>
										<span className='relative inline-flex rounded-full h-2 w-2 bg-green-400'></span>
									</span>
									<p className='text-sm leading-none text-gray-400'>
										124 spots left
									</p>
								</div>
							</div>

							<div className='flex items-center space-x-2 lg:space-x-4'>
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
											/>{" "}
											<button className='w-full h-8 flex items-center px-2 text-gray-400 text-sm hover:bg-gray-100 rounded-md'>
												Log out
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='max-w-7xl mx-auto px-4 lg:px-6 mb-6'>
						<div className='mb-3'>
							<p className='hidden lg:block fill-gray-600 hover:fill-gray-900 w-[128px] mb-3'>
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122 37'>
									<path d='M104.953 36.286c-4.22 1.634-5.936.086-5.936-.891 1.495-.126 5.067-.331 5.936.891Zm5.356-1.336a5.486 5.486 0 0 1-7.083-.497c1.44-.4 5.372-.874 7.083.497Zm-7.139-3.176c.16 2.033-1.922 3.176-4.17 3.341.41-2.045 2.509-2.958 4.17-3.341Zm4.032-1.874c.238.869-.089 3.228-3.323 4.164.139-1.593.986-3.667 3.323-4.164Zm6.413 2.365a5.005 5.005 0 0 1-6.385.571c1.296-.668 4.408-1.57 6.385-.571Zm-3.417-4.706c.443.856.537 3.295-2.326 4.763-.166-1.57.465-4.255 2.326-4.763Zm7.083.948a4.389 4.389 0 0 1-2.657 2.217 4.243 4.243 0 0 1-3.39-.44c1.805-1.697 4.685-2.348 6.047-1.777Zm-4.28-4.547c1.284 2.24-.073 4.798-1.485 5.849-.628-2.082-.052-4.351 1.484-5.849Zm6.662-.097c.155 3.479-3.478 3.29-5.184 3.313.537-.731 3.522-3.381 5.184-3.313Zm-4.48-3.25c.675.743 1.688 3.599-.555 5.929-.703-1.685-.858-4.272.554-5.929Zm6.385-1.542c.116 2.81-2.249 4.232-4.53 4.21.686-1.354 2.52-3.964 4.53-4.21Zm-4.785-1.936c1.512.89 1.34 3.764.448 5.26-1.002-1.393-1.75-3.124-.448-5.26Zm4.884-2.633c.748 2.559-1.45 4.29-2.769 4.438.338-1.222.781-3.387 2.77-4.438Zm-4.607-.851c1.667.835 2.457 2.832 1.833 4.632-1.163-.937-2.564-2.919-1.833-4.632Zm4.685-3.096c1.03 3.113-1.335 4.13-2.215 4.38.105-1.324.947-3.963 2.215-4.38Zm-4.619-.817c.676.195 2.603 1.777 2.254 4.61-1.268-.714-2.808-2.074-2.254-4.61Zm3.921-3.9c1.152 3.826-.77 5.397-1.401 5.71-.1-1.21-.222-4.037 1.401-5.71Zm-4.264.096c1.207.337 2.73 2.553 2.658 4.684-1.196-.548-2.985-2.827-2.658-4.684Zm.36-5.934c2.802 2.896 3.195 5.18 2.376 7.996-1.269-1.142-2.282-4.569-2.376-7.996ZM17.047 36.286c4.22 1.634 5.936.086 5.936-.891-1.495-.126-5.067-.331-5.936.891ZM11.69 34.95a5.486 5.486 0 0 0 7.083-.497c-1.44-.4-5.372-.874-7.083.497Zm7.139-3.176c-.16 2.033 1.922 3.176 4.17 3.341-.41-2.045-2.509-2.958-4.17-3.341ZM14.798 29.9c-.238.869.089 3.228 3.323 4.164-.139-1.593-.986-3.667-3.323-4.164Zm-6.413 2.365a5.005 5.005 0 0 0 6.385.571c-1.296-.668-4.408-1.57-6.385-.571Zm3.417-4.706c-.443.856-.537 3.295 2.326 4.763.166-1.57-.465-4.255-2.326-4.763Zm-7.083.948a4.389 4.389 0 0 0 2.657 2.217 4.243 4.243 0 0 0 3.39-.44c-1.805-1.697-4.685-2.348-6.047-1.777Zm4.28-4.547c-1.284 2.24.073 4.798 1.485 5.849.628-2.082.052-4.351-1.484-5.849Zm-6.662-.097c-.155 3.479 3.478 3.29 5.184 3.313-.537-.731-3.522-3.381-5.184-3.313Zm4.48-3.25c-.675.743-1.688 3.599.555 5.929.703-1.685.858-4.272-.554-5.929ZM.433 19.071c-.116 2.81 2.249 4.232 4.53 4.21-.686-1.354-2.52-3.964-4.53-4.21Zm4.785-1.936c-1.512.89-1.34 3.764-.448 5.26 1.002-1.393 1.75-3.124.448-5.26ZM.333 14.502c-.748 2.559 1.45 4.29 2.769 4.438-.338-1.222-.781-3.387-2.77-4.438Zm4.607-.851c-1.667.835-2.457 2.832-1.833 4.632 1.163-.937 2.564-2.919 1.833-4.632ZM.255 10.555c-1.03 3.113 1.335 4.13 2.215 4.38-.105-1.324-.947-3.963-2.215-4.38Zm4.619-.817c-.676.195-2.603 1.777-2.254 4.61 1.268-.714 2.808-2.074 2.254-4.61Zm-3.921-3.9c-1.152 3.826.77 5.397 1.401 5.71.1-1.21.222-4.037-1.401-5.71Zm4.264.096c-1.207.337-2.73 2.553-2.658 4.684 1.196-.548 2.985-2.827 2.658-4.684ZM4.857 0C2.055 2.896 1.662 5.18 2.481 7.996 3.75 6.854 4.763 3.427 4.857 0Zm50.977 35c.162 0 .288-.108.288-.27V22.67c0-.162-.126-.27-.288-.27h-4.59c-.162 0-.27.108-.27.27v1.782c0 .162.108.288.27.288h2.124v9.99c0 .162.108.27.27.27h2.196Zm5.436.216c1.782 0 3.348-.936 3.366-2.754.036-1.332-.846-2.106-1.944-2.538l-1.332-.522c-.396-.162-.702-.396-.702-.72 0-.27.162-.576.702-.576.486 0 .972.252 1.548.702.162.108.288.126.414 0l.918-1.08c.072-.108.126-.252.018-.378a3.973 3.973 0 0 0-3.042-1.386c-1.692 0-3.168.99-3.168 2.718 0 1.224.756 1.98 1.908 2.43l1.152.468c.594.234.792.432.792.774 0 .396-.324.576-.81.576-.63 0-1.224-.27-1.998-.828-.144-.09-.306-.144-.45.09l-.72 1.008c-.126.18-.144.396-.054.522.738.882 1.908 1.494 3.402 1.494Zm8.334 0c.612 0 1.584-.108 1.584-.558v-1.494c0-.18-.144-.27-.324-.252-.234.018-.396.018-.558.018-.45 0-.756-.252-.756-.738v-3.888h1.35c.162 0 .27-.108.27-.27V26.45c0-.162-.108-.27-.27-.27h-1.35v-2.07c0-.162-.126-.27-.288-.27h-2.214c-.162 0-.288.108-.288.27v2.07h-1.098c-.162 0-.27.108-.27.27v1.584c0 .162.108.27.27.27h1.098v4.194c0 2.052 1.386 2.718 2.844 2.718ZM20.72 15c.09 0 .15-.06.15-.15v-2.26h.72c1.69 0 2.49-.93 2.49-2.29 0-1.36-.8-2.3-2.49-2.3h-2.15c-.09 0-.15.06-.15.15v6.7c0 .09.06.15.15.15h1.28Zm.15-5.6h.68c.53 0 1.02.17 1.02.9 0 .72-.49.89-1.02.89h-.68V9.4Zm5.5 5.6c.09 0 .16-.06.16-.15v-2.36c0-.73.38-1.13 1.01-1.13.15 0 .26.02.36.05.14.03.21 0 .21-.13v-.97c0-.09-.02-.15-.09-.2-.08-.06-.21-.13-.45-.13-.57 0-.88.4-1.04.93l-.05-.65c0-.12-.06-.16-.15-.16h-1.18c-.09 0-.15.06-.15.15v4.6c0 .09.06.15.15.15h1.22Zm4.77.12c1.48 0 2.58-1.12 2.58-2.57 0-1.45-1.1-2.57-2.58-2.57s-2.57 1.12-2.57 2.57c0 1.45 1.09 2.57 2.57 2.57Zm0-1.4c-.62 0-1.1-.45-1.1-1.17s.48-1.17 1.1-1.17c.62 0 1.1.45 1.1 1.17s-.48 1.17-1.1 1.17Zm5.49 1.4c.7 0 1.2-.28 1.53-.75l.02.48c0 .09.07.15.16.15h1.1c.09 0 .17-.06.17-.15V8c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.15.06-.15.15v2.59c-.33-.39-.8-.61-1.44-.61-1.36 0-2.3 1.12-2.3 2.57 0 1.46.94 2.57 2.3 2.57Zm.33-1.39c-.65 0-1.14-.46-1.14-1.18 0-.71.49-1.18 1.14-1.18.67 0 1.13.47 1.13 1.17 0 .72-.46 1.19-1.13 1.19Zm5.52 1.39c.71 0 1.16-.35 1.44-.85l.04.57c0 .12.07.16.16.16h1.17c.09 0 .16-.06.16-.15v-4.6c0-.09-.07-.15-.16-.15h-1.21c-.09 0-.16.06-.16.15v2.48c0 .65-.33.99-.85.99-.54 0-.82-.34-.82-.99v-2.48c0-.09-.07-.15-.16-.15h-1.22c-.09 0-.15.06-.15.15v2.84c0 1.28.74 2.03 1.76 2.03Zm6.44 0c.79 0 1.45-.35 1.87-.9.06-.07.05-.15-.01-.21l-.69-.66c-.08-.08-.19-.08-.26-.01-.27.25-.53.38-.86.38-.74 0-1.18-.56-1.18-1.2 0-.63.44-1.14 1.16-1.14.34 0 .6.12.86.38.08.07.19.07.27-.01l.69-.66c.06-.06.07-.15.01-.21-.42-.55-1.08-.9-1.9-.9-1.48 0-2.56 1.1-2.56 2.54 0 1.47 1.1 2.6 2.6 2.6Zm4.77 0c.34 0 .88-.06.88-.31v-.83c0-.1-.08-.15-.18-.14-.13.01-.22.01-.31.01-.25 0-.42-.14-.42-.41v-2.16h.75c.09 0 .15-.06.15-.15v-.88c0-.09-.06-.15-.15-.15h-.75V8.95c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.16.06-.16.15v1.15h-.61c-.09 0-.15.06-.15.15v.88c0 .09.06.15.15.15h.61v2.33c0 1.14.77 1.51 1.58 1.51Zm5.95 0c1.48 0 2.58-1.12 2.58-2.57 0-1.45-1.1-2.57-2.58-2.57s-2.57 1.12-2.57 2.57c0 1.45 1.09 2.57 2.57 2.57Zm0-1.4c-.62 0-1.1-.45-1.1-1.17s.48-1.17 1.1-1.17c.62 0 1.1.45 1.1 1.17s-.48 1.17-1.1 1.17ZM64.79 15c.09 0 .16-.06.16-.15v-3.57h.98c.09 0 .15-.06.15-.15v-.88c0-.09-.06-.15-.15-.15h-.98v-.49c0-.33.11-.57.58-.57.11 0 .25.03.42.06.07.01.13 0 .13-.07V8.02c0-.06-.03-.13-.09-.16-.3-.15-.52-.17-.82-.17-1.09 0-1.76.52-1.76 1.72v.69h-.58c-.09 0-.15.06-.15.15v.88c0 .09.06.15.15.15h.58v3.57c0 .09.06.15.15.15h1.23Zm6.08.12c.34 0 .88-.06.88-.31v-.83c0-.1-.08-.15-.18-.14-.13.01-.22.01-.31.01-.25 0-.42-.14-.42-.41v-2.16h.75c.09 0 .15-.06.15-.15v-.88c0-.09-.06-.15-.15-.15h-.75V8.95c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.16.06-.16.15v1.15h-.61c-.09 0-.15.06-.15.15v.88c0 .09.06.15.15.15h.61v2.33c0 1.14.77 1.51 1.58 1.51Zm4.65-5.14c-.7 0-1.15.35-1.43.85V8c0-.09-.07-.15-.16-.15h-1.22c-.09 0-.15.06-.15.15v6.85c0 .09.06.15.15.15h1.22c.09 0 .16-.06.16-.15v-2.48c0-.65.32-.99.85-.99.54 0 .82.34.82.99v2.48c0 .09.07.15.16.15h1.21c.09 0 .16-.06.16-.15v-2.84c0-1.28-.75-2.03-1.77-2.03Zm5.34 5.14c.69 0 1.32-.2 1.74-.62.09-.08.09-.16.05-.22l-.41-.58c-.06-.07-.1-.09-.18-.05-.41.23-.75.27-1.08.27-.7 0-1.16-.26-1.33-.79h2.82c.45 0 .58-.3.58-.8 0-1.26-.87-2.35-2.37-2.35-1.51 0-2.52 1.11-2.52 2.55 0 1.49 1.09 2.59 2.7 2.59Zm-1.23-3.05c.12-.58.55-.83 1.06-.83s.9.24 1 .83h-2.06Zm8.27 3.05c.7 0 1.2-.28 1.53-.75l.02.48c0 .09.07.15.16.15h1.1c.09 0 .17-.06.17-.15V8c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.15.06-.15.15v2.59c-.33-.39-.8-.61-1.44-.61-1.36 0-2.3 1.12-2.3 2.57 0 1.46.94 2.57 2.3 2.57Zm.33-1.39c-.65 0-1.14-.46-1.14-1.18 0-.71.49-1.18 1.14-1.18.67 0 1.13.47 1.13 1.17 0 .72-.46 1.19-1.13 1.19Zm5.81 1.39c.7 0 1.2-.28 1.53-.75l.02.48c0 .09.07.15.16.15h1.1c.09 0 .17-.06.17-.15v-4.6c0-.09-.07-.15-.16-.15h-1.11c-.09 0-.16.06-.16.15l-.02.47c-.32-.46-.81-.74-1.53-.74-1.36 0-2.3 1.12-2.3 2.57 0 1.46.94 2.57 2.3 2.57Zm.33-1.39c-.65 0-1.14-.46-1.14-1.18 0-.71.49-1.18 1.14-1.18.67 0 1.13.47 1.13 1.17 0 .72-.46 1.19-1.13 1.19Zm5.96 3.17c.08 0 .15-.04.18-.12l2.6-6.51c.04-.11-.02-.17-.13-.17h-1.24c-.08 0-.16.04-.19.12l-1.08 3-1.08-3c-.03-.08-.11-.12-.19-.12h-1.24c-.11 0-.17.06-.13.17l1.9 4.74-.72 1.71c-.05.12.01.18.13.18h1.19Z'></path>
								</svg>
							</p>

							<div className='flex lg:hidden items-center space-x-2 mb-2'>
								<span className='relative flex h-2 w-2'>
									<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75'></span>
									<span className='relative inline-flex rounded-full h-2 w-2 bg-green-400'></span>
								</span>

								<p className='text-sm leading-none text-gray-400'>
									124 spots left
								</p>
							</div>

							<div className='max-w-lg'>
								<h1 className='lg:text-lg text-gray-500'>
									An exclusive list of the 1000 best tools. Carefully vetted and
									maintained by humans.
								</h1>
							</div>
						</div>
						<div className='flex items-center space-x-2'>
							<p
								onClick={() => {
									router.push("/my/tools/create");
								}}
								className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 flex items-center'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'
									fill='currentColor'
									className='w-5 h-5 mr-1'>
									<path d='M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z'></path>
								</svg>
								Submit tool
							</p>
							<p
								onClick={() => {
									router.push("/subscribe");
								}}
								className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 flex items-center'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									className='w-5 h-5 mr-1'>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'></path>
								</svg>
								Subscribe
							</p>
						</div>
					</div>
					<div className='max-w-7xl mx-auto px-4 lg:px-6 mb-6'>
						<form
							autoComplete='off'
							method='GET'
							action='https://1000.tools'
							data-turbo-stream=''>
							<div className='bg-gray-100 rounded-full flex items-center'>
								<input
									name='query'
									className='form-control h-12 px-6 rounded-full w-full bg-transparent focus:ring-0 focus:outline-none'
									type='text'
									placeholder='Search...'
									autoFocus={true}
								/>
							</div>
						</form>
					</div>
					<div className='max-w-7xl mx-auto px-4 lg:px-6 mb-32'>
						<div
							id='results'
							className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-4 mb-4'>
							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/0sCoaGG5MOm9Kk9u0ckYkYstEtzYsbvTZTwF1ASM.png?width=128'
										alt='Logo of ApyHub: All-in-one developer API catalog'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											ApyHub
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'>
											<div className='shrink-0 flex items-center space-x-1 px-1.5 py-0.5 bg-purple-500 text-white rounded-full'>
												<div className='font-medium text-xs'>New</div>
											</div>
										</div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										All-in-one developer API catalog
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'>
									<div className='flex items-center space-x-1 px-1.5 py-0.5 bg-purple-500 text-white rounded-full'>
										<div className='font-medium text-xs'>New</div>
									</div>
								</div>
							</p>
							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/OyUZFUYoVjRKRms4cCjtA5SSivVEkovqTJdgwWi9.png?width=128'
										alt='Logo of Convy Video: Simple screen recorder that works in browser. No app, extension or registration required.'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											Convy Video
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'>
											<div className='shrink-0 flex items-center space-x-1 px-1.5 py-0.5 bg-purple-500 text-white rounded-full'>
												<div className='font-medium text-xs'>New</div>
											</div>
										</div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										Simple screen recorder that works in browser. No app,
										extension or registration required.
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'>
									<div className='flex items-center space-x-1 px-1.5 py-0.5 bg-purple-500 text-white rounded-full'>
										<div className='font-medium text-xs'>New</div>
									</div>
								</div>
							</p>

							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-none w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/jI5LcAur8dqBgTWF5TXF3Ld2qxyDALOr5UwOZNzW.png?width=128'
										alt='Logo of Podify.io: LinkedIn growth tool combining the power of content, community and newsletters'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											Podify.io
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										LinkedIn growth tool combining the power of content,
										community and newsletters
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
							</p>
							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/hm87QrmZGjIlmXchXkPvPKZNFxKI0dhE13qW0TeM.svg?width=128'
										alt='Logo of Lunroo: 45+ AI tools for social media marketing'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											Lunroo
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										45+ AI tools for social media marketing
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
							</p>
							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/pyToeYGMhjh40EaglfeSssJ92ROXf3MMBDTP7jn6.png?width=128'
										alt='Logo of Tella: Screen recording for creators — simple and powerful.'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											Tella
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'>
											<div className='shrink-0 flex items-center space-x-1 px-1.5 py-0.5 animate-pulse bg-green-200 text-green-600 rounded-full'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke-width='1.5'
													stroke='currentColor'
													className='w-3 h-3'>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'></path>
												</svg>

												<div className='font-medium text-xs'>1 deal</div>
											</div>
										</div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										Screen recording for creators — simple and powerful.
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'>
									<div className='flex items-center space-x-1 px-1.5 py-0.5 animate-pulse bg-green-200 text-green-600 rounded-full'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											className='w-3 h-3'>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'></path>
										</svg>

										<div className='font-medium text-xs'>1 deal</div>
									</div>
								</div>
							</p>
							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/Kx9TqH0VNm5i7BFul7icmseJSd4jvdZy8B4x6lpZ.png?width=128'
										alt='Logo of Marketing Strategy Generator: Perfect marketing strategy for your product in 5 minutes'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											Marketing Strategy Generator
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										Perfect marketing strategy for your product in 5 minutes
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
							</p>
							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/vkF6NjrrKV4ZDMt6KXjx11HH3Ht9Xubv6aSSBcY4.jpg?width=128'
										alt='Logo of Prezly: Software for modern PR'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											Prezly
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										Software for modern PR
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
							</p>
							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-none w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/MzomcEChJNKyecYtXhFgEby2vLuAjjtpTMqayDOM.svg?width=128'
										alt='Logo of Opulli: AI fashion model tool for fashion brands, retailers and creative agencies.'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											Opulli
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										AI fashion model tool for fashion brands, retailers and
										creative agencies.
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
							</p>
							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/hf4q1w9bb3X0wOoKCtbe07EsWlsyxjarkAl4XR8Q.png?width=128'
										alt='Logo of Taplio: The all-in-one, AI-powered LinkedIn growth tool'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											Taplio
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										The all-in-one, AI-powered LinkedIn growth tool
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
							</p>
							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/yAlDW5b88lVm9TqWMx2QmnXIN1VasUcPk2KkaZqA.png?width=128'
										alt='Logo of Launchable Studio: Get MVP in 2-4 weeks. Grow it with monthly subscription.'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											Launchable Studio
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										Get MVP in 2-4 weeks. Grow it with monthly subscription.
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
							</p>
							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/ab2HxGTQJuMkzc18otMPy2pOfudOYFBRUCOrh1kj.png?width=128'
										alt='Logo of 25.tools: One subscription, all the tools you need to launch, run and grow your startup.'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											25.tools
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'>
											<div className='shrink-0 flex items-center space-x-1 px-1.5 py-0.5 animate-pulse bg-green-200 text-green-600 rounded-full'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke-width='1.5'
													stroke='currentColor'
													className='w-3 h-3'>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'></path>
												</svg>

												<div className='font-medium text-xs'>1 deal</div>
											</div>
										</div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										One subscription, all the tools you need to launch, run and
										grow your startup.
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'>
									<div className='flex items-center space-x-1 px-1.5 py-0.5 animate-pulse bg-green-200 text-green-600 rounded-full'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											className='w-3 h-3'>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'></path>
										</svg>

										<div className='font-medium text-xs'>1 deal</div>
									</div>
								</div>
							</p>
							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/VJqXcHnqiogf0hzJdSOlJqoIfIUTTM3hGO2IfI9v.svg?width=128'
										alt='Logo of SocialDude: Your Social Media AI companion'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											SocialDude
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'>
											<div className='shrink-0 flex items-center space-x-1 px-1.5 py-0.5 animate-pulse bg-green-200 text-green-600 rounded-full'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke-width='1.5'
													stroke='currentColor'
													className='w-3 h-3'>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'></path>
												</svg>

												<div className='font-medium text-xs'>1 deal</div>
											</div>
										</div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										Your Social Media AI companion
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'>
									<div className='flex items-center space-x-1 px-1.5 py-0.5 animate-pulse bg-green-200 text-green-600 rounded-full'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											className='w-3 h-3'>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'></path>
										</svg>

										<div className='font-medium text-xs'>1 deal</div>
									</div>
								</div>
							</p>
							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/sUs41loc3iEUoWAXOQiO3F4Zpmov2P2Y1xa6dt3b.png?width=128'
										alt='Logo of GeneratedBy: Boost your productivity with generative AIs'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											GeneratedBy
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'>
											<div className='shrink-0 flex items-center space-x-1 px-1.5 py-0.5 animate-pulse bg-green-200 text-green-600 rounded-full'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke-width='1.5'
													stroke='currentColor'
													className='w-3 h-3'>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'></path>
												</svg>

												<div className='font-medium text-xs'>1 deal</div>
											</div>
										</div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										Boost your productivity with generative AIs
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'>
									<div className='flex items-center space-x-1 px-1.5 py-0.5 animate-pulse bg-green-200 text-green-600 rounded-full'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											className='w-3 h-3'>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'></path>
										</svg>

										<div className='font-medium text-xs'>1 deal</div>
									</div>
								</div>
							</p>
							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-none w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/0HbBeoeKbO7ueqqaG50GqqZ3Z4FaVQZbvHavNs0m.png?width=128'
										alt='Logo of SEO Stuff: Excellent keywords research without a monthly subscription.'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											SEO Stuff
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'>
											<div className='shrink-0 flex items-center space-x-1 px-1.5 py-0.5 animate-pulse bg-green-200 text-green-600 rounded-full'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke-width='1.5'
													stroke='currentColor'
													className='w-3 h-3'>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'></path>
												</svg>

												<div className='font-medium text-xs'>1 deal</div>
											</div>
										</div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										Excellent keywords research without a monthly subscription.
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'>
									<div className='flex items-center space-x-1 px-1.5 py-0.5 animate-pulse bg-green-200 text-green-600 rounded-full'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											className='w-3 h-3'>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'></path>
										</svg>

										<div className='font-medium text-xs'>1 deal</div>
									</div>
								</div>
							</p>
							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/mkMiJY4PWIStO95zLlHrtMPmnk1e67Nc1rVl7hQb.png?width=128'
										alt='Logo of Niceboard: Start a profitable job board for your community for free'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											Niceboard
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'>
											<div className='shrink-0 flex items-center space-x-1 px-1.5 py-0.5 animate-pulse bg-green-200 text-green-600 rounded-full'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke-width='1.5'
													stroke='currentColor'
													className='w-3 h-3'>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'></path>
												</svg>

												<div className='font-medium text-xs'>3 deals</div>
											</div>
										</div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										Start a profitable job board for your community for free
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'>
									<div className='flex items-center space-x-1 px-1.5 py-0.5 animate-pulse bg-green-200 text-green-600 rounded-full'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											className='w-3 h-3'>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'></path>
										</svg>

										<div className='font-medium text-xs'>3 deals</div>
									</div>
								</div>
							</p>
							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/6Vi6UkV1aqxR1eLtsOckm2K0LdMmxQDN6BAcbYZN.png?width=128'
										alt='Logo of My AI Front Desk: 24/7 AI Phone Receptionist: Answer calls, schedule appointments, capture leads'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											My AI Front Desk
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										24/7 AI Phone Receptionist: Answer calls, schedule
										appointments, capture leads
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
							</p>
							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/brAEiD5rovmIXadiUvipizdSMndVEpjf1n7j4cf2.png?width=128'
										alt='Logo of MarketingAI: Get a marketing plan on how to 10x your SaaS. 100% customised.'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											MarketingAI
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										Get a marketing plan on how to 10x your SaaS. 100%
										customised.
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
							</p>
							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/9Omy64KOLcSO2Cb8hQ9DNE7SFv1tmytUZ16HMF4M.png?width=128'
										alt='Logo of Job Boardly: Launch a no-code, monetizable job board instantly'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											Job Boardly
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										Launch a no-code, monetizable job board instantly
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
							</p>
							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/0uvUPHvxW8ofHTVeOI7l1HMZz7442kZHjHFEmfX1.png?width=128'
										alt='Logo of AskDocs: Quickly search, find, understand, and summarize documents'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											AskDocs
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										Quickly search, find, understand, and summarize documents
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
							</p>
							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/YfrTM3J7wowiIUGTxxxWnbYSZRILjraSt2TvxukJ.svg?width=128'
										alt='Logo of QuestWiz: Automate your customer support for startups and small business'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											QuestWiz
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										Automate your customer support for startups and small
										business
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
							</p>
							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-none w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/SJeh6BOUYL01ZWW4UBj60oRU4WDMwp8LZ5Tctsae.svg?width=128'
										alt='Logo of Interviews Chat: Your AI wingman for nailing any job interview'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											Interviews Chat
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										Your AI wingman for nailing any job interview
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
							</p>
							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/wZr5pXIPDgKW6istIrQ0BjhcEHIxWAUEC8E26bSG.png?width=128'
										alt='Logo of Hitsteps Analytics: Real-time web analytics that make sense'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											Hitsteps Analytics
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										Real-time web analytics that make sense
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
							</p>
							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/bWEoJmWreIEQpgc1P1E9MxF6FDtCCeVmyR0zDbM7.png?width=128'
										alt='Logo of AI Community: Community hub for AI enthusiasts, developers, and experts'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											AI Community
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										Community hub for AI enthusiasts, developers, and experts
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
							</p>
							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/C3P5IOOeAniOxl40GfgsXZrRxyRoHtGuwuXifNom.svg?width=128'
										alt='Logo of Montaigne: Turn your Apple Notes into a website with Montaigne'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											Montaigne
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'>
											<div className='shrink-0 flex items-center space-x-1 px-1.5 py-0.5 animate-pulse bg-green-200 text-green-600 rounded-full'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke-width='1.5'
													stroke='currentColor'
													className='w-3 h-3'>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'></path>
												</svg>

												<div className='font-medium text-xs'>1 deal</div>
											</div>
										</div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										Turn your Apple Notes into a website with Montaigne
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'>
									<div className='flex items-center space-x-1 px-1.5 py-0.5 animate-pulse bg-green-200 text-green-600 rounded-full'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											className='w-3 h-3'>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'></path>
										</svg>

										<div className='font-medium text-xs'>1 deal</div>
									</div>
								</div>
							</p>
							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-none w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/kp0lEEboXqIgFbOZJDz0qqDyRwGIbgrEeEZwYl4V.png?width=128'
										alt='Logo of public.me: Publish your Apple Reminders online.'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											public.me
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										Publish your Apple Reminders online.
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
							</p>
							<p className='relative flex items-center md:p-3 md:bg-gray-50 md:hover:shadow md:rounded-lg'>
								<div className='flex-none mr-3 rounded-[22.5%] w-16 h-16 overflow-hidden'>
									<img
										className='w-16 h-16'
										src='https://cdn.1000.tools/logos/NIEMQnlOjcQNbqYhc8m1STGpR6zAL9zOPhXo11QD.png?width=128'
										alt='Logo of Tweet Trends: Generate trending tweets with ease'
										loading='lazy'
									/>{" "}
								</div>

								<div className='flex-grow'>
									<div className='flex items-center justify-between mb-0.5'>
										<h3 className='font-bold line-clamp-1 text-ellipsis overflow-hidden'>
											Tweet Trends
										</h3>

										<div className='shrink-0 flex md:hidden items-center space-x-1'></div>
									</div>

									<p className='text-sm md:text-xs text-gray-600 line-clamp-2'>
										Generate trending tweets with ease
									</p>
								</div>

								<div className='absolute -top-2 right-3 hidden md:flex items-center space-x-1'></div>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
