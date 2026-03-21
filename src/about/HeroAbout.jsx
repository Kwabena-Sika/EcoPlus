import React from "react";
import { NavLink } from "react-router";
import mylock from "./../assets/lock.png";
import MiniAbout from "./MiniAbout";

const HeroAbout = () => {
	return (
		<>
			<MiniAbout />

			<div
				className="relative h-screen bg-cover bg-center flex flex-col justify-center text-white "
				style={{ backgroundImage: `url(${mylock})` }}
			>
				<div className="absolute inset-0 bg-linear-to-r  from-[#70b43a]/90 via-[#70b43a]/90 to-[#70b43a]/90"></div>

				<div className="relative z-10 text-white text-center ">
					<p className="text-6xl font-semibold md:max-w-[70%] text-center m-auto">
						Don't Wait For Break In.{" "}
					</p>
					<p className="text-6xl font-semibold md:max-w-[70%] text-center m-auto mt-4">
						Call Us Now !!
					</p>
					<NavLink to={"/contact"}>
						<button className="mt-5 bg-black px-10 py-4 cursor-pointer">
							Contact Us
						</button>
					</NavLink>
				</div>
			</div>
		</>
	);
};

export default HeroAbout;
