"use client";
import {
	Navbar,
	NavBody,
	NavItems,
	MobileNav,
	NavbarLogo,
	NavbarButton,
	MobileNavHeader,
	MobileNavToggle,
	MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { Moon } from "lucide-react";
import { useState } from "react";
import { Combobox } from "../ui/combo-box";
import ThemeButton from "../ui/theme-button";

export function NavbarDemo() {
	const navItems = [
		{
			name: "Home",
			link: "#home",
		},
		{
			name: "About",
			link: "#about",
		},
		{
			name: "Projects",
			link: "/project",
		},
		{
			name: "Contact",
			link: "#contact",
		},
		{
			name: "Resume",
			link: "#Resume",
		},
	];

	const list = [
		{
			value: "en",
			label: "En",
			default: true,
		},
		{
			value: "fr",
			label: "Fr",
			default: true,
		},
	];

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<Navbar>
			{/* Desktop Navigation */}

			<NavBody>
				<NavbarLogo />
				<NavItems items={navItems} />
				<div className="flex items-center z-4 gap-[1px] bg-accent rounded-lg ">
					<ThemeButton />
					<Combobox
						list={list}
						className="bg-accent text-gray-900  hover:bg-white/50 shadow-none rounded-l-sm rounded-r-lg "
					/>
				</div>
			</NavBody>

			{/* Mobile Navigation */}
			<MobileNav>
				<MobileNavHeader>
					<NavbarLogo />
					<div className="flex items-center z-4 gap-[1px] bg-accent rounded-lg ">
						<ThemeButton />
						<Combobox
							list={list}
							className="bg-accent hover:bg-white/50 shadow-none rounded-l-sm rounded-r-lg "
						/>
						<MobileNavToggle
							isOpen={isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						/>
					</div>
				</MobileNavHeader>

				<MobileNavMenu
					isOpen={isMobileMenuOpen}
					onClose={() => setIsMobileMenuOpen(false)}>
					{navItems.map((item, idx) => (
						<a
							key={`mobile-link-${idx}`}
							href={item.link}
							onClick={() => setIsMobileMenuOpen(false)}
							className="relative text-neutral-600 dark:text-neutral-300">
							<span className="block">{item.name}</span>
						</a>
					))}
				</MobileNavMenu>
			</MobileNav>
		</Navbar>
	);
}
