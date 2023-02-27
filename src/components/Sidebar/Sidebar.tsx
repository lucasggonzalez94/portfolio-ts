import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Sidebar.scss';

const Sidebar = () => {
	const location = useLocation();
	const [selectedId, setSelectedId] = useState('home');

	const handleClick = (id: string) => {
		setSelectedId(id);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo(0, element.offsetTop);
    }
	};

  const toggleButton = () => {
    const element = document.getElementById('sidebar');
    element?.classList.toggle('active');
  };

	return (
		<nav className='sidebar' id='sidebar'>
      <div className="toggle" onClick={toggleButton}></div>
			<ul>
				<li>
					<Link
						to='#home'
						onClick={() => handleClick('home')}
						className={
							`link${location.hash === '#home' || selectedId === 'home'
								? ' selected'
								: ''}`
						}
					>
						Inicio
					</Link>
				</li>
				<li>
					<Link
						to='#about'
						onClick={() => handleClick('about')}
						className={
							`link${location.hash === '#about' || selectedId === 'about'
								? ' selected'
								: ''}`
						}
					>
						Sobre mí
					</Link>
				</li>
				<li>
					<Link
						to='#projects'
						onClick={() => handleClick('projects')}
						className={
							`link${location.hash === '#projects' || selectedId === 'projects'
								? ' selected'
								: ''}`
						}
					>
						Proyectos
					</Link>
				</li>
				<li>
					<Link
						to='#contact'
						onClick={() => handleClick('contact')}
						className={
							`link${location.hash === '#contact' || selectedId === 'contact'
								? ' selected'
								: ''}`
						}
					>
						Contacto
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Sidebar;
