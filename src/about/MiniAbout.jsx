import React from "react";
import Time from "./../assets/clockin.png";
import WhyChooseUs from "./WhyChooseUs";
import OurProcess from "./OurProcess";
import {
	Binoculars,
	CheckCircle,
	HeartHandshake,
	Leaf,
	Target,
} from "lucide-react";

const MiniAbout = () => {
	return (
		<>
			<div className="md:p-20 md:flex mt-5 p-3">
				<div className="md:w-[60%] space-y-4">
					<h1 className="text-5xl font-bold md:max-w-[80%] leading-12">
						Our Story
					</h1>
					<p className="text-zinc-600 mt-3 leading-relaxed ">
						At EcoPlus Technologies, we believe technology should make life
						easier, safer, and more efficient. Yet many businesses and homes
						still struggle with complicated systems, unreliable installations,
						and solutions that don't truly meet their needs.
					</p>

					<p className="text-zinc-600 leading-relaxed">
						We saw a gap between the technology available and the people who
						actually need simple, reliable solutions. That realization inspired
						the creation of EcoPlus Technologies
					</p>

					<p className="text-zinc-600 leading-relaxed">
						Our mission is to help businesses and individuals adopt smart
						solutions that improve security, simplify operations, and create
						better control over their spaces.
					</p>

					<p className="text-zinc-600 leading-relaxed">
						Our philosophy is simple:{" "}
						<span className="font-bold text-[#82b440]">
							Live Smart, Live Green.
						</span>
						By embracing smarter technology and responsible innovation, we help
						build environments that are safer, more efficient, and ready for the
						future
					</p>

					<button className="bg-[#202d32] text-[#ffff] px-10 py-4">
						Download Brochure
					</button>
				</div>
				<div className="md:w-[40%] mt-5">
					<img src={Time} alt="" />
				</div>
			</div>

			<div className="md:flex md:p-10 gap-3 space-y-3 mt-2">
				<div className="bg-white shadow-xl p-6 hover:bg-[#82b440] hover:shadow-xl transition-shadow duration-300 md:h-[70vh] md:w-3/5 hover:text-white ">
					<Target size={60} />
					<p className="font-bold text-2xl mt-10">Mission</p>
					<p className="leading-relaxed mt-4 ">
						Our core Mission is to help business, organizations, homes owners do
						more with less effort using intelligent technologies
					</p>
				</div>

				<div className="bg-white shadow-xl p-6 hover:bg-[#82b440] hover:shadow-xl transition-shadow duration-300 md:h-[70vh] md:w-3/5 hover:text-white ">
					<Binoculars size={60} />
					<p className="font-bold text-2xl mt-10">Vision</p>
					<p className="leading-relaxed mt-4">
						We want a future where every smart choice is also a green choice
					</p>
				</div>

				<div className="bg-white shadow-xl p-6 hover:bg-[#82b440] hover:shadow-xl transition-shadow duration-300 md:h-[70vh] md:w-3/5 hover:text-white ">
					<HeartHandshake size={60} />
					<p className="font-bold text-2xl mt-10">Values</p>
					<div className="leading-relaxed mt-4 space-y-4">
						<div className="flex gap-3">
							<CheckCircle />
							<p>Innovation</p>
						</div>
						<div className="flex gap-3">
							<CheckCircle />
							<p>Reliability</p>
						</div>
						<div className="flex gap-3">
							<CheckCircle />
							<p>Customer Focus</p>
						</div>
					</div>
				</div>

				<div className="bg-white shadow-xl p-6 hover:bg-[#82b440] hover:shadow-xl transition-shadow duration-300 md:h-[70vh] md:w-3/5 hover:text-white ">
					<Leaf size={60} />
					<p className="font-bold text-2xl mt-10">Sustainability Goals</p>
					<div className="leading-relaxed mt-4 space-y-4">
						<div className="flex gap-3">
							<CheckCircle />
							<p>Energy Efficiency</p>
						</div>
						<div className="flex gap-3">
							<CheckCircle />
							<p>Responsible Technology</p>
						</div>
						<div className="flex gap-3">
							<CheckCircle />
							<p>Future Innovation</p>
						</div>
					</div>
				</div>
			</div>

			<WhyChooseUs />
			<OurProcess />
		</>
	);
};

export default MiniAbout;
