import './App.css';
import SelectedContextProvider from './context/SelectedContext';
import PageWrapper from './components/PageWrapper';

import MovieContextProvider from './context/DataContext';
function App() {
	return (
		<div className='App'>
			<SelectedContextProvider>
				<MovieContextProvider>
					<PageWrapper />
				</MovieContextProvider>
			</SelectedContextProvider>
		</div>
	);
}

export default App;
