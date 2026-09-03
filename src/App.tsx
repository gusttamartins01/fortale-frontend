import { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="w-full h-screen bg-gray-950 flex justify-center items-center gap-6 flex-col">
				<h1 className="text-gray-200 font-bold text-6xl">Hello world!</h1>

				<button
					type="button"
					onClick={() => setCount(count + 1)}
					className="bg-blue-600 px-8 py-4 rounded-2xl text-gray-200"
				>
					Number: <span className="text-gray-300">{count}</span>
				</button>
			</div>
		</>
	);
}

export default App;
