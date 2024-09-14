import React from 'react';
import { ToastContext } from '../ToastProvider/ToastProvider';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ dismissToast }) {
	const { toasts } = React.useContext(ToastContext);

	return (
		<ol className={styles.wrapper} role='region' aria-live='polite' aria-label='Notification'>
			{toasts.map((toast, index) => (
				<li key={toast.id} className={styles.toastWrapper}>
					<Toast variant={toast.variant} message={toast.message} dismissToast={dismissToast} index={index} />
				</li>
			))}
		</ol>
	);
}

export default ToastShelf;
