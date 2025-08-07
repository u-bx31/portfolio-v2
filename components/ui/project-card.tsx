"use client";

import {
	ExternalLinkIcon,
	GithubIcon,
	Link2Icon,
	LinkIcon,
	PlusIcon,
} from "lucide-react"; // optional icon lib
import {
	MorphingDialog,
	MorphingDialogClose,
	MorphingDialogContainer,
	MorphingDialogContent,
	MorphingDialogDescription,
	MorphingDialogImage,
	MorphingDialogSubtitle,
	MorphingDialogTitle,
	MorphingDialogTrigger,
} from "./morph-dialog";
import Link from "next/link";

interface CardProps {
	title: string;
	subtitle: string;
	image: string;
	link?: string;
	status?: string; // Optional status for project
	bgColor?: string; // Optional background color
}

export default function ProjectCard({
	title,
	subtitle,
	image,
	link,
	status,
}: {
	title: string;
	subtitle: string;
	image: string;
	link?: string;
	status?: string;
}) {
	return (
		<>
			<MorphingDialog
				transition={{
					type: "spring",
					bounce: 0.05,
					duration: 0.25,
				}}>
				{/* === Card Trigger Styled Like ProjectCard === */}
				<MorphingDialogTrigger className="relative group flex flex-col overflow-hidden rounded-xl bg-[#1f3651]  shadow-md hover:shadow-lg">
					{/* Top-right external link icon */}
					<a
						href={link || "#"}
						target="_blank"
						rel="noopener noreferrer"
						className="absolute top-3 right-3 z-10">
						<ExternalLinkIcon className="w-5 h-5 text-white/70 hover:text-white" />
					</a>

					{/* Content Area */}
					<div className="flex grow items-end justify-between p-4">
						<div className="flex flex-col justify-start items-start">
							<MorphingDialogTitle className="text-white font-semibold text-lg">
								{title}
							</MorphingDialogTitle>
							<MorphingDialogSubtitle className="text-white/70 text-sm">
								{subtitle}
							</MorphingDialogSubtitle>
						</div>
					</div>

					{/* Card Image */}
					<MorphingDialogImage
						src={image}
						alt={title}
						className="w-full translate-x-12 h-48 min-[416px]:h-60 sm:h-60 md:h-52 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
					/>

					{/* Optional Status Badge */}
					{status && (
						<span className="absolute bottom-3 left-3 bg-yellow-400 text-black text-xs font-medium px-2 py-1 rounded-full">
							{status}
						</span>
					)}
				</MorphingDialogTrigger>

				{/* === Dialog Container === */}
				<MorphingDialogContainer>
					<MorphingDialogContent className="pointer-events-auto p-6 flex h-[calc(100vh-10rem)] w-full flex-col overflow-auto  no-visible-scrollbar rounded-3xl border border-white/10 bg-[#1f3651] lg:w-[90%] xl:w-[70%]">
						<div className="flex flex-col lg:flex-row gap-4 items-center ">
							<MorphingDialogImage
								src={image}
								alt={title}
								className="w-full h-[30vh] sm:h-[50vh] md:h-[60vh] lg:h-[50vh] object-contain"
							/>
							<div className="flex flex-col gap-3 md:gap-5 w-full ">
								<div className="flex flex-col gap-2">
									<MorphingDialogTitle className="text-3xl lg:text-5xl font-bold text-white">
										{title}
									</MorphingDialogTitle>
									<MorphingDialogSubtitle className="text-white/90 text-lg">
										{subtitle}
									</MorphingDialogSubtitle>
								</div>

								{/* Tech Stack */}
								<div className="flex flex-wrap gap-2 mb-3">
									{[
										"Next.js 14",
										"Tailwind CSS",
										"TypeScript",
										"Mongodb",
										"UploadThing",
										"Clerk",
										"Shadcn/ui",
									].map((tech) => (
										<span
											key={tech}
											className="bg-white/10 text-white/80 text-xs px-2 py-1 rounded-md">
											{tech}
										</span>
									))}
								</div>

								{/* links */}
								<div className="flex items-center gap-4 ">
									<a
										href={"#"}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-1 text-white/80 hover:text-white transition">
										<GithubIcon className="w-4 h-4 md:w-5 md:h-5" />
										<span className="text-sm md:text-base">
											View on GitHub
										</span>
									</a>

									<a
										href={"#"}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-1 text-white/80 hover:text-white transition">
										<LinkIcon className="w-4 h-4 md:w-5 md:h-5" />
										<span className="text-sm md:text-base">
											Live Demo
										</span>
									</a>
								</div>
							</div>
						</div>

						<div className="mt-8">
							<MorphingDialogDescription
								disableLayoutAnimation
								variants={{
									initial: { opacity: 0, scale: 0.8, y: 100 },
									animate: { opacity: 1, scale: 1, y: 0 },
									exit: { opacity: 0, scale: 0.8, y: 100 },
								}}>
								<p className="mt-2 text-white/60">
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Sed saepe qui in eveniet ipsum aut nesciunt
									omnis voluptatibus facilis facere illo molestiae,
									adipisci ex quam, vero itaque quia perspiciatis
									voluptate nulla culpa autem ducimus vel laboriosam
									at! Praesentium, nisi quibusdam autem quae enim
									eveniet illum velit asperiores modi amet, quod
									consequatur quos ut beatae accusantium alias aliquam
									cupiditate esse quia rem optio, non dolorum
									temporibus similique. Vero, corrupti deleniti nihil
									doloribus odio aliquid, dolorum enim ducimus,
									numquam asperiores deserunt expedita. Id itaque
									tempora aspernatur veritatis natus fuga architecto!
									Error enim repellat in iste nisi, labore pariatur
									iusto similique magnam, delectus, perspiciatis
									temporibus! Libero ex, tempore cupiditate ad
									suscipit sint in voluptatibus, totam praesentium aut
									minus. Aliquid rem sequi ex ipsum laudantium
									praesentium cupiditate recusandae vel rerum ratione
									dolorum iste ipsam assumenda corrupti, architecto
									omnis fugiat. Architecto quibusdam laborum ducimus
									autem commodi voluptatum tempora iure incidunt.
									Similique amet quae adipisci, natus dolor rerum quos
									ullam quam quibusdam doloribus eveniet vitae iusto,
									assumenda ex porro. Adipisci a repellat, quas autem,
									corrupti mollitia distinctio explicabo beatae
									aliquam cum, consequuntur suscipit est! Eveniet
									placeat delectus fuga cupiditate, et minus sapiente
									omnis, quia dicta, veniam ut sed sit nam! Rem
									similique voluptatibus laborum soluta quia ab
									doloremque harum quibusdam eum! Nobis eos qui
									perspiciatis obcaecati sit libero, tenetur labore,
									commodi sed quis repellat reprehenderit eaque
									dignissimos et recusandae optio maxime deserunt
									animi nisi explicabo impedit fugiat consequatur.
									Cumque delectus ipsum ut quisquam officia provident
									atque, repellat, quaerat placeat suscipit tempora
									eum commodi ad obcaecati? Maiores illum hic
									provident consequuntur aut iusto? Sed deserunt
									officiis reiciendis, necessitatibus voluptatibus
									nulla ipsa eius fugiat. Id debitis dignissimos illo
									nesciunt quis deleniti consequuntur. Facilis amet
									mollitia laborum quibusdam vero molestias suscipit
									voluptate eos, aliquam vel sunt perferendis? Magnam
									numquam est, inventore molestias vero dolore esse
									perferendis itaque. Laborum, qui?
								</p>
							</MorphingDialogDescription>
						</div>
						<MorphingDialogClose className="text-white absolute top-4 right-4" />
					</MorphingDialogContent>
				</MorphingDialogContainer>
			</MorphingDialog>
		</>
	);
}
