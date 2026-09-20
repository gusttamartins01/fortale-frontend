import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { BsLinkedin } from 'react-icons/bs';
import { SiInstagram } from 'react-icons/si';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

export default function Footer() {
	return (
		<footer className="relative w-full overflow-hidden bg-blue-700 text-blue-50">
			<div className="absolute inset-x-0 top-0 h- bg-linear-to-b from-black/30 to-transparent pointer-events-none" />

			<div className="mx-auto grid max-w-7xl gap-12 px-6 pb-12 pt-16 sm:px-8 lg:grid-cols-[1.5fr_1fr_1fr_1.25fr] lg:px-10">
				<div className="max-w-sm">
					<Link
						to="/"
						className="inline-block transition duration-500 ease-in-out hover:scale-110 cursor-pointer"
					>
						<img
							src={Logo}
							alt="Fortalê"
							width={130}
							height={130}
							className="h-auto w-32"
						/>
					</Link>
					<p className="mt-5 leading-7 text-gray-100/80">
						Descubra o melhor de Fortaleza, encontre novos lugares e viva a
						cidade do seu jeito.
					</p>
					<div className="mt-6 flex gap-3">
						<a
							href="#instagram"
							aria-label="Instagram do Fortalê"
							className="rounded-full border border-blue-500 p-2.5 text-gray-100 transition-colors hover:border-amber-500 hover:text-amber-500"
						>
							<SiInstagram size={18} />
						</a>
						<a
							href="#linkedin"
							aria-label="Facebook do Fortalê"
							className="rounded-full border border-blue-500 p-2.5 text-gray-100 transition-colors hover:border-amber-500 hover:text-amber-500"
						>
							<BsLinkedin size={18} />
						</a>
						<a
							href="#email"
							aria-label="Twitter do Fortalê"
							className="rounded-full border border-blue-500 p-2.5 text-gray-100 transition-colors hover:border-amber-500 hover:text-amber-500"
						>
							<MessageCircle size={18} />
						</a>
					</div>
				</div>

				<div>
					<h2 className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">
						Explore
					</h2>
					<nav className="mt-5 flex flex-col items-start gap-3 text-gray-100/75">
						<Link to="/" className="transition-colors hover:text-white">
							Início
						</Link>
						<Link to="/explore" className="transition-colors hover:text-white">
							Explorar
						</Link>
						<Link to="/places" className="transition-colors hover:text-white">
							Lugares
						</Link>
						<Link to="/events" className="transition-colors hover:text-white">
							Eventos
						</Link>
					</nav>
				</div>

				<div>
					<h2 className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">
						Fortalê
					</h2>
					<nav className="mt-5 flex flex-col items-start gap-3 text-gray-100/75">
						<Link
							to="/categories"
							className="transition-colors hover:text-white"
						>
							Categorias
						</Link>
						<Link to="/profile" className="transition-colors hover:text-white">
							Meu perfil
						</Link>
						<a
							href="mailto:contato@fortale.com.br"
							className="transition-colors hover:text-white"
						>
							Fale conosco
						</a>
					</nav>
				</div>

				<div>
					<h2 className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">
						Fale com a gente
					</h2>
					<div className="mt-5 space-y-4 text-gray-100/75">
						<a
							href="mailto:contato@fortale.com.br"
							className="flex items-start gap-3 transition-colors hover:text-white"
						>
							<Mail size={18} className="mt-1 shrink-0 text-amber-400" />
							<span>contato@fortale.com.br</span>
						</a>
						<div className="flex items-start gap-3">
							<MapPin size={18} className="mt-1 shrink-0 text-amber-400" />
							<span className="text-gray-100/75 hover:text-white">
								Fortaleza, Ceará - Brasil
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="border-t border-blue-800/80">
				<div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-gray-200/70 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
					<p className="hover:text-white">
						© {new Date().getFullYear()} Fortalê. Todos os direitos reservados.
					</p>
					<p className="hover:text-white">
						Conectando você ao que Fortaleza tem de melhor.
					</p>
				</div>
			</div>
		</footer>
	);
}
