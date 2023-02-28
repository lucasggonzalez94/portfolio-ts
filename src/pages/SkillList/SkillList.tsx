import Container from 'components/Container/Container';
import './SkillList.scss';

const SkillList = () => {
	const skills = [
		{ name: 'React.js', level: 9 },
		{ name: 'JavaScript', level: 9 },
		{ name: 'TypeScript', level: 8 },
		{ name: 'CSS', level: 8 },
		{ name: 'SASS', level: 7 },
		{ name: 'HTML', level: 9 },
		{ name: 'Node.js', level: 7 },
		{ name: 'Nest.js', level: 6 },
		{ name: 'Java', level: 5 },
		{ name: 'MySQL', level: 6 },
		{ name: 'JEST', level: 5 },
		{ name: 'Git', level: 7 },
		{ name: 'SCRUM', level: 7 },
		{ name: 'Inglés', level: 5 },
	];

	return (
		<Container title='Habilidades'>
			<div className='skill-list'>
				{skills.map((skill, index) => (
					<div key={index} className='skill'>
						<div className='skill-name'>{skill.name}</div>
						<div className='skill-bar'>
							<div
								className='skill-bar-fill'
								style={{ width: `${skill.level * 10}%` }}
							></div>
						</div>
					</div>
				))}
			</div>
		</Container>
	);
};

export default SkillList;
