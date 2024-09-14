import React from 'react';
import { ToastContext } from '../ToastProvider/ToastProvider';
function RadioInput({ handleChange, option }) {
	const { variant } = React.useContext(ToastContext);
	return (
		<>
			<label htmlFor={`variant-${option}`} style={{ textTransform: 'capitalize' }}>
				<input
					id={`variant-${option}`}
					type='radio'
					name='variant'
					value={option}
					onChange={handleChange}
					checked={variant === option}
				/>
				{option}
			</label>
		</>
	);
}

export default RadioInput;
