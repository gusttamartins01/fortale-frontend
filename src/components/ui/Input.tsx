type InputProps = {
	id: string;
	label: string;
	type?: 'text' | 'email';
	placeholder?: string;
};

export default function Input({
	id,
	label,
	type = 'text',
	placeholder
}: InputProps) {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={id} className="text-sm font-semibold text-gray-700">
				{label}
			</label>
			<input
				id={id}
				name={id}
				type={type}
				placeholder={placeholder}
				className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
			/>
		</div>
	);
}
