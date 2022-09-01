import { useState, createContext } from 'react';

export const MovieContext = createContext();

function MovieContextProvider({ children }) {
	const [data, setData] = useState([]);

	return (
		<MovieContext.Provider value={[data, setData]}>
			{children}
		</MovieContext.Provider>
	);
}

export default MovieContextProvider;
