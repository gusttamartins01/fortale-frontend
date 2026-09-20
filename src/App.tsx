import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';

export default function App() {
	return (
		<BrowserRouter>
			<Navbar />

			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</main>

			<Footer />
		</BrowserRouter>
	);
}
