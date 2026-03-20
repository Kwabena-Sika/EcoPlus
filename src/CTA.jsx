import { Phone } from "lucide-react";
import React from "react";
import whatsapp from "./assets/app.png";

const CTA = () => {
	return (
		<div className="flex justify-center flex-col items-center text-center">
			<h1 className="md:text-4xl text-2xl font-semibold">
				Protect Your Home Or Business With Our Unique Solutions
			</h1>

			<div className="flex items-center justify-center mt-4">
				<div>
					<img src={whatsapp} alt="" className="w-20" />
				</div>
				<div className="ml-3">
					<p>Call 24Hrs/7Days</p>
					<p>+233 59 265 7381</p>
				</div>
			</div>
		</div>
	);
};

export default CTA;
