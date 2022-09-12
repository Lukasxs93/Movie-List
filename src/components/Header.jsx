import { useContext } from 'react';
import { MovieContext } from '../context/DataContext';
import { LoginContext } from '../context/LoginContext';
import LoginButton from './LoginButton';
import SearchBar from './SearchBar';

function Header() {
	const [data] = useContext(MovieContext);

	return (
		<div className='header'>
			{data.length !== 0 ? (
				<SearchBar />
			) : (
				<>
					<h2>Watch List</h2>
					{/* <LoginButton /> */}
				</>
			)}
		</div>
	);
}

export default Header;
