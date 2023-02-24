import { FC } from 'react';

import './Container.scss';

type ContainerTypes = {
	children: React.ReactNode;
	fill?: boolean;
	title?: string;
	center?: boolean;
};

const Container: FC<ContainerTypes> = ({ title, children, fill = true }) => {
	return (
		<div className={`section ${fill && 'fill'}`}>
			{title && <h2 className='title'>{title}</h2>}
			<div className='body'>{children}</div>
		</div>
	);
};

export default Container;
