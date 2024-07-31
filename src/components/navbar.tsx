import Link from "next/link";

export default function Navbar({ lang }: { lang: string }) {
	return (
		<nav className="fixed w-full h-16 z-10">
			<div className="container h-full flex justify-end items-center border-b border-gray-200 bg-black">
				<div className="flex justify-center w-32">
					<div className="flex items-center justify-center space-x-2">
						<Link href="/es">
							<p className={lang === 'es' ? 'text-main-300 underline' : ''}>
								Español
							</p>
						</Link>
						<p className='text-main-900'>
							/
						</p>
						<Link href="/en">
							<p className={lang === 'en' ? 'text-main-300 underline' : ''}>
								English
							</p>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}