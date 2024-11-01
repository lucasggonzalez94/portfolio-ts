import { useState } from 'react';

import './ProjectCard.scss';

type ProjectCardTypes = {
	key: number;
	img: string;
	title: string;
	description: string;
	gitUrlFront?: string;
	gitUrlBack?: string;
	siteUrl?: string;
	skills: string[];
};

export const ProjectCard = ({
	img,
	title,
	description,
	gitUrlFront,
	gitUrlBack,
	siteUrl,
	skills
}: ProjectCardTypes) => {
	return (
		<div className='project-card'>
			<div className='image-container'>
				<img src={img} alt={title} className='project-image' />
			</div>
			<div className='content'>
				<h2 className='title-card'>{title}</h2>
				<p className="description">
					{description}
				</p>
				<div className='skills'>
					{skills?.map((skill, index) => (
						<span key={index} className='skill-pill'>
							{skill}
						</span>
					))}
				</div>
				<div className='links'>
					{gitUrlFront && (
						<a
							href={gitUrlFront}
							target='_blank'
							rel='noopener noreferrer'
							className='link-btn'
						>
							Frontend
						</a>
					)}
					{gitUrlBack && (
						<a
							href={gitUrlBack}
							target='_blank'
							rel='noopener noreferrer'
							className='link-btn'
						>
							Backend
						</a>
					)}
					{siteUrl && (
						<a
							href={siteUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='link-btn'
						>
							Sitio Web
						</a>
					)}
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
