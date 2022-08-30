import './App.css';
import SelectedContextProvider from './context/SelectedContext';
import PageWrapper from './components/PageWrapper';
import hero from './assets/hero.png';
function App() {
	return (
		<div className='App'>
			<div className='backgroundImg'>
				<img src={hero} />
			</div>
			<SelectedContextProvider>
				<PageWrapper />
			</SelectedContextProvider>
			<div className='background'></div>
		</div>
	);
}

export default App;
