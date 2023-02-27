import { FC } from 'react';

import './Container.scss';

type ContainerTypes = {
	id?: string;
	children: React.ReactNode;
	fill?: boolean;
	title?: string;
	center?: boolean;
};

const Container: FC<ContainerTypes> = ({ id, title, children }) => {
	return (
		<div className='section' id={id}>
			{title && <h2 className='title'>{title}</h2>}
			<div className='body'>{children}</div>
		</div>
	);
};

export default Container;
