import React, {FC} from 'react';

import './ProjectCard.scss';

import { navigateToUrl } from 'utils/helpers';

import Tooltip from 'components/Tooltip/Tooltip';
import Button from 'components/Button/Button';

type ProjectCardTypes = {
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
	siteUrl,
}) => {
	return (
		<div className='card'>
			<img src={img} alt={title} />
			<div className='content-card'>
				<h3>{title}</h3>
				<Tooltip text={description}>
					<p>{description}</p>
				</Tooltip>
				<div className='footer-card'>
					{gitUrl ? (
						<Button
							onClick={() => navigateToUrl(gitUrl)}
							text='Repositorio'
							variant='border-secondary'
						/>
					) : null}
					{siteUrl ? (
						<Button
							onClick={() => navigateToUrl(siteUrl)}
							text='Ir al sitio'
							variant='border-secondary'
						/>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
