import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.scss';

type SidebarTypes = {
	active: boolean;
};

const Sidebar: FC<SidebarTypes> = ({ active }) => {
	const [activeSection, setActiveSection] = useState('');

	const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		const targetSection = event.currentTarget.getAttribute('data-section');
		const targetElement = document.getElementById(targetSection || '');

		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const toggleSidebar = (active: boolean) => {
		const sidebar = document.getElementById('sidebar');
		if (active) {
			sidebar?.classList?.add('active');
		} else {
			sidebar?.classList?.remove('active');
		}
	};

	useEffect(() => {
		toggleSidebar(active);
	}, [active]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const idSection = entry.target.getAttribute('id') || '';
						setActiveSection(idSection);
					}
				});
			},
			{ threshold: 0.2 }
		);

		const sections = document.querySelectorAll('section');
		sections.forEach(section => observer.observe(section));

		return () => observer.disconnect();
	}, []);

	return (
		<nav className='sidebar' id='sidebar'>
			<ul>
				<li>
					<Link
						to='#home'
						data-section='home'
						onClick={e => handleClick(e)}
						className={`link ${activeSection === 'home' ? 'selected' : ''}`}
					>
						Inicio
					</Link>
				</li>
				<li>
					<Link
						to='#about'
						data-section='about'
						onClick={e => handleClick(e)}
						className={`link ${activeSection === 'about' ? 'selected' : ''}`}
					>
						Sobre mí
					</Link>
				</li>
				<li>
					<Link
						to='#projects'
						data-section='projects'
						onClick={e => handleClick(e)}
						className={`link ${activeSection === 'projects' ? 'selected' : ''}`}
					>
						Proyectos
					</Link>
				</li>
				<li>
					<Link
						to='#contact'
						data-section='contact'
						onClick={e => handleClick(e)}
						className={`link ${activeSection === 'contact' ? 'selected' : ''}`}
					>
						Contacto
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Sidebar;
