'use client'

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { MoonIcon, SunIcon } from "lucide-react";

export default function Navbar() {
	const [languageSpanish, setLanguageSpanish] = useState(true);
	const [darkMode, setDarkMode] = useState(true);
	console.log({ darkMode })
	console.log({ languageSpanish })

	return (
		<nav className="fixed w-full h-16 z-10">
			<div className="container h-full flex justify-end items-center border-b border-gray-200 bg-black">
				{/* <div className="flex justify-center w-32">
					<div className="flex items-center justify-center space-x-1">
						<MoonIcon className="w-8 h-5" />
						<Switch
							id="theme-mode"
							onClick={() => setDarkMode(!darkMode)}
						/>
						<SunIcon className="w-8 h-5" />
					</div>
				</div> */}
				<div className="flex justify-center w-32">
					<div className="flex items-center justify-center space-x-2">
						<div className="w-8">
							ESP
						</div>
						<Switch
							id="language-mode"
							onClick={() => setLanguageSpanish(!languageSpanish)}
						/>
						<div className="w-8">
							ENG
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}