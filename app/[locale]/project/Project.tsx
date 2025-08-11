"use client";
import { useState } from "react";
import { tabsData, projectsData } from "@/lib/content";
import ProjectCard from "@/components/ui/project-card";
import { Tabs } from "@/components/ui/tabs";

export default function ProjectComp() {
	const [activeTab, setActiveTab] = useState("all");

	const filteredProjects =
		activeTab === "all"
			? projectsData
			: projectsData.filter((p) => p.category === activeTab);

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col items-center py-2 overflow-clip">
				<h1 className="pt-6 text-3xl font-bold text-text-header text-center">
					Projects
				</h1>
				<Tabs
					containerClassName="sm:justify-center gap-10 lg:gap-24 bg-secondary mt-10 ml-5 sm:ml-0 rounded-2xl shadow-md shadow-inner"
					tabs={tabsData}
          activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
			</div>

			<div className="py-10 px-4 sm:px-10">
				<div className="max-w-7xl mx-auto ">
					<div className="flex flex-wrap justify-center gap-6">
						{filteredProjects.map((project, idx) => (
							<ProjectCard cardClassName="w-full  md:w-[290px] l xl:w-[380px] 2xl:w-[410px]" key={idx} {...project} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
