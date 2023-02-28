import { FC } from 'react';

import './Button.scss';

type ButtonTypes = {
	content: string | React.ReactNode;
	onClick: (e: any) => void;
	className?: string;
	variant?: 'primary' | 'secondary';
  disabled?: boolean;
};

const Button: FC<ButtonTypes> = ({
	content,
	onClick,
	className,
	variant = 'primary',
  disabled
}) => {
	return (
		<>
			<button
				className={`button ${variant} ${className ? ` ${className}` : ''}`}
				onClick={onClick}
        disabled={disabled}
			>
				{content}
			</button>
		</>
	);
};

export default Button;
