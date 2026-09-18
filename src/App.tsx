import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/home/Home';

export default function App() {
	return (
		<BrowserRouter>
			<Navbar />

			<main>
				<Home />
			</main>
		</BrowserRouter>
	);
}
