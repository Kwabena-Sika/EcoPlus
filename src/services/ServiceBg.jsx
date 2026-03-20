import React from "react";
import smart from "./../assets/herosmart.png";

const ServiceBg = () => {
	return (
		<>
			<div
				className="h-[60vh] md:h-screen bg-cover bg-center md:bg-center flex flex-col justify-center text-white pt-20"
				style={{ backgroundImage: `url(${smart})` }}
			>
				<h1 className="text-3xl md:text-7xl font-bold">What We Do</h1>
				<p className="max-w-[60%]"></p>
			</div>
		</>
	);
};

export default ServiceBg;
