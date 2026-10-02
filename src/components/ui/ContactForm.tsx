import Input from './Input';

export default function ContactForm() {
	return (
		<div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
			<h3 className="text-2xl font-semibold text-amber-800">
				Mande a sua sugestão
			</h3>
			<p className="mt-2 text-sm leading-6 text-gray-600">
				Tem uma ideia ou quer recomendar um lugar? Conta pra gente.
			</p>

			<form className="mt-6 flex flex-col gap-5">
				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
					<Input id="name" label="Nome" placeholder="Seu nome" />
					<Input
						id="email"
						label="E-mail"
						type="email"
						placeholder="voce@exemplo.com"
					/>
				</div>

				<Input
					id="subject"
					label="Assunto"
					placeholder="Sobre o que gostaria de falar?"
				/>

				<div className="flex flex-col gap-2">
					<label
						htmlFor="message"
						className="text-sm font-semibold text-gray-700"
					>
						Mensagem
					</label>
					<textarea
						id="message"
						name="message"
						rows={5}
						placeholder="Escreva sua mensagem..."
						className="w-full resize-y rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
					/>
				</div>

				<button
					type="button"
					className="self-start rounded-lg bg-amber-600 px-5 py-3 font-semibold text-white transition hover:bg-amber-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
				>
					Enviar mensagem
				</button>
			</form>
		</div>
	);
}
