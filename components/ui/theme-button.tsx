"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "next-themes";

export default function ThemeButton() {
	const { setTheme, resolvedTheme } = useTheme();
	const [dark, setDark] = useState<boolean>();
	useEffect(() => {
		setDark(true);
	}, []);

	if (!dark) {
		return null; // Avoids hydration mismatch on SSR
	}
	return (
		<div>
			<Toggle
				className="group data-[state=on]:hover:bg-white/50  size-9 bg-transparent hover:bg-white/50 cursor-pointer rounded-l-lg rounded-r-sm "
				pressed={resolvedTheme === "dark"}
				onPressedChange={() =>
					setTheme(resolvedTheme === "dark" ? "light" : "dark")
				}
				aria-label={`Switch to ${
					resolvedTheme === "dark" ? "dark" : "Light"
				} mode`}>
				{/* Note: After dark mode implementation, rely on dark: prefix rather than group-data-[state=on]: */}
				<MoonIcon
					size={16}
					className="shrink-0 stroke-gray-900   scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
					aria-hidden="true"
				/>
				<SunIcon
					size={16}
					className="absolute stroke-gray-900  shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
					aria-hidden="true"
				/>
			</Toggle>
		</div>
	);
}
