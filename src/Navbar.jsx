import React from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { NavLink } from "react-router";
import { useState } from "react";
import whatsapp from "./assets/app.png";
import logo from "./assets/ecologo.png";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed w-full z-50 backdrop-blur-md bg-black/80 border-b border-white/20">
			<div className="flex justify-between items-center px-6 py-2 text-white">
				<div>
					<img src={logo} alt="" className="w-20" />
				</div>

				<div className="hidden md:flex gap-10">
					<NavLink
						to={"/"}
						className={({ isActive }) =>
							isActive ? "text-green-400" : "hover:text-green-400"
						}
					>
						Home
					</NavLink>
					<NavLink
						to={"/about"}
						className={({ isActive }) =>
							isActive ? "text-green-400" : "hover:text-green-400"
						}
					>
						About
					</NavLink>

					<NavLink
						to={"/services"}
						className={({ isActive }) =>
							isActive ? "text-green-400" : "hover:text-green-400"
						}
					>
						Services
					</NavLink>

					<NavLink
						to={"/contact"}
						className={({ isActive }) =>
							isActive ? "text-green-400" : "hover:text-green-400"
						}
					>
						Contact
					</NavLink>
				</div>

				<div className="hidden md:flex items-center  text-xs">
					<a
						href="https://wa.me/233592657381"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={whatsapp} alt="" className="w-15  mr-2" />
					</a>
					<div className="flex flex-col leading-tight">
						<p>+233 59 265 7381</p>
						<p>ecoplustechnologies@gmail.com</p>
					</div>
				</div>

				<div className="md:hidden">
					{isOpen ? (
						<XIcon onClick={() => setIsOpen(false)} />
					) : (
						<MenuIcon onClick={() => setIsOpen(true)} />
					)}
				</div>
			</div>
			{isOpen && (
				<div className="flex flex-col px-4 gap-6 py-6 backdrop-blur-xl bg-white border-t border-white/20  text-xl">
					<NavLink to={"/"}>
						<p
							onClick={() => setIsOpen(false)}
							className="font-semibold hover:text-[#82b440]"
						>
							Home
						</p>
					</NavLink>
					<NavLink to={"/about"}>
						<p
							onClick={() => setIsOpen(false)}
							className="font-semibold hover:text-[#82b440]"
						>
							About
						</p>
					</NavLink>

					<NavLink to={"/services"}>
						<p
							onClick={() => setIsOpen(false)}
							className="font-semibold hover:text-[#82b440]"
						>
							Service
						</p>
					</NavLink>

					<NavLink to={"/contact"}>
						<p
							onClick={() => setIsOpen(false)}
							className="font-semibold hover:text-[#82b440]"
						>
							Contact
						</p>
					</NavLink>

					<div className="flex items-center  text-xs">
						<a
							href="https://wa.me/233592657381"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={whatsapp} alt="" className="w-15  mr-2" />
						</a>

						<div className="flex flex-col leading-tight">
							<p>+233 59 265 7381</p>
							<p>ecoplustechnologies@gmail.com</p>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
