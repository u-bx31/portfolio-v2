"use client";
import Image from "next/image";
import { ArrowDoodles, IllustratorProject } from "@/public/svgs";
import { stackData } from "@/lib/stack";
import {
	ExternalLinkIcon,
	GithubIcon,
	LucideLinkedin,
} from "lucide-react";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { WorkExperienceData } from "@/lib/content";

export default function About() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center py-8 px-4">
			{/* Header Section */}
			<div className="max-w-6xl w-full h-full flex flex-col lg:flex-row gap-6 md:gap-8 items-center px-0 sm:px-10 lg:px-2">
				{/* Profile Image */}
				<div className="bg-gradient-to-t from-secondary via-secondary/80 to-background relative w-full h-[280px]  lg:h-[480px] rounded-xl flex justify-center items-center overflow-hidden px-7">
					<ArrowDoodles className=" absolute left-1/2 top-1/2 -translate-x-[51%] -translate-y-3/5 scale-60  md:scale-90 lg:scale-50 stroke-accent  stroke-5 fill-white" />
					<Image
						src="/images/profile.png"
						alt="img_profile"
						width={326}
						height={572}
						className="absolute !w-[300px] !h-[280px] lg:!w-[326px] lg:!h-[572px] z-3 -bottom-3 lg:-bottom-10  object-cover "
					/>
				</div>

				{/* About */}
				<div className="flex flex-col gap-3">
					<h1 className="bg-primary py-8 px-4 md:py-14 md:px-48 text-2xl lg:text-3xl font-bold mb-4 text-center rounded-2xl">
						Oussama Labchri
					</h1>
					<div className="bg-[#252421] text-white font-light rounded-xl px-6 py-8 md:py-12 text-base md:text-lg lg:text-xl leading-relaxed">
						<p className="text-justify">
							👋 Hi! I'm Oussama Labchri. I am a junior web developer
							with a passion and interest in building fully responsive
							websites and web applications. I really enjoy building
							websites because it always makes me learn something new.
							I started learning web development in 2021. Each time I
							work on a project, I gain more knowledge about new and
							different technologies used lately.
						</p>
						<p>📍 Tetouan, Morocco</p>
					</div>
				</div>
			</div>

			{/* bottom Section */}
			<div className="max-w-6xl mt-8 w-full h-full flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch px-0 sm:px-10 lg:px-2">
				<div className="w-full flex flex-col gap-6 md:gap-8">
					{/* Stack Section*/}
					<div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8">
						<div className="px-6 h-[390px] min-[450px]:h-[320px] sm:h-[360px] relative order-2 md:order-1 bg-secondary rounded-xl w-full lg:max-w-[501px] overflow-hidden">
							<div className="bg-background -translate-x-6 translate-y-6 px-12 py-5 w-fit left-10 rounded-r-xl">
								<h3 className="font-bold text-lg mb-4">Stack</h3>
							</div>
							<div className="flex flex-wrap flex-1 translate-x-15 md:translate-x-20 -translate-y-6 -rotate-6 px-3 gap-3  justify-center ">
								{stackData.map((item, i) => {
									return (
										<div
											key={item.name}
											className={`bg-[#FAF0D5] rounded-xl p-3 flex items-center justify-center shadow-sm hover:scale-105 transition
        							w-[calc(35%-1rem)] min-[450px]:w-[calc(25%-1rem)] `}>
											<item.icon
												className="w-9 h-9 sm:w-12 sm:h-12 mx-auto"
												aria-label={item.name}
											/>
										</div>
									);
								})}
							</div>
						</div>
						<div className="w-full  md:w-[283px] relative order-1 md:order-2 gap-6 md:gap-8  antialiased flex flex-row md:flex-col items-center justify-center rounded-xl overflow-hidden">
							<div className="flex flex-1 w-full items-center bg-secondary rounded-xl p-6 ">
								<LucideLinkedin className="w-11 h-11 md:w-25 md:h-25 text-text mx-auto stroke-1" />
							</div>
							<div className="flex flex-1 w-full items-center bg-secondary rounded-xl p-6 ">
								<GithubIcon className="w-11 h-11 md:w-25 md:h-25 text-text mx-auto stroke-1 " />
							</div>
						</div>
					</div>

					{/* Work Experience section */}
					<div className="bg-gray-200 px-5 pb-5 rounded-xl">
						<div className="bg-background px-6 sm:px-12 py-5 w-fit left-10 rounded-b-xl mx-auto mb-7">
							<h3 className="font-bold text-lg ">Work experience</h3>
						</div>

						{/* content */}
						<div className="mb-4">
							{WorkExperienceData.map((item, i) => {
								return (
									<div
										key={i}
										className={`mb-6 ${
											i === WorkExperienceData.length - 1
												? "mb-0"
												: ""
										}`}>
										<div className="flex flex-col md:flex-row md:justify-between md:items-center">
											<div className="flex flex-col">
												<h3 className="text-lg font-bold">
													{item.company}
												</h3>
												<p className="text-base font-semibold">
													{item.position}
												</p>
											</div>
											<p className="text-base font-semibold">
												{item.duration}, {item.location}
											</p>
										</div>

										<p className="text-base mt-1">
											{item.description}
										</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<Link
					href={"/project"}
					className="lg:max-w-[318px] min-h-[400px] w-full p-20 flex items-center justify-center  relative bg-accent hover:bg-accent/90 rounded-xl group text-outline transition-all duration-200 ease-in-out overflow-hidden">
					<ExternalLinkIcon className="absolute top-3 right-3 z-10 w-6 h-6 text-white/60 group-hover:text-white/80 hover:text-white" />

					<h1 className="text-4xl md:text-6xl font-bold bg-white/80 group-hover:bg-white/90 transition-all duration-200 ease-in-out p-4 rounded-xl z-10">
						Projects
					</h1>
					{/* projects Mockup */}
					<>
						<Image
							src="/images/img_connectCrew.png"
							className="drop-shadow-lg drop-shadow-white/60  absolute top-0 left-0 object-cover -rotate-15"
							height={200}
							width={200}
							alt="project1"
						/>
						<Image
							src="/images/img_ipTracker.png"
							className="drop-shadow-lg drop-shadow-white/60  absolute top-20 left-50 object-cover -rotate-15"
							height={200}
							width={200}
							alt="project1"
						/>
						<Image
							src="/images/img_rps.png"
							className="drop-shadow-lg drop-shadow-white/60  absolute top-0 left-110 sm:left-130  object-cover -rotate-15"
							height={200}
							width={200}
							alt="project1"
						/>
						<Image
							src="/images/img_tipCalc.png"
							className="drop-shadow-lg drop-shadow-white/60  absolute top-60 left-20  sm:left-30 lg:left-10  object-cover -rotate-15"
							height={200}
							width={200}
							alt="project1"
						/>
						<Image
							src="/images/Landing_page1.png"
							className="drop-shadow-lg drop-shadow-white/60  absolute top-60 left-100 sm:left-120  object-cover -rotate-15"
							height={200}
							width={200}
							alt="project1"
						/>
						<Image
							src="/images/Landing_page2.png"
							className="drop-shadow-lg drop-shadow-white/60  absolute top-30 left-190 lg:top-120 lg:left-40  object-cover -rotate-15"
							height={200}
							width={200}
							alt="project1"
						/>
					</>

					<IllustratorProject className="absolute bottom-0 -left-0 !w-[240px] !h-[290px] " />
				</Link>
			</div>
		</div>
	);
}
