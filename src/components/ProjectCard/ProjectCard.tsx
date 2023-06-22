import { FC } from 'react';

import './ProjectCard.scss';

import { navigateToUrl } from 'utils/helpers';

import Button from 'components/Button/Button';

type ProjectCardTypes = {
	key: number;
	img: string;
	title: string;
	description: string;
	gitUrl?: string;
	siteUrl?: string;
};

const ProjectCard: FC<ProjectCardTypes> = ({
	img,
	title,
	description,
	gitUrl,
	siteUrl
}) => {
	return (
		<div className='card'>
			<img src={img} alt={title} />
			<div className='content-card'>
				<h3>{title}</h3>
				<p>{description}</p>
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
