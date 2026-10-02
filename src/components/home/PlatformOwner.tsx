import { StarIcon } from 'lucide-react';
import MeImg from '../../assets/me.png';

export default function PlatformOwner() {
	return (
		<section className="h-auto w-full bg-gray-100 pt-8 pb-20 border-t-2 border-black/10">
			<div className="mx-16 mt-10 flex items-center justify-start text-center">
				<h2 className="rounded-t-2xl border-l-4 border-amber-600 pb-1 pl-5 pt-5 text-4xl font-bold text-amber-600">
					A mente por trás de tudo
				</h2>
			</div>

			<div className="mx-16 mt-5 grid grid-cols-2 items-center gap-10">
				<div className="flex items-center justify-start bg-gray-300/50 rounded-r-full rounded-l-full">
					<img
						src={MeImg}
						alt="Uma foto minha olhando para o lado direito."
						width={400}
						height={400}
						className="rounded-2xl object-cover"
					/>
				</div>

				<div className="pt-10 flex w-full flex-col justify-center gap-8">
					<h3 className="text-4xl font-bold text-amber-700 flex gap-3 items-center justify-start">
						<StarIcon size={25} className="" />
						Gustavo Martins
					</h3>

					<span className=" w-full text-2xl font-medium text-amber-800">
						Estudante universitário e desenvolvedor de software.
					</span>

					<p className="text-2xl font-normal text-gray-700">
						Sempre tive curiosidade em conhecer novos lugares, descobrir o que
						acontece pela cidade e aproveitar mais as experiências que Fortaleza
						oferece. Foi percebendo essa dificuldade de encontrar tudo isso de
						forma simples que comecei a imaginar uma solução.
					</p>

					<p className="text-2xl font-normal text-gray-700">
						Foi dessa vontade de conhecer mais a minha própria cidade que nasceu
						o Fortalê. Um projeto que une duas coisas em uma: tecnologia e
						Fortaleza, criando uma experiência para ajudar as pessoas a
						descobrirem novos lugares e aproveitarem ainda mais o que a nossa
						cidade tem para oferecer.
					</p>
				</div>
			</div>
		</section>
	);
}
