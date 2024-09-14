import React from 'react';
import { AlertOctagon, AlertTriangle, CheckCircle, Info, X } from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import useEscapeKey from '../hooks/use-escape-key';
import { ToastContext } from '../ToastProvider/ToastProvider';
import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
	notice: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertOctagon,
};

function Toast({ variant, message, dismissToast, index }) {
	const Icon = ICONS_BY_VARIANT[variant];
	const { setToasts } = React.useContext(ToastContext);
	useEscapeKey(() => setToasts([]));

	return (
		<div className={`${styles.toast} ${styles[variant]}`}>
			<div className={styles.iconContainer}>
				<Icon size={24} className={`${styles[variant]}`} />
			</div>
			<p className={styles.content}>{message}</p>
			<VisuallyHidden>{variant}</VisuallyHidden>
			<button
				className={styles.closeButton}
				onClick={() => dismissToast(index)}
				aria-label='Dismiss message'
				aria-live='off'>
				<X size={24} />
			</button>
		</div>
	);
}

export default Toast;
