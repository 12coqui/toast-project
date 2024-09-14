import React from 'react';

import Button from '../Button';
import ToastProvider from '../ToastProvider/ToastProvider';
import RadioInput from '../RadioInput';
import ToastShelf from '../ToastShelf';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	const [variant, setVariant] = React.useState('notice');
	const [message, setMessage] = React.useState('');
	const [toasts, setToasts] = React.useState([]);

	function handleChange(event) {
		setVariant(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (message === '') {
			setToasts([...toasts, { id: crypto.randomUUID(), variant: 'error', message: 'You must enter a message!' }]);
			return;
		}
		setToasts([...toasts, { id: crypto.randomUUID(), variant, message }]);
		setMessage('');
		setVariant('notice');
	}

	function dismissToast(index) {
		setToasts(prevToasts => prevToasts.filter((_, i) => i !== index));
	}

	return (
		<ToastProvider values={{ variant, toasts, setToasts }}>
			<div className={styles.wrapper}>
				<header>
					<img alt='Cute toast mascot' src='/toast.png' />
					<h1>Toast Playground</h1>
				</header>

				<ToastShelf dismissToast={dismissToast} />

				<div className={styles.controlsWrapper}>
					<form onSubmit={handleSubmit}>
						<div className={styles.row}>
							<label htmlFor='message' className={styles.label} style={{ alignSelf: 'baseline' }}>
								Message
							</label>
							<div className={styles.inputWrapper}>
								<textarea
									id='message'
									className={styles.messageInput}
									value={message}
									onChange={e => {
										setMessage(e.target.value);
									}}
								/>
							</div>
						</div>

						<div className={styles.row}>
							<div className={styles.label}>Variant</div>
							<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
								{VARIANT_OPTIONS.map(option => (
									<RadioInput key={option} option={option} handleChange={handleChange} />
								))}
							</div>
						</div>

						<div className={styles.row}>
							<div className={styles.label} />
							<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
								<Button>Pop Toast!</Button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</ToastProvider>
	);
}

export default ToastPlayground;
