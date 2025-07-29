"use client";

import { useEffect, useState } from "react";
import { Circle, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./button";

export default function ThemeButton() {
	const { setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div>
			<Button
				className="group  size-9 bg-transparent hover:bg-white/50 cursor-pointer rounded-l-lg rounded-r-sm "
				onClick={() =>
					setTheme(resolvedTheme === "dark" ? "light" : "dark")
				}>
				{/* Show SunIcon when dark, MoonIcon when light */}
				{mounted ? (
					resolvedTheme === "dark" ? (
						<SunIcon
							size={16}
							className="stroke-gray-900 shrink-0 transition-all animate-out duration-600"
							aria-hidden="true"
						/>
					) : (
						<MoonIcon
							size={16}
							className="stroke-gray-900 shrink-0 transition-all animate-out duration-600"
							aria-hidden="true"
						/>
					)
				) : (
					<Circle
						size={10}
						className="stroke-gray-900 shrink-0 transition-all duration-600"
					/>
				)}
			</Button>
		</div>
	);
}
