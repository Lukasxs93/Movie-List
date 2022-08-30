import { useState, createContext } from 'react';

export const SelectedContext = createContext();

function SelectedContextProvider({ children }) {
	const [select, setSelect] = useState([]);

	return (
		<SelectedContext.Provider value={[select, setSelect]}>
			{children}
		</SelectedContext.Provider>
	);
}

export default SelectedContextProvider;
