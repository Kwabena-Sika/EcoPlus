import React from "react";
import { LocationEdit, Mail, Phone } from "lucide-react";
import tick from "./assets/tiktok.png";
import whatsapp from "./assets/app.png";
import mylinkedin from "./assets/linkedin.png";

const Footer = () => {
	return (
		<>
			<div className="md:grid grid-cols-4 gap-5 mt-10 md:p-10 p-5">
				<div className="space-y-5 mb-10">
					<h1 className="font-bold text-xl">Quick Contact</h1>
					<p className="text-gray-700">
						If you have any questions or need help, feel free to contact with
						our team
					</p>
					<div className="flex gap-2">
						<Mail />
						<p>ecoplustechnologies@gmail.com</p>
					</div>
					<div className="flex gap-2">
						<Phone />
						<p>0597361178</p>
					</div>
					<div className="flex gap-2">
						<LocationEdit />
						<p className="text-gray-700">
							Atomic Junction,Behind Atlantic Mall
						</p>
					</div>
				</div>

				<div className="space-y-4 mb-10">
					<h1 className="font-bold text-lg space-x-4">Quick Links</h1>
					<div className="flex items-center gap-10">
						<div className="space-y-4">
							<p>Home</p>
							<p>About</p>
							<p>Services</p>
						</div>
						<div className="space-y-4 ">
							<p>Contact</p>
							<p>Download Brochure</p>
						</div>
					</div>
				</div>

				<div className="space-y-4 mb-10">
					<h1 className="font-bold text-lg">Social Media</h1>
					<p>Follow us on Social Media</p>
					<div className="flex items-center">
						<img src={tick} alt="" className="h-10 w-auto" />
						<img src={whatsapp} alt="" className="w-20" />
						<img src={mylinkedin} alt="" className="w-20" />
					</div>
				</div>

				<div className="space-y-4">
					<h1 className="font-bold text-lg">Subscribe</h1>
					<p>
						If you have any questions or need help, feel free to contact with
						our team
					</p>
					<div className="flex">
						<input
							type="text"
							placeholder="Enter Email"
							className="outline-none py-2 px-5 border border-gray-200 shadow-xl"
						/>
						<button className="bg-[#82b440] px-5 py-2 text-white">Send</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
