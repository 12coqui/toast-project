import React from 'react';

export const ToastContext = React.createContext();
function ToastProvider({ values, children }) {
	return <ToastContext.Provider value={values}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
