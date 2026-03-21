import React, { useState } from "react";
import mylock from "./../assets/lock.png";
import mydoorbell from "./../assets/doorbell.mp4";
import bb from "./../assets/boombarriers.png";
import mycams from "./../assets/cams.png";
import {
	BuildingIcon,
	CheckCircle,
	ChurchIcon,
	Home,
	HomeIcon,
	SchoolIcon,
} from "lucide-react";
import smarthome from "./../assets/smart.mp4";
import smartspeakers from "./../assets/speakers.png";
import robot from "./../assets/robot.png";
import FireAlarm from "./../assets/firealarm.mp4";
import solar from "./../assets/solar.mp4";
import battery from "./../assets/battery.png";
import plant from "./../assets/plant.png";
import clockin from "./../assets/time.mp4";
import barcode from "./../assets/barcode.png";
import router from "./../assets/router.mp4";
import wifi from "./../assets/wifi.png";
import mobile from "./../assets/mobile.png";
import mobile1 from "./../assets/mobile1.png";
import { NavLink } from "react-router";
const ServiceContent = () => {
	const [activeStep, setActiveStep] = useState(1);
	return (
		<>
			<div className="md:flex md:p-20">
				<div className="md:w-[45%] space-y-10">
					<div className="bg-white shadow-2xl p-10 space-y-5">
						<h1 className="text-2xl font-semibold">Services</h1>
						<div
							onClick={() => setActiveStep(1)}
							className={` cursor-pointer p-5 hover:bg-[#82b440] ${activeStep === 1 ? "text-white bg-[#82b440] font-semibold" : "bg-black text-white"}`}
						>
							<p>Security System</p>
						</div>

						<div
							onClick={() => setActiveStep(7)}
							className={` cursor-pointer p-5 hover:bg-[#82b440] ${activeStep === 7 ? "text-white bg-[#82b440] font-semibold" : "bg-black text-white"}`}
						>
							<p>Fire Detection & Life Safety</p>
						</div>

						<div
							onClick={() => setActiveStep(2)}
							className={` cursor-pointer p-5 hover:bg-[#82b440] ${activeStep === 2 ? "text-white bg-[#82b440]" : "bg-black text-white"}`}
						>
							<p>Smart Home Systems</p>
						</div>
						<div
							onClick={() => setActiveStep(3)}
							className={` cursor-pointer p-5 hover:bg-[#82b440] ${activeStep === 3 ? "text-white bg-[#82b440]" : "bg-black text-white"}`}
						>
							<p>Energy Solutions</p>
						</div>

						<div
							onClick={() => setActiveStep(4)}
							className={` cursor-pointer  p-5 hover:bg-[#82b440] ${activeStep === 4 ? "text-white bg-[#82b440]" : "bg-black text-white"}`}
						>
							<p>Business Solution</p>
						</div>

						<div
							onClick={() => setActiveStep(5)}
							className={` cursor-pointer p-5 hover:bg-[#82b440] ${activeStep === 5 ? "text-white bg-[#82b440]" : "bg-black text-white"}`}
						>
							<p>Connectivity & Network Installation</p>
						</div>

						<div
							onClick={() => setActiveStep(6)}
							className={` cursor-pointer p-5 hover:bg-[#82b440] ${activeStep === 6 ? "text-white bg-[#82b440]" : "bg-black text-white"}`}
						>
							<p>Software Integration & Automation</p>
						</div>
					</div>

					<div className=" hidden bg-[#82b440] p-5 text-white space-y-4">
						<h1 className="font-bold text-2xl">
							Tailored Solutions For Your Security Priorities
						</h1>
						<p>
							We will design, install, and upgrade solutions to meet business
							specific needs and budgets from large.
						</p>

						<div>
							<p>+233 59 265 7381</p>
						</div>

						<button className="bg-white text-black px-5 py-2 hover:bg-black font-bold hover:text-white">
							Contact Us
						</button>
					</div>
				</div>

				{activeStep === 1 && (
					<div className="md:w-full md:pl-10 p-10 space-y-10">
						<h1 className="text-2xl font-semibold tracking-wide">Overview</h1>
						<p className="leading-relaxed text-zinc-700">
							At EcoPlus Technologies, we design and implement smart security
							systems that protect people, property, and valuable assets. From
							intelligent surveillance cameras to advanced access control and
							intrusion detection, our solutions help you monitor, manage, and
							secure your environment with confidence. Whether for homes,
							offices, schools, warehouses, or commercial facilities, we provide
							reliable systems that keep you aware, in control, and protected at
							all times.
						</p>

						<h1 className="text-2xl font-bold ">
							Protect What Matters With Our Smart Security Solution{" "}
						</h1>

						<div className="md:grid md:grid-cols-2 gap-10">
							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">CCTV Surveillance</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Access Control System</p>
								</div>

								<div className=" text-black p-4 border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Boom Barriers</p>
								</div>
							</div>

							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">Intrution & Alarm Systems</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Motion Sensors</p>
								</div>

								<div className=" text-black p-4 border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Door or Window Sensors</p>
								</div>
							</div>
						</div>
						<video
							src={mydoorbell}
							alt=""
							className="md:w-[50%]"
							controls
							autoPlay
							loop
							muted
						/>

						<h1 className="text-2xl font-bold ">
							Protect What Matters With Our Smart Security Solution
						</h1>
						<div className="md:grid md:grid-cols-2 gap-4">
							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">Video DoorBells</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Car Tracking or GPS Tracking</p>
								</div>

								<div className=" text-black p-4 border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Electric Fencing</p>
								</div>
							</div>

							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">Video Intercom</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Automatic Gate System</p>
								</div>

								<div className=" text-black p-4 border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Asset Protection System</p>
								</div>
							</div>
						</div>

						<div className="md:flex md:gap-10 space-y-4">
							<img src={bb} alt="" className="md:w-[50%]" />
							<img src={mycams} alt="" className="md:w-[50%]" />
						</div>
					</div>
				)}

				{activeStep === 2 && (
					<div className="w-full md:pl-10 space-y-10">
						<h1 className="text-2xl font-semibold tracking-wide">
							Smart Home Systems
						</h1>
						<p className="leading-relaxed text-zinc-700">
							Bring your home to life with smart technology that you can control
							right from your fingertips. With EcoPlus Smart Home Systems, you
							can manage your lights, security, cameras, door locks, and
							appliances using your smartphone or tablet. Whether you are at
							home or away, you stay connected and in control. Our systems make
							your home safer, more convenient, and energy efficient. Enjoy a
							modern home experiences designed to fit your lifestyle
						</p>

						<h1 className="text-2xl font-bold ">
							Bringing Your Home To Life At Your FingerTips
						</h1>

						<div className="md:grid md:grid-cols-2 gap-10">
							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">Smart Lighting Systems</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Smart Switches and Plugs</p>
								</div>

								<div className=" text-black p-4 border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Smart Door Locks</p>
								</div>
							</div>

							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">Smart Speakers & Voice Assistant</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Smart Kitchen Appliance</p>
								</div>

								<div className=" text-black p-4 border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Smart Restaurant Robot[waiters Robot]</p>
								</div>
							</div>
						</div>
						<video
							src={smarthome}
							alt=""
							className="md:w-[50%]"
							controls
							autoPlay
							loop
							muted
						/>

						<h1 className="text-2xl font-bold ">
							Experience a Home That Takes Care of You-And Itself
						</h1>
						<div className="md:grid md:grid-cols-2 gap-4">
							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">Save Money on Bills</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Keep Your Family Comfortable</p>
								</div>
							</div>

							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">Get Peace of Mind While Travelling</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Never Worry if You Left Something On</p>
								</div>
							</div>
						</div>

						<div className="md:flex md:gap-10 space-y-5">
							<img src={smartspeakers} alt="" className="md:w-[50%]" />
							<img src={robot} alt="" className="md:w-[50%]" />
						</div>
					</div>
				)}

				{activeStep === 3 && (
					<div className="w-full md:pl-10 space-y-10">
						<h1 className="text-3xl font-bold tracking-wide ">
							Say GoodBye to High Electricity Bills
						</h1>
						<p className="leading-relaxed text-zinc-700">
							Take control of how your home or business uses power with smart
							energy solutions from EcoPlus. We provide efficient systems that
							help you generate, store, and manage electricity better. From
							solar power to backup and energy-saving technologies, our
							solutions help you reduce waste and lower your electricity costs.
							Enjoy reliable power while using energy in a smarter and more
							sustainable way.
						</p>

						<h1 className="text-2xl font-bold ">
							Let the Sun Power Your Home or Office
						</h1>

						<div className="md:grid md:grid-cols-2 gap-10">
							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">Solar Panel Installation</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Solar Battery Storage</p>
								</div>

								<div className=" text-black p-4 border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Inverter & Backup Systems</p>
								</div>
							</div>

							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">Energy Monitoring Systems</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Hybrid Power Systems</p>
								</div>

								<div className=" text-black p-4 border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Energy Efficient Lighting- LED System</p>
								</div>
							</div>
						</div>
						<video
							src={solar}
							alt=""
							className="md:w-[50%]"
							controls
							autoPlay
							loop
							muted
						/>

						<h1 className="text-2xl font-bold ">
							Why EcoPlus Energy Makes a Difference
						</h1>
						<div className="md:grid md:grid-cols-2 gap-4">
							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">Reliable Power</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Less Energy Waste</p>
								</div>
							</div>

							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">Lower Electriciy Bills</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Long-Term Savings</p>
								</div>
							</div>
						</div>

						<div className="md:flex gap-10">
							<img src={battery} alt="" className="md:w-[50%]" />
							<img src={plant} alt="" className="md:w-[50%]" />
						</div>
					</div>
				)}

				{activeStep === 4 && (
					<div className="w-full md:pl-10 space-y-10">
						<h1 className="text-3xl font-bold tracking-wide ">
							Business Solutions
						</h1>
						<p className="leading-relaxed text-zinc-700">
							Take control of how your home or business uses power with smart
							energy solutions from EcoPlus. We provide efficient systems that
							help you generate, store, and manage electricity better. From
							solar power to backup and energy-saving technologies, our
							solutions help you reduce waste and lower your electricity costs.
							Enjoy reliable power while using energy in a smarter and more
							sustainable way.
						</p>

						<h1 className="text-2xl font-bold ">
							Save Time By Automating Everyday Task With Our Business Solutions
						</h1>

						<div className="md:grid grid-cols-2 gap-10">
							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">Time Attendance System</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Point of Sale</p>
								</div>

								<div className=" text-black p-4 border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Visitor Management System</p>
								</div>
							</div>

							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">Queue Management System</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Digital Display System</p>
								</div>

								<div className=" text-black p-4 border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Business Reporting Dashboard </p>
								</div>
							</div>
						</div>
						<video
							src={clockin}
							alt=""
							className="md:w-[50%]"
							controls
							autoPlay
							loop
							muted
						/>

						<h1 className="text-2xl font-bold ">
							Why Our Solution Makes a Difference
						</h1>
						<div className="md:grid md:grid-cols-2 gap-4">
							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">Save time by automating everyday task</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Keep Everything organized in one place</p>
								</div>
							</div>

							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">Make faster, smarter decision</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">
										Grow your business with scalable, flexible systems
									</p>
								</div>
							</div>
						</div>

						<div className="md:flex gap-10">
							<img src={barcode} alt="" className="md:w-[50%]" />
							<img src={plant} alt="" className="md:w-[50%]" />
						</div>
					</div>
				)}

				{activeStep === 5 && (
					<div className="w-full md:pl-10 space-y-10">
						<h1 className="text-3xl font-bold tracking-wide ">
							Connectivity and Network Installation
						</h1>
						<p className="leading-relaxed text-zinc-700">
							At EcoPlus, we provide reliable connectivity and network
							installation services that keep your business running smoothly.
							From setup to optimization, we ensure your system are fast,
							secure, and always connected so you team can work without
							interruptions
						</p>

						<h1 className="text-2xl font-bold ">Our Solutions</h1>

						<div className="md:grid grid-cols-2 gap-10">
							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">Router and Wi-Fi installation</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Structured cabling and network setup</p>
								</div>
							</div>

							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">Netwrok troubleshooting</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">
										Secure network configuration and access control
									</p>
								</div>
							</div>
						</div>
						<video
							src={router}
							alt=""
							className="md:w-[50%]"
							controls
							autoPlay
							loop
							muted
						/>

						<h1 className="text-2xl font-bold ">
							Why Our Solution Makes a Difference
						</h1>
						<div className="md:grid md:grid-cols-2 gap-4">
							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">
										Fast and stable connections you can rely on
									</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">
										Tailored setups designed for your business needs
									</p>
								</div>
							</div>

							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">
										Strong security to protect your data and systems
									</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">
										Ongoing support to keep everything running at its best
									</p>
								</div>
							</div>
						</div>

						<div className="md:flex gap-10">
							<img src={barcode} alt="" className="md:w-[50%]" />
							<img src={wifi} alt="" className="md:w-[50%]" />
						</div>
					</div>
				)}

				{activeStep === 6 && (
					<div className="w-full md:pl-10 space-y-10">
						<h1 className="text-3xl font-bold tracking-wide ">
							Software Integration and Automation
						</h1>
						<p className="leading-relaxed text-zinc-700">
							At EcoPlus, we help businesses bring all their software and
							systems together into one connected environment. Our integration
							solutions ensure your tools communicate effectively, your data
							synchronized, and your operations run smoothly without unncessary
							manual work.
						</p>

						<h1 className="text-2xl font-bold ">Our Solutions</h1>

						<div className="md:grid grid-cols-2 gap-10">
							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">
										API integration between platform and applications
									</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">
										CRM, ERP, and third-party software integration
									</p>
								</div>
							</div>

							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">
										Data synchronization and workflow automation
									</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">
										Custom integration solution tailored to business needs
									</p>
								</div>
							</div>
						</div>
						<video
							src={clockin}
							alt=""
							className="md:w-[50%]"
							controls
							autoPlay
							loop
							muted
						/>

						<h1 className="text-2xl font-bold ">
							Why Our Solution Makes a Difference
						</h1>
						<div className="md:grid md:grid-cols-2 gap-4">
							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">
										Seamless communication between all your systems
									</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Reduced manual work through automation</p>
								</div>
							</div>

							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">
										Strong security to protect your data and systems
									</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Real-time, accurate data across platform</p>
								</div>
							</div>
						</div>

						<div className="md:flex gap-10">
							<img src={mobile1} alt="" className="md:w-[50%]" />
							<img src={mobile} alt="" className="md:w-[50%]" />
						</div>
					</div>
				)}

				{activeStep === 7 && (
					<div className="md:w-full md:pl-10 space-y-10">
						<h1 className="text-2xl font-semibold tracking-wide">
							Fire Detection & Life Safety Systems
						</h1>
						<p className="leading-relaxed text-zinc-700">
							Protect your property and the people inside with reliable fire
							detection and life safety system from EcoPlus. Our systems quickly
							detect smoke, heat, or fire and alert you immediately so action
							can be taken fast. We install smart alarms and monitoring systems
							designed to keep homes and businesses safe at all times. With
							early warning and rapid alets, you can prevent damage and save
							lives. Stay protected with dependable fire safety technology
						</p>

						<h1 className="text-2xl font-bold ">Early Detection Saves Life </h1>

						<div className="md:grid md:grid-cols-2 gap-10">
							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">Smoke Detectors</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Heat Detectors</p>
								</div>

								<div className=" text-black p-4 border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Fire Alarms</p>
								</div>
							</div>

							<div className="space-y-4">
								<div className=" text-black p-4 border-t border-gray-100 flex gap-4 items-center">
									<CheckCircle />
									<p className="">Sprinkler System controls</p>
								</div>

								<div className=" text-black p-4  border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Emergency exit lighting</p>
								</div>

								<div className=" text-black p-4 border-t border-gray-200 flex gap-4">
									<CheckCircle />
									<p className="">Gas leak Detectors</p>
								</div>
							</div>
						</div>
						<video
							src={FireAlarm}
							alt=""
							className="md:w-[50%] w-full"
							controls
							autoPlay
							loop
							muted
						/>
					</div>
				)}
			</div>

			<div className="md:grid md:grid-cols-3 gap-5 mb-10">
				<div className="bg-white shadow-xl p-6 hover:bg-[#82b440] hover:shadow-xl transition-shadow duration-300 md:h-[70vh]  hover:text-white w-full">
					<ChurchIcon size={80} />
					<p className="font-bold text-2xl mt-10">Churches</p>
					<p className="leading-relaxed mt-4">
						Clever security system connects your security, CCTV, lights, locks
						and more, for true seamless automation and control
					</p>
				</div>

				<div className="bg-white shadow-xl p-6 hover:bg-[#82b440] hover:shadow-xl transition-shadow duration-300 md:h-[70vh]  hover:text-white w-full">
					<SchoolIcon size={80} />
					<p className="font-bold text-2xl mt-10">Schools</p>
					<p className="leading-relaxed mt-4">
						Clever security system connects your security, CCTV, lights, locks
						and more, for true seamless automation and control
					</p>
				</div>

				<div className="bg-white shadow-xl p-6 hover:bg-[#82b440] hover:shadow-xl transition-shadow duration-300 md:h-[70vh] w-full hover:text-white ">
					<HomeIcon size={80} />
					<p className="font-bold text-2xl mt-10">Office Buildings</p>
					<p className="leading-relaxed mt-4">
						Clever security system connects your security, CCTV, lights, locks
						and more, for true seamless automation and control
					</p>
				</div>

				<div className="bg-white shadow-xl p-6 hover:bg-[#82b440] hover:shadow-xl transition-shadow duration-300 md:h-[70vh] w-full hover:text-white ">
					<SchoolIcon size={80} />
					<p className="font-bold text-2xl mt-10">Homes</p>
					<p className="leading-relaxed mt-4">
						Clever security system connects your security, CCTV, lights, locks
						and more, for true seamless automation and control
					</p>
				</div>
				<div className="bg-white shadow-xl p-6 hover:bg-[#82b440] hover:shadow-xl transition-shadow duration-300 md:h-[70vh] w-full hover:text-white ">
					<Home size={80} />
					<p className="font-bold text-2xl mt-10">Retail Shops</p>
					<p className="leading-relaxed mt-4 ">
						Clever security system connects your security, CCTV, lights, locks
						and more, for true seamless automation and control
					</p>
				</div>
				<div className="bg-white shadow-xl p-6 hover:bg-[#82b440] hover:shadow-xl transition-shadow duration-300 md:h-[70vh] w-full hover:text-white ">
					<BuildingIcon size={80} />
					<p className="font-bold text-2xl mt-10">Warehouse</p>
					<p className="leading-relaxed mt-4">
						Clever security system connects your security, CCTV, lights, locks
						and more, for true seamless automation and control
					</p>
				</div>
			</div>

			<div
				className="relative h-screen bg-cover bg-center flex flex-col justify-center text-white "
				style={{ backgroundImage: `url(${mylock})` }}
			>
				<div className="absolute inset-0 bg-linear-to-r  from-[#70b43a]/90 via-[#70b43a]/90 to-[#70b43a]/90"></div>

				<div className="relative z-10 text-white text-center space-y-10">
					<p className="text-6xl font-semibold max-w-[70%] text-center m-auto">
						We Are just a Call Away
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

export default ServiceContent;
