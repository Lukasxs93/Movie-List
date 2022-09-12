import './App.css';
import SelectedContextProvider from './context/SelectedContext';
import PageWrapper from './components/PageWrapper';

import MovieContextProvider from './context/DataContext';
import LoginContextProvider from './context/LoginContext';
import ViewContextProvider from './context/ViewContext';
function App() {
	return (
		<div className='App'>
			<ViewContextProvider>
				<LoginContextProvider>
					<SelectedContextProvider>
						<MovieContextProvider>
							<PageWrapper />
						</MovieContextProvider>
					</SelectedContextProvider>
				</LoginContextProvider>
			</ViewContextProvider>
		</div>
	);
}

export default App;
