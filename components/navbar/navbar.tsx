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
import { routing } from "@/i18n/routing";
import { useLocale, useMessages, useTranslations } from "next-intl";

export function NavbarDemo() {
	const t = useTranslations("Navbar"); // Assuming this JSON is under `navbar.json`
	const items = t.raw("item"); // Get raw array (not translated string)

	const resolvedItems = items.map((item: any) => ({
		...item,
		path:
			item.path === "__RESUME_LINK__"
				? process.env.NEXT_PUBLIC_RESUME_LINK
				: item.path,
	}));

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const locale = useLocale();
	const LangList: string[] = [...routing.locales];
	return (
		<Navbar>
			{/* Desktop Navigation */}

			<NavBody>
				<NavbarLogo />
				<NavItems items={resolvedItems} />
				<div className="flex items-center z-4 gap-[1px] bg-accent rounded-lg ">
					<ThemeButton />
					<Combobox
						defaultValue={locale}
						list={LangList}
						className="bg-accent text-gray-900  hover:bg-white/50 shadow-none rounded-l-sm rounded-r-lg "
					/>
				</div>
			</NavBody>

			{/* Mobile Navigation */}
			<MobileNav>
				<MobileNavHeader>
					<NavbarLogo />
					<div className="flex items-center z-4 gap-[1px] bg-accent rounded-lg mx-2">
						<ThemeButton />
						<Combobox
							list={LangList}
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
					{resolvedItems.map(
						(item: { name: string; link: "string" }, idx: number) => (
							<a
								key={`mobile-link-${idx}`}
								href={item.link}
								onClick={() => setIsMobileMenuOpen(false)}
								className="relative text-neutral-600 dark:text-neutral-300">
								<span className="block">{item.name}</span>
							</a>
						)
					)}
				</MobileNavMenu>
			</MobileNav>
		</Navbar>
	);
}
