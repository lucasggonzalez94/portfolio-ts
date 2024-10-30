import Container from 'components/Container/Container';
import './SkillList.scss';

import { ReactComponent as ReactJS } from 'static/icons/react.svg';
import { ReactComponent as NextJS } from 'static/icons/nextjs.svg';
import { ReactComponent as Angular } from 'static/icons/angular.svg';
import { ReactComponent as JavaScript } from 'static/icons/javascript.svg';
import { ReactComponent as TypeScript } from 'static/icons/typescript.svg';
import { ReactComponent as Redux } from 'static/icons/redux.svg';
import { ReactComponent as HTML } from 'static/icons/html5.svg';
import { ReactComponent as CSS } from 'static/icons/css.svg';
import { ReactComponent as Sass } from 'static/icons/sass.svg';
import { ReactComponent as TailwindCSS } from 'static/icons/tailwindcss.svg';
import { ReactComponent as Figma } from 'static/icons/figma.svg';
import { ReactComponent as NodeJS } from 'static/icons/nodejs.svg';
import { ReactComponent as NestJS } from 'static/icons/nestjs.svg';
import { ReactComponent as PostgreSQL } from 'static/icons/postgresql.svg';
import { ReactComponent as MongoDB } from 'static/icons/mongodb.svg';
import { ReactComponent as Firebase } from 'static/icons/firebase.svg';
import { ReactComponent as Jest } from 'static/icons/jest.svg';
import { ReactComponent as Git } from 'static/icons/git.svg';
import { ReactComponent as Postman } from 'static/icons/postman.svg';
import { ReactComponent as Express } from 'static/icons/expressjs.svg';
import { ReactComponent as Prisma } from 'static/icons/prisma.svg';

const SkillList = () => {
	const skills = [
		{ name: 'React.js', icon: <ReactJS /> },
		{ name: 'Next.js', icon: <NextJS /> },
		{ name: 'Angular', icon: <Angular /> },
		{ name: 'JavaScript', icon: <JavaScript /> },
		{ name: 'TypeScript', icon: <TypeScript /> },
		{ name: 'Redux', icon: <Redux /> },
		{ name: 'HTML', icon: <HTML /> },
		{ name: 'CSS', icon: <CSS /> },
		{ name: 'SASS', icon: <Sass /> },
		{ name: 'TailwindCSS', icon: <TailwindCSS /> },
		{ name: 'Figma', icon: <Figma /> },
		{ name: 'Node.js', icon: <NodeJS /> },
		{ name: 'Express.js', icon: <Express /> },
		{ name: 'Nest.js', icon: <NestJS /> },
		{ name: 'PostgreSQL', icon: <PostgreSQL /> },
		{ name: 'Prisma', icon: <Prisma /> },
		{ name: 'MongoDB', icon: <MongoDB /> },
		{ name: 'Firebase', icon: <Firebase /> },
		{ name: 'JEST', icon: <Jest /> },
		{ name: 'Git', icon: <Git /> },
		{ name: 'Postman', icon: <Postman /> }
	];

	return (
		<Container title='Habilidades'>
			<div className='skill-grid'>
				{skills.map(skill => (
					<div key={skill.name} className='skill'>
						{skill.icon}
						<span>{skill.name}</span>
					</div>
				))}
			</div>
		</Container>
	);
};

export default SkillList;
