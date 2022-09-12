import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';

function LogOutButton() {
	const [loginStatus, setLoginStatus] = useContext(LoginContext);
	const handleClick = (e) => {
		e.preventDefault();
		setLoginStatus(!loginStatus);
	};

	return (
		<button className='logOutBtn' onClick={handleClick}>
			Log Out
		</button>
	);
}

export default LogOutButton;
