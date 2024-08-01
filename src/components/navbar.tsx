"use client"
import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";

export default function Navbar({ lang }: { lang: string }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<nav ref={ref} className="fixed w-full h-16 z-10">
			<div
				className="container h-full flex justify-end items-center border-b border-gray-200 bg-black"
				style={{
					transform: isInView ? "none" : "translateX(200px)",
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
				}}
			>
				<div className="flex justify-center w-32">
					<div className="flex items-center justify-center space-x-2">
						<Link href="/es">
							<p
								className={lang === 'es' ? 'text-main-300 underline' : ''}
								style={{
									transform: isInView ? "none" : "translateX(200px)",
									opacity: isInView ? 1 : 0,
									transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
								}}
							>
								Español
							</p>
						</Link>
						<p
							className='text-main-900'
							style={{
								transform: isInView ? "none" : "translateX(200px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
							}}
						>/</p>
						<Link href="/en">
							<p
								className={lang === 'en' ? 'text-main-300 underline' : ''}
								style={{
									transform: isInView ? "none" : "translateX(200px)",
									opacity: isInView ? 1 : 0,
									transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
								}}
							>
								English
							</p>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}