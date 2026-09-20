import { Link } from 'react-router-dom';
import HomeImg from '../../assets/homeImg.png';
import About from '../../components/home/About';
import Contact from '../../components/home/Contact';
import FAQ from '../../components/home/FAQ';
import Features from '../../components/home/Features';
import Inivation from '../../components/home/Inivitation';
import PlatformOwner from '../../components/home/PlatformOwner';
import Testimonial from '../../components/home/Testimonial';

export default function Home() {
	return (
		<>
			<section
				className="relative min-h-screen bg-cover bg-center bg-no-repeat shadow-2xl"
				style={{ backgroundImage: `url(${HomeImg})` }}
			>
				<div className="pointer-events-none absolute inset-0 bg-black/30" />

				<div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-gray-950 to-transparent" />

				<div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-5 text-center text-gray-200 bg-black/30">
					<h1 className="text-6xl font-bold">FORTALÊ</h1>

					<h2 className="text-3xl font-medium">
						Tudo que Fortaleza tem pra oferecer, em um só lugar
					</h2>

					<p className="max-w-2xl text-lg">
						Descubra praias, restaurantes, cafeterias, parques, preças, turismo,
						cultura e eventos - tudo em um só lugar, pra você explorar quando
						quiser.
					</p>

					<Link
						to="/explore"
						className="mt-5 bg-cyan-600 px-10 py-4 rounded-lg font-semibold transition hover:bg-cyan-700  duration-300 ease-in-out hover:scale-105"
					>
						Explorar Fortaleza
					</Link>
				</div>
			</section>

			<About />
			<Features />
			<PlatformOwner />
			<Testimonial />
			<FAQ />
			<Inivation />
			<Contact />
		</>
	);
}
