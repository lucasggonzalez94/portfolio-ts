import { FC } from 'react';

import './ProjectCard.scss';

import { navigateToUrl } from 'utils/helpers';

import Button from 'components/Button/Button';
import Pill from 'components/Pill/Pill';

type ProjectCardTypes = {
	key: number;
	img: string;
	title: string;
	description: string;
	gitUrl?: string;
	siteUrl?: string;
	skills: string[];
};

const ProjectCard: FC<ProjectCardTypes> = ({
	img,
	title,
	description,
	gitUrl,
	siteUrl,
	skills
}) => {
	return (
		<div className='card'>
			<img src={img} alt={title} />
			<div className='content-card'>
				<h3 className="non-selectable">{title}</h3>
				<p className="non-selectable">{description}</p>
				<div className="skills">
					{skills.map((skill, i) => (
						<Pill key={i+99} text={skill}/>
					))}
				</div>
				<div className='footer-card'>
					{gitUrl ? (
						<Button
							onClick={() => navigateToUrl(gitUrl)}
							content='Repositorio'
							variant='primary'
						/>
					) : null}
					{siteUrl ? (
						<Button
							onClick={() => navigateToUrl(siteUrl)}
							content='Ir al sitio'
							variant='primary'
						/>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
