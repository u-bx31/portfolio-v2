"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Tab {
	title: string;
	value: string;
}

interface ProjectType {
	category?: string;
}

export const Tabs = ({
	tabs: propTabs,
	containerClassName,
	activeTabClassName,
	tabClassName,
	activeTab,
	setActiveTab = () => "all",
}: {
	tabs: Tab[];
	containerClassName?: string;
	activeTabClassName?: string;
	tabClassName?: string;
	activeTab?: string;
	setActiveTab?: React.Dispatch<React.SetStateAction<string>>;
}) => {

	const moveSelectedTabToTop = (idx: number) => {
		const newTabs = [...propTabs];
		const selectedTab = newTabs.splice(idx, 1);
		newTabs.unshift(selectedTab[0]);
		setActiveTab(newTabs[0].value);
	};

	const [hovering, setHovering] = useState(false);

	return (
		<div
			className={cn(
				"flex flex-row items-center justify-start relative overflow-auto sm:overflow-visible no-visible-scrollbar w-full sm:w-fit px-3 md:px-7 py-2 ",
				containerClassName
			)}>
			{propTabs.map((tab, idx) => (
				<button
					key={tab.title}
					onClick={() => {
						moveSelectedTabToTop(idx);
					}}
					onMouseEnter={() => setHovering(true)}
					onMouseLeave={() => setHovering(false)}
					className={cn(
						"relative px-4 py-2.5 rounded-xl hover:bg-white/40 hover:dark:bg-zinc-800/40 fade-in-10 fade-out-10 cursor-pointer",
						tabClassName
					)}
					style={{
						transformStyle: "preserve-3d",
					}}>
					{activeTab === tab.value && (
						<motion.div
							layoutId="clickedbutton"
							transition={{
								type: "spring",
								bounce: 0.3,
								duration: 0.6,
							}}
							className={cn(
								"absolute inset-0 bg-white/80 dark:bg-zinc-800/80 rounded-xl ",
								activeTabClassName
							)}
						/>
					)}

					<span className="relative text-sm text-nowrap md:text-base block text-black dark:text-white">
						{tab.title}
					</span>
				</button>
			))}
		</div>
	);
};
