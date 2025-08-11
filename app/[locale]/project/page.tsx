import ProjectCard from "@/components/ui/project-card";
import { Tabs } from "@/components/ui/tabs";

const Project = () => {
	const ts = [
		{
			title: "all",
			value: "all",
			content: "Details about all",
		},
		{
			title: "Landing Page",
			value: "landing-page",
			content: "Details about Landing Page",
		},
		{
			title: "Games",
			value: "games",
			content: "Details about Games",
		},
		{
			title: "Fullstack-app",
			value: "fullstack-app",
			content: "Details about Fullstack-app",
		},
		{
			title: "Study",
			value: "study",
			content: "Details about study",
		},
	];
	const projects = [
		{
			title: "Connect Crew",
			subtitle: "social networking app",
			image: "/images/img_connectCrew.png",
			link: "https://example.com",
			status: "In Progress",
			bgColor: "#1f3651",
		},
		{
			title: "Connect Crew",
			subtitle: "social networking app",
			image: "/images/img_connectCrew.png",
			bgColor: "#1f3651",
		},
		{
			title: "Connect Crew",
			subtitle: "social networking app",
			image: "/images/img_connectCrew.png",
			bgColor: "#1f3651",
		},
		{
			title: "Connect Crew",
			subtitle: "social networking app",
			image: "/images/img_connectCrew.png",
			bgColor: "#1f3651",
		},
		{
			title: "Connect Crew",
			subtitle: "social networking app",
			image: "/images/img_connectCrew.png",
			bgColor: "#1f3651",
		},
		{
			title: "Connect Crew",
			subtitle: "social networking app",
			image: "/images/img_connectCrew.png",
			bgColor: "#1f3651",
		},
	];
	return (
		<div className="container mx-auto ">
			<div className="flex flex-col gap-4">
				<div className="flex flex-col items-center justify-center overflow-clip py-2">
					<h1 className="pt-6 text-3xl font-bold  text-text-header text-center">
						Projects
					</h1>
					<Tabs
						containerClassName="md:justify-center gap-10 lg:gap-24 bg-secondary ml-5 sm:ml-0  mt-10 rounded-2xl shadow-md shadow-inner"
						tabs={ts}
					/>
				</div>

				<div className="py-10 px-4 md:px-8 lg:px-12">
					<div className="max-w-7xl mx-auto">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{projects.map((project, idx) => (
								<ProjectCard key={idx} {...project} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
