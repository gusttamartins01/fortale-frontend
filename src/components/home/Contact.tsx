import { Mail } from 'lucide-react';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { SiInstagram } from 'react-icons/si';
import { Link } from 'react-router-dom';
import ContactForm from '../ui/ContactForm';

export default function Contact() {
	return (
		<section className="h-auto w-full bg-gray-100 pt-8 pb-28 border-t-2 border-black/10">
			<div className="mx-auto max-w-6xl px-6 pt-8">
				<h2 className="border-l-4 border-amber-600 py-2 pl-5 text-3xl font-bold text-amber-600 sm:text-4xl">
					Nossos contatos
				</h2>

				<div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
					<div className="grid content-start grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
						<div className=" flex flex-col gap-5 items-start justify-center px-5 pt-5 pb-12">
							<h3 className="font-semibold text-4xl text-amber-800">
								Vamos conversar?
							</h3>

							<p className="text-gray-600 text-2xl">
								Fique por dentro de tudo o que acontece!
							</p>
						</div>

						<Link
							to="/"
							className="flex items-center gap-4 rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-white/70"
						>
							<BsWhatsapp
								size={26}
								className="text-green-500 duration-500 hover:text-green-700"
							/>
							Fale com a gente
						</Link>

						<Link
							to="/"
							className="flex items-center gap-4 rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-white/70"
						>
							<SiInstagram
								size={26}
								className="text-red-500 duration-500 hover:text-red-700"
							/>
							Acompanhe o Fortalê
						</Link>

						<Link
							to="/"
							className="flex items-center gap-4 rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-white/70"
						>
							<BsLinkedin
								size={26}
								className="text-blue-500 duration-500 hover:text-blue-700"
							/>
							Conecte-se com o Fortalê
						</Link>

						<Link
							to="/"
							className="flex items-center gap-4 rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-white/70"
						>
							<Mail
								size={26}
								className="text-fuchsia-500 duration-500 hover:text-fuchsia-700"
							/>
							Envie sua mensagem
						</Link>
					</div>

					<ContactForm />
				</div>
			</div>
		</section>
	);
}
