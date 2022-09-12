import { useState, createContext } from 'react';

export const LoginContext = createContext();

function LoginContextProvider({ children }) {
	const [loginStatus, setLoginStatus] = useState(false);

	return (
		<LoginContext.Provider value={[loginStatus, setLoginStatus]}>
			{children}
		</LoginContext.Provider>
	);
}

export default LoginContextProvider;
