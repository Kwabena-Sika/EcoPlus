import React from "react";
import myLock from "./assets/lock.png";
import { CircleCheck } from "lucide-react";

const Thief = () => {
	return (
		<div className="md:p-20 p-3">
			<div className="text-center">
				<p>Find Peace of mind With Smart Home Security System</p>
				<h1 className="md:text-4xl text-2xl font-bold">
					Your Door Lets People In. But Are You Sure It's An Employee?
				</h1>
			</div>

			<div className="md:flex">
				<div className="mt-10 w-[90%] md:p-10">
					<p className="text-[#82b440] font-bold text-lg">
						Total Control over securing Your Business
					</p>
					<p className=" text-4xl leading-normal font-bold">
						Securing Every Entry With Trusted Protocols
					</p>
					<div className="mt-10">
						<p className="text-zinc-300 text-xl leading-relaxed">
							We help you take full control of who enters your home or business.
							From doors to gates, our access solutions make it easy to manage,
							monitor, and secure every entry point—giving you peace of mind and
							keeping the right people in, and the rest out.
						</p>
					</div>
					<div className="mt-10 font-semibold leading-loose space-y-5">
						<div>
							<CircleCheck />
							<p>
								Restrict Access Instantly: Grant or revoke entry permission
								remotely in real time
							</p>
						</div>

						<div>
							<CircleCheck />
							<p>
								Total Entry Visibility:Know Exactly who entered whihc door and
								exactly when they did it
							</p>
						</div>

						<div>
							<CircleCheck />
							<p>Ditch the metal Keys and Go Keyless & Credential Free</p>
						</div>
					</div>
				</div>
				<div className="mt-10  ">
					<div className="">
						<img src={myLock} alt="" className="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Thief;
