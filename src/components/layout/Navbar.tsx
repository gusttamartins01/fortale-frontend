import { User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';

export default function Navbar() {
	const getLinksStyle = ({ isActive }: { isActive: boolean }) =>
		isActive
			? 'text-amber-500 font-semibold'
			: 'text-gray-100 hover:text-amber-400 transition-colors';

	return (
		<header className="fixed bg-transparent top-0 z-20 w-full border-b border-white/10 backdrop-blur-md">
			<div className="max-w-7xl  mx-auto px-4 h-20 flex items-center justify-between">
				<NavLink
					to="/home"
					className="flex items-center transition duration-500 ease-in-out hover:scale-110 cursor-pointer"
				>
					<img
						src={Logo}
						alt="Logo do Fortalê"
						width={130}
						height={130}
						className="object-contain"
					/>
				</NavLink>

				<div>
					<nav className="flex items-center gap-6 text-lg font-medium">
						<NavLink to={'/home'} className={getLinksStyle}>
							Início
						</NavLink>

						<NavLink to={'/explore'} className={getLinksStyle}>
							Explorar
						</NavLink>

						<NavLink to={'/places'} className={getLinksStyle}>
							Lugares
						</NavLink>

						<NavLink to={'/events'} className={getLinksStyle}>
							Eventos
						</NavLink>

						<NavLink to={'/categories'} className={getLinksStyle}>
							Categorias
						</NavLink>
					</nav>
				</div>

				<NavLink
					to="/profile"
					className="flex items-center gap-5 justify-start"
				>
					<User
						size={26}
						className="text-gray-200 hover:text-amber-500 cursor-pointer"
					/>
				</NavLink>
			</div>
		</header>
	);
}
