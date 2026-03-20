import Hero from "./Hero";
import hero from "./assets/herobg.png";
import About from "./About";
import Thief from "./Thief";
import TimeAttendance from "./TimeAttendance";
import Testimonial from "./Testimonial";
import CTA from "./CTA";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Home = () => {
	return (
		<>
			<Navbar />
			<div
				className="h-screen bg-cover bg-center flex flex-col justify-center text-white"
				style={{ backgroundImage: `url(${hero})` }}
			>
				<Hero />
			</div>
			<div className="pt-10">
				<About />
				<div className="bg-[#161616] mt-10 text-white">
					<Thief />
				</div>
				<div>
					<TimeAttendance />
				</div>
				<div>
					<Testimonial />
				</div>
				<div className="bg-[#161616] text-white md:p-20 p-5 h-[50vh]">
					<CTA />
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Home;
