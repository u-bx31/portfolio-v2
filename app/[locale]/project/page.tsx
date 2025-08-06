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
	return (
		<div className="container mx-auto ">
			<div className="flex flex-col items-center justify-center overflow-clip">
				<h1 className="pt-6 text-3xl font-bold  text-text-header text-center">
					Projects
				</h1>
				<Tabs
					containerClassName="md:justify-center gap-10 lg:gap-28 bg-secondary ml-5 sm:ml-0  mt-10 px-3 lg:px-7 py-1 rounded-lg shadow-sm"
					tabs={ts}
				/>
			</div>
		</div>
	);
};

export default Project;
