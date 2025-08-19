"use client";
import Image from "next/image";
import { ArrowDoodles } from "@/public/svgs";
import { stackData } from "@/lib/stack";

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
					<div className="flex flex-row justify-between gap-8">
						<div className="p-5 bg-secondary rounded-xl max-w-[501px]">
							<h2 className="text-lg font-bold mb-4">Stack</h2>
							<div className="flex flex-wrap gap-4 justify-center">
								{stackData.map((item) => (
									<div
										key={item.name}
										className="bg-white/70 flex items-center rounded-lg p-2.5">
										<item.icon
											className="w-12 h-12"
											aria-label={item.name}
										/>
									</div>
								))}
							</div>
						</div>
						<div className="w-[283px] p-4 bg-secondary rounded-xl"></div>
					</div>

					{/* Work Experience section */}
					<div className="bg-gray-200 p-5 rounded-xl">
						<h3 className="font-bold text-lg mb-4">
							Work Experience
						</h3>
						<div className="mb-4">
							<p className="text-sm font-bold">
								Jun 2023 - Oct 2023, Tetouan
							</p>
							<p className="text-sm font-semibold">
								Win Web - Internship • Full-stack Developer
							</p>
							<p className="text-sm mt-1">
								Built a full-stack project management app with
								Next.js, Laravel, Sanctum auth, and responsive UI
								using Figma and Shadcn. Optimized PostgreSQL databases
								for large-scale data and user interactions.
							</p>
						</div>
						<div>
							<p className="text-sm font-bold">
								May 2022 - Jun 2022, Tetouan
							</p>
							<p className="text-sm font-semibold">
								DiaaLand - Internship • Front-end Developer
							</p>
							<p className="text-sm mt-1">
								Developed responsive recruiting platforms using HTML,
								CSS, JS, jQuery, and Bootstrap. Designed UI/UX with
								features like live search, filtering, and form
								validation.
							</p>
						</div>
					</div>

				</div>
				<div className="max-w-[318px] w-full p-20 bg-accent rounded-xl flex items-center justify-center">
					Projects
				</div>
			</div>
		</div>
	);
}
