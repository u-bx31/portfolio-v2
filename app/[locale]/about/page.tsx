"use client";
import Image from "next/image";
import { ArrowDoodles } from "@/public/svgs";
import { stackData } from "@/lib/stack";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function About() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center py-8 px-4">
			{/* Header Section */}
			<div className="max-w-6xl w-full h-full flex flex-col lg:flex-row gap-8 items-center px-0 sm:px-10 lg:px-2">
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
					<div className="bg-black text-white font-light rounded-xl px-6 py-8 md:py-12 text-base md:text-lg lg:text-xl leading-relaxed">
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
			<div className="max-w-6xl mt-8 w-full h-full flex flex-col lg:flex-row gap-8 items-stretch px-0 sm:px-10 lg:px-2">
				<div className="w-full flex flex-col gap-8">
					{/* Stack Section*/}
					<div className="flex flex-col md:flex-row justify-between gap-8">
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
						<div className="w-full  md:w-[283px] bg-primary relative order-1 md:order-2 p-4  antialiased flex items-center justify-center rounded-xl overflow-hidden">
							<div className="relative z-10 text-base min-[364px]:!text-xl md:text-2xl  bg-background/60 px-1 py-3 rounded-lg text-text  text-center font-sans font-bold">
								{`< Fueled by coffee and 'clean' code />`}
							</div>
							<BackgroundBeams />
						</div>
					</div>

					{/* Work Experience section */}
					<div className="bg-gray-200 p-5 rounded-xl">
						<h3 className="font-bold text-lg mb-4">
							Work Experience
						</h3>
						<div className="mb-4">
							<p className="text-base font-bold">
								Jun 2023 - Oct 2023, Tetouan
							</p>
							<p className="text-base font-semibold">
								Win Web - Internship • Full-stack Developer
							</p>
							<p className="text-base mt-1">
								Built a full-stack project management app with
								Next.js, Laravel, Sanctum auth, and responsive UI
								using Figma and Shadcn. Optimized PostgreSQL databases
								for large-scale data and user interactions.
							</p>
						</div>
						<div>
							<p className="text-base font-bold">
								May 2022 - Jun 2022, Tetouan
							</p>
							<p className="text-base font-semibold">
								DiaaLand - Internship • Front-end Developer
							</p>
							<p className="text-base mt-1">
								Developed responsive recruiting platforms using HTML,
								CSS, JS, jQuery, and Bootstrap. Designed UI/UX with
								features like live search, filtering, and form
								validation.
							</p>
						</div>
					</div>
				</div>
				<Link
					href={"/project"}
					className="max-w-[318px] w-full relative p-20 bg-accent rounded-xl flex items-center group justify-center text-outline transition-all duration-150 ease-in-out ">
					<ExternalLinkIcon className=" absolute top-3 right-3 z-10 w-5 h-5 text-white/60 group-hover:text-white/80 hover:text-white" />

					<h1 className="text-6xl font-bold ">Projects</h1>
				</Link>
			</div>
		</div>
	);
}
