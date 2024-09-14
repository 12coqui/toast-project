import React from 'react';

export default function useEscapeKey(action) {
	if (typeof action !== 'function') {
		throw new Error('useEscapeKey requires a function argument');
	}
	React.useEffect(() => {
		function handleKeyDown(event) {
			if (event.key === 'Escape') {
				action();
			}
		}

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);
}
