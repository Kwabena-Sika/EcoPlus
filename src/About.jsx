import { NavLink } from "react-router";
import cctv from "./assets/camera.png";

const About = () => {
	return (
		<div className="p-5 md:flex ">
			<div className="md:w-[60%] leading-relaxed ">
				<h1 className="text-4xl font-bold">
					Your Eyes May Not Always catch Everything But our Cameras are always
					Watching{" "}
				</h1>
				<p className="text-zinc-600 mt-4">
					Security today requires more than just cameras—it requires intelligent
					systems designed to protect what matters most. At EcoPlus, we deliver
					advanced security technologies including smart surveillance, access
					control, and integrated monitoring solutions built for homes and
					businesses. Our focus on innovation, reliability, and performance
					allows our clients to stay protected while maintaining full control of
					their security environment.
				</p>

				<p className="text-zinc-600 mt-2">
					From the moment you choose EcoPlus, our experienced technicians handle
					everything with precision. We install your system professionally,
					configure it for maximum protection, and guide you through how to
					monitor and manage your security with ease and confidence.
				</p>

				<div className="mt-5">
					<p className="text-2xl text-zinc-600 font-semibold">
						More Protection With Monitoring
					</p>
					<div className="md:flex gap-10 list-none leading-loose">
						<div className="">
							<div></div>
							<li className="border-b border-zinc-300 p-5">
								Smart Home Security
							</li>
							<li className="border-b border-zinc-300 p-5">
								AI-Powered Threat Detection
							</li>
							<li className="border-b border-zinc-300 p-5">
								Real-Time Security Notification Alerts
							</li>
						</div>
						<div className="">
							<li className="border-b border-zinc-300 p-5">
								Doorbell Video Cameras
							</li>
							<li className="border-b border-zinc-300 p-5">
								Burglar Sensor Detection
							</li>
							<li className="border-b border-zinc-300 p-5">
								24/7 Alarm Monitoring{" "}
							</li>
						</div>
					</div>

					<div className="space-y-4 md:flex md:gap-10 items-center mt-10 space-x-5">
						<NavLink to={"/services"}>
							<button className="bg-[#82b440] md:px-10 px-5 py-4 hover:bg-[#202d32] text-white cursor-pointer">
								Products And Solutions
							</button>
						</NavLink>

						<NavLink to={"/contact"}>
							<button className="bg-[#202d32] text-[#ffff] py-4 px-10 hover:bg-[#82b440] cursor-pointer">
								Contact Us
							</button>
						</NavLink>
					</div>
				</div>
			</div>
			<div className="mt-10">
				<img src={cctv} alt="" />
			</div>
		</div>
	);
};

export default About;
