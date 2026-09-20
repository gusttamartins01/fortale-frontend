import { useState } from 'react';

import AboutImage from '../../assets/aboutImg.png';
import AboutImage2 from '../../assets/aboutImg2.png';
import AboutImage3 from '../../assets/aboutImg3.png';
import AboutImage4 from '../../assets/aboutImg4.png';
import AboutImage5 from '../../assets/aboutImg5.png';
import AboutImage6 from '../../assets/aboutImg6.png';
import AboutImage7 from '../../assets/aboutImg7.png';
import AboutImage8 from '../../assets/aboutImg8.png';
import AboutImage9 from '../../assets/aboutImg9.png';
import AboutImage10 from '../../assets/aboutImg10.png';

const images = [
	AboutImage,
	AboutImage2,
	AboutImage3,
	AboutImage4,
	AboutImage5,
	AboutImage6,
	AboutImage7,
	AboutImage8,
	AboutImage9,
	AboutImage10
];

export default function About() {
	const [imageOrder, setImageOrder] = useState(images);
	const [isAnimating, setIsAnimating] = useState(false);

	const handleNextImage = () => {
		if (isAnimating) return;

		setIsAnimating(true);

		setTimeout(() => {
			setImageOrder((currentImages) => [
				...currentImages.slice(1),
				currentImages[0]
			]);

			setIsAnimating(false);
		}, 500);
	};

	return (
		<section className="h-auto w-full bg-gray-100 pt-10 pb-28">
			<div className="mx-16 mt-16 flex items-center justify-start text-center">
				<h2 className="rounded-t-2xl border-l-4 border-amber-600 pb-1 pl-5 pt-5 text-4xl font-bold text-amber-600">
					O que é o Fortalê?
				</h2>
			</div>

			<div className="mx-16 mt-6 grid grid-cols-2 items-center gap-10">
				<div className="flex w-full flex-col justify-center">
					<p className="text-2xl font-normal text-gray-700">
						O Fortalê nasceu com a ideia de tornar mais fácil descobrir e
						aproveitar tudo o que Fortaleza e sua região metropolitana têm a
						oferecer. Em um só lugar, você pode encontrar lugares, eventos,
						gastronomia, cultura, lazer e experiências para diferentes momentos
						e estilos.
					</p>

					<p className="mt-6 text-2xl font-normal text-gray-700">
						Mais do que uma plataforma de lugares, o Fortalê é um espaço para
						explorar a cidade, descobrir novos caminhos e encontrar novas
						experiências. Seja para conhecer aquele lugar que você ainda não
						visitou, encontrar algo para fazer no fim de semana ou simplesmente
						explorar Fortaleza de uma nova forma.
					</p>
				</div>

				<div className="flex items-center justify-center">
					<div className="relative h-125 w-125">
						{imageOrder.map((image, index) => (
							<button
								key={image}
								type="button"
								onClick={index === 0 ? handleNextImage : undefined}
								disabled={index !== 0 || isAnimating}
								aria-label={index === 0 ? 'Ver próxima imagem' : undefined}
								className="absolute inset-0 h-full w-full cursor-pointer rounded-3xl border-0 bg-transparent p-0"
								style={{
									transform:
										isAnimating && index === 0
											? 'translateY(-120%) rotate(-8deg)'
											: `translateY(${index * 15}px) scale(${1 - index * 0.03})`,
									opacity: isAnimating && index === 0 ? 0 : 1,
									zIndex: imageOrder.length - index,
									transition: 'transform 500ms ease, opacity 500ms ease'
								}}
							>
								<img
									src={image}
									alt="Experiência em Fortaleza"
									className="h-full w-full rounded-3xl bg-gray-300/30 object-cover p-5"
								/>
							</button>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
