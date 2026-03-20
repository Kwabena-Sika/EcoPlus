import React from "react";
import time from "./assets/clockin.png";
import cctv from "./assets/cctvcamera.svg";
import fire from "./assets/firealarm.svg";
import smart from "./assets/smarthome.svg";
import control from "./assets/controlaccess.svg";
const TimeAttendance = () => {
	return (
		<>
			<div className="md:p-20 md:flex mt-5 p-3">
				<div className="md:w-[60%]">
					<p className="font-semibold text-xl">
						Time Attendance Made Effortless
					</p>
					<h1 className="text-3xl md:text-5xl font-bold md:max-w-[80%] md:leading-12 mb-5">
						Time Theft Is A Crime. We're The Witness
					</h1>
					<p className="text-zinc-600  leading-relaxed ">
						Know if an employee is truly clocking in for themselves—or having a
						friend do it. Biometric and PIN-based systems ensure the person
						clocking in is actually the person standing there.
					</p>
					<p className="text-zinc-600 mt-5  mb-10 leading-relaxed ">
						Automate Payroll Calculations: Eliminate manual timesheets and
						guesswork. The system tracks clock-ins and clock-outs to calculate
						exact work hours for error-free payroll.
					</p>

					<button className="bg-[#202d32] text-[#ffff] px-10 py-4">
						Start a Quote
					</button>
				</div>
				<div className="md:w-[40%] mt-5">
					<img src={time} alt="" />
				</div>
			</div>

			<div className="md:flex md:p-10 gap-3 space-y-3 mt-2">
				<div className="bg-white shadow-xl p-6 hover:bg-[#82b440] hover:shadow-xl transition-shadow duration-300 md:h-[70vh] md:w-3/5 hover:text-white ">
					<img src={cctv} alt="" className="w-[25%] text-center" />
					<p className="font-bold text-2xl mt-10">Smarter Business Security</p>
					<p className="leading-relaxed mt-4 ">
						Clever security system connects your security, CCTV, lights, locks
						and more, for true seamless automation and control
					</p>
				</div>

				<div className="bg-white shadow-xl p-6 hover:bg-[#82b440] hover:shadow-xl transition-shadow duration-300 md:h-[70vh] md:w-3/5 hover:text-white ">
					<img src={fire} alt="" className="w-[25%] text-center" />
					<p className="font-bold text-2xl mt-10">
						Fire Detection & Life Safety
					</p>
					<p className="leading-relaxed mt-4 ">
						Clever security system connects your security, CCTV, lights, locks
						and more, for true seamless automation and control
					</p>
				</div>

				<div className="bg-white shadow-xl p-6 hover:bg-[#82b440] hover:shadow-xl transition-shadow duration-300 md:h-[70vh] md:w-3/5 hover:text-white ">
					<img src={smart} alt="" className="w-[25%] text-center" />
					<p className="font-bold text-2xl mt-10">Smart Home Systems</p>
					<p className="leading-relaxed mt-4  hover:text-white">
						Clever security system connects your security, CCTV, lights, locks
						and more, for true seamless automation and control
					</p>
				</div>

				<div className="bg-white shadow-xl p-6 hover:bg-[#82b440] hover:shadow-xl transition-shadow duration-300 md:h-[70vh] md:w-3/5 hover:text-white ">
					<img src={control} alt="" className="w-[25%] text-center" />
					<p className="font-bold text-2xl mt-10">Access Control</p>
					<p className="leading-relaxed mt-4 hover:text-white">
						Clever security system connects your security, CCTV, lights, locks
						and more, for true seamless automation and control
					</p>
				</div>
			</div>
		</>
	);
};

export default TimeAttendance;
