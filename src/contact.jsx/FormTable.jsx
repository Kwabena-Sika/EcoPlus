import React from "react";
import mylock from "./../assets/lock.png";
import { LocationEdit, Mail, Phone } from "lucide-react";
import mylinkedin from "./../assets/linkedin.png";
import tick from "./../assets/tiktok.png";
import whatsapp from "./../assets/app.png";
const FormTable = () => {
	return (
		<>
			<div className="p-5 md:p-10 md:flex gap-20">
				<div
					className="relative h-[80vh] md:w-[40%] bg-cover bg-center text-white "
					style={{ backgroundImage: `url(${mylock})` }}
				>
					<div className="absolute inset-0 bg-linear-to-r  from-[#70b43a]/90 via-[#70b43a]/90 to-[#70b43a]/90"></div>

					<div className="relative z-10 text-white p-10 ">
						<p className=" m-auto text-2xl font-semibold">
							Tailored Solutions For Your Security Priorities
						</p>
						<p className="text-md font-semibold">
							We will design, install, and upgrade solutions to meet business
							specific needs and budgets from large
						</p>
					</div>

					<div className="relative z-10 text-white p-10 ">
						<p className=" m-auto  font-semibold">
							Emergency Line: +233 59 265 7381
						</p>
						<p className="text-md font-semibold">
							Location: Atomic Junction Behind Atlantic Mall
						</p>
						<p className="text-md font-semibold">Mon - Fri: 8:00am - 6:00pm</p>
						<button className="mt-5 bg-black px-10 py-4">Contact Us</button>
					</div>
				</div>

				<form action="" className="space-y-10">
					<div>
						<h1 className="font-bold text-2xl">Get in Touch</h1>
						<p className="mt-3 text-zinc-500">
							We Take great Pride in Everything that we do, control over
							products allows us to ensure our customers receive the best
							quality service
						</p>
					</div>
					<div className="md:flex md:justify-between md:gap-5 space-y-4">
						<input
							type="text"
							placeholder="Name"
							className="outline-none  px-5 py-2 border border-gray-200 w-full"
						/>
						<input
							type="text"
							placeholder="Email"
							className="outline-none  px-5 py-2 border border-gray-200 w-full"
						/>
					</div>

					<div className="md:flex md:justify-between md:gap-5 space-y-4">
						<input
							type="text"
							placeholder="0244579636"
							className="outline-none  px-5 py-2 border border-gray-200 w-full"
						/>
						<input
							type="text"
							placeholder="Select your service"
							className="outline-none  px-5 py-2 border border-gray-200 w-full"
						/>
					</div>

					<div>
						<textarea
							name=""
							id=""
							placeholder="Additional Details"
							className="outline-none  px-5 py-2 border border-gray-200 w-full h-full"
						></textarea>
					</div>

					<button
						type="submit"
						className="bg-black py-5 px-8 text-white font-semibold "
					>
						Submit Request
					</button>
				</form>
			</div>

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

export default FormTable;
