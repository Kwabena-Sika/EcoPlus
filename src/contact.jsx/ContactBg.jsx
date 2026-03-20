import React from "react";
import mycontact from "./../assets/contact.png";

const ContactBg = () => {
	return (
		<>
			<div
				className="h-[60vh] md:h-screen bg-cover bg-center md:bg-center flex flex-col justify-center text-white"
				style={{ backgroundImage: `url(${mycontact})` }}
			>
				<h1 className="text-5xl md:text-7xl font-bold">Contact Us</h1>
				<p className="max-w-[60%]">
					If you have any queries or questions feel free to reach out
				</p>
			</div>
		</>
	);
};

export default ContactBg;
