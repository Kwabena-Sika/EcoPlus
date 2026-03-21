import { Quote, Star } from "lucide-react";
import React from "react";
import ratings from "./assets/star.png";
const Testimonial = () => {
	return (
		<div className="p-10">
			<h1 className="text-center text-2xl">What Customers Say About Us</h1>
			<div className="md:flex gap-5 mt-10 space-y-3">
				<div className="bg-white shadow-lg p-5">
					<div className="mb-5">
						<Quote size={40} className="text-gray-200" />
					</div>

					<div>
						<p className="mb-5 text-zinc-500">
							EcoPlus transformed the way we manage our business operations.
							Their solutions are reliable and easy to use
						</p>
						<div className="flex">
							<img src={ratings} alt="" className="h-20 w-auto" />
						</div>
						<p className="font-bold text-sm">Mr. Kofi </p>
						<span className="text-sm text-gray-700">MD Lesson Pharmacy</span>
					</div>
				</div>

				<div className="bg-white shadow-lg p-5">
					<div className="mb-5">
						<Quote size={40} className="text-gray-200" />
					</div>

					<div>
						<p className="mb-5 text-zinc-500">
							Working with EcoPlus has been a great experience. Their team is
							responsive and truly understands our needs
						</p>
						<div className="flex">
							<img src={ratings} alt="" className="h-20 w-auto" />
						</div>
						<p className="font-bold text-SM">Mrs. Eunice </p>
						<span className="text-sm text-gray-700">
							HR Ghana Insurers Association
						</span>
					</div>
				</div>

				<div className="bg-white shadow-lg p-5">
					<div className="mb-5">
						<Quote size={40} className="text-gray-200" />
					</div>

					<div>
						<p className="mb-5 text-zinc-500">
							Thanks to EcoPlus, our security and efficiency have improved
							significantly. Highly recommended!
						</p>
						<div className="flex">
							<img src={ratings} alt="" className="h-20 w-auto" />
						</div>
						<p className="font-bold text-lg">Mrs. Amina </p>
						<span className="text-sm text-gray-700">
							Accountant Kanda Technical Institute
						</span>
					</div>
				</div>

				<div className="bg-white shadow-lg p-5">
					<div className="mb-5">
						<Quote size={40} className="text-gray-200" />
					</div>

					<div>
						<p className="mb-5 text-zinc-500">
							EcoPlus delivers exactly what they promise-smart, practical, and
							effective solutions for modern businesses.
						</p>
						<div className="flex">
							<img src={ratings} alt="" className="h-20 w-auto" />
						</div>
						<p className="font-semibold text-lg">Mr. Comrade Naziru </p>
						<span className="text-sm text-gray-700">MD Dunia Microfinance</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
