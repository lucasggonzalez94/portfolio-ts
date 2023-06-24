import { useState } from 'react';

import './Portfolio.scss';

import Background from 'components/Background/Background';
import AboutMe from 'pages/AboutMe/AboutMe';
import Projects from 'pages/Projects/Projects';
import Banner from 'pages/Banner/Banner';
import Contact from 'pages/Contact/Contact';
import SkillList from 'pages/SkillList/SkillList';
import Footer from 'components/Footer/Footer';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import Sidebar from 'components/Sidebar/Sidebar';

export const Portfolio = () => {
	const [active, setActive] = useState(false);

	return (
		<>
			<BurgerMenu setActive={setActive} />
			<Sidebar active={active} />
			<Background />
			<Banner />
			<section className='about-me' id='about'>
				<AboutMe />
				<SkillList />
			</section>
			<Projects />
			<Contact />
			<Footer />
		</>
	);
};
