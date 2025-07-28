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
import { ChevronDown, Moon } from "lucide-react";
import { useState } from "react";
import { Combobox } from "../ui/combo-box";
import { Button } from "../ui/button";

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
			name: "Contact",
			link: "#contact",
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
				<div className="flex items-center z-4 gap-4">
					<NavbarButton>Resume</NavbarButton>
					<NavbarButton className="!px-3">
						<Moon className="w-6 h-6" />
					</NavbarButton>
					<Combobox list={list} />
				</div>
			</NavBody>

			{/* Mobile Navigation */}
			<MobileNav>
				<MobileNavHeader>
					<NavbarLogo />
					<MobileNavToggle
						isOpen={isMobileMenuOpen}
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					/>
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
					<div className="flex w-full flex-col gap-4">
						<NavbarButton
							onClick={() => setIsMobileMenuOpen(false)}
							className="w-full">
							Resume
						</NavbarButton>
					</div>
				</MobileNavMenu>
			</MobileNav>
		</Navbar>
	);
}
