"use client";
import { cn } from "@/lib/utils";
import { MenuIcon, X } from "lucide-react";

import {
	motion,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from "motion/react";
import Link from "next/link";

import React, { useRef, useState } from "react";

interface NavbarProps {
	children: React.ReactNode;
	className?: string;
}

interface NavBodyProps {
	children: React.ReactNode;
	className?: string;
	visible?: boolean;
}

interface NavItemsProps {
	items: {
		name: string;
		link: string;
	}[];
	className?: string;
	onItemClick?: () => void;
}

interface MobileNavProps {
	children: React.ReactNode;
	className?: string;
	visible?: boolean;
}

interface MobileNavHeaderProps {
	children: React.ReactNode;
	className?: string;
}

interface MobileNavMenuProps {
	children: React.ReactNode;
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollY } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});
	const [visible, setVisible] = useState<boolean>(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest > 80) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	});

	return (
		<motion.div
			ref={ref}
			// IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
			className={cn(
				"sticky inset-x-0 top-5 md:top-10 z-40 w-full",
				className
			)}>
			{React.Children.map(children, (child) =>
				React.isValidElement(child)
					? React.cloneElement(
							child as React.ReactElement<{ visible?: boolean }>,
							{ visible }
					  )
					: child
			)}
		</motion.div>
	);
};

export const NavBody = ({
	children,
	className,
	visible,
}: NavBodyProps) => {
	return (
		<motion.div
			animate={{
				backdropFilter: visible ? "blur(5px)" : "none",
				boxShadow: visible
					? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
					: "none",
				width: visible ? "70%" : "100%",
				y: visible ? 20 : 0,
			}}
			transition={{
				type: "spring",
				stiffness: 200,
				damping: 50,
			}}
			style={{
				minWidth: "800px",
			}}
			className={cn(
				"relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-2xl bg-transparent px-4 py-2 lg:flex dark:bg-transparent",
				visible && "bg-white/60 dark:bg-neutral-950/80",
				className
			)}>
			{children}
		</motion.div>
	);
};

export const NavItems = ({
	items,
	className,
	onItemClick,
}: NavItemsProps) => {
	const [hovered, setHovered] = useState<number | null>(null);

	return (
		<motion.div
			onMouseLeave={() => setHovered(null)}
			className={cn(
				"absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
				className
			)}>
			{items.map((item, idx) => (
				<Link
					onMouseEnter={() => setHovered(idx)}
					onClick={onItemClick}
					className="relative px-4 py-2 text-text "
					key={`link-${idx}`}
					href={item.link}>
					{hovered === idx && (
						<motion.div
							layoutId="hovered"
							className="absolute inset-0 h-full w-full rounded-full bg-accent/30"
						/>
					)}
					<span className="relative z-20">{item.name}</span>
				</Link>
			))}
		</motion.div>
	);
};

export const MobileNav = ({
	children,
	className,
	visible,
}: MobileNavProps) => {
	return (
		<motion.div
			animate={{
				backdropFilter: visible ? "blur(10px)" : "none",
				boxShadow: visible
					? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
					: "none",
				width: visible ? "90%" : "100%",
				paddingRight: visible ? "12px" : "0px",
				paddingLeft: visible ? "12px" : "0px",
				borderRadius: visible ? "4px" : "2rem",
				y: visible ? 20 : 0,
			}}
			transition={{
				type: "spring",
				stiffness: 200,
				damping: 50,
			}}
			className={cn(
				"relative z-50 mx-auto flex !rounded-lg w-full sm:max-w-[calc(100vw-1rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
				visible && "bg-white/80 dark:bg-neutral-950/80",
				className
			)}>
			{children}
		</motion.div>
	);
};

export const MobileNavHeader = ({
	children,
	className,
}: MobileNavHeaderProps) => {
	return (
		<div
			className={cn(
				"flex w-full flex-row items-center justify-between",
				className
			)}>
			{children}
		</div>
	);
};

export const MobileNavMenu = ({
	children,
	className,
	isOpen,
	onClose,
}: MobileNavMenuProps) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className={cn(
						"absolute inset-x-0 top-20 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
						className
					)}>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
};
const genericHamburgerLine = `h-1 w-6 my-[1.5px] rounded-full bg-[#714016] transition ease transform duration-300`;
export const MobileNavToggle = ({
	isOpen,
	onClick,
}: {
	isOpen: boolean;
	onClick: () => void;
}) => {
	return (
		<button
			className="flex flex-col h-10 w-10 rounded justify-center items-center group"
			onClick={onClick}>
			<div
				className={`${genericHamburgerLine} ${
					isOpen
						? "rotate-45 translate-y-[7px] group-hover:opacity-100"
						: "group-hover:opacity-100"
				}`}
			/>
			<div
				className={`${genericHamburgerLine} ${
					isOpen ? "opacity-0" : "group-hover:opacity-100"
				}`}
			/>
			<div
				className={`${genericHamburgerLine} ${
					isOpen
						? "-rotate-45 -translate-y-[7px] group-hover:opacity-100"
						: "group-hover:opacity-100"
				}`}
			/>
		</button>
	);
};

export const NavbarLogo = () => {
	return (
		<Link
			href="/"
			className="relative z-20 sm:mr-4 flex items-center space-x-2 px-1 sm:px-2 py-1 text-sm font-normal text-black">
			<img
				className="w-16 h-11 min-w-16 min-h-11 lg:w-[105px]"
				src="/logo.svg"
				alt="logo"
			/>
		</Link>
	);
};

export const NavbarButton = ({
	href,
	as: Tag = "a",
	children,
	className,
	...props
}: {
	href?: string;
	as?: React.ElementType;
	children: React.ReactNode;
	className?: string;
} & (
	| React.ComponentPropsWithoutRef<"a">
	| React.ComponentPropsWithoutRef<"button">
)) => {
	return (
		<Tag
			href={href || undefined}
			className={
				"bg-accent px-4 py-2 rounded-full text-lg font-normal relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center shadow-sm " +
				className
			}
			{...props}>
			{children}
		</Tag>
	);
};
