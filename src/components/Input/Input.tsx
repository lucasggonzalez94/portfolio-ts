import { FC } from 'react';

import './Input.scss';

type InputTypes = {
	type: 'text' | 'email' | 'textarea';
	name: string;
	placeholder: string;
	value: string;
	onChange: (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => void;
	onBlur?: (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => void;
	error?: boolean;
	errorMessage?: string;
};

const Input: FC<InputTypes> = ({
	type,
	name,
	placeholder,
	value,
	onChange,
	onBlur,
	error,
	errorMessage
}) => {
	return (
		<div className='input'>
			{type === 'textarea' ? (
				<textarea
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					onBlur={onBlur}
					className={`${error ? 'error' : ''}`}
				/>
			) : (
				<input
					type={type}
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					onBlur={onBlur}
					className={`${error ? 'error' : ''}`}
				/>
			)}
			<p className={`${error ? 'error' : ''}`}>{errorMessage}</p>
		</div>
	);
};

export default Input;
