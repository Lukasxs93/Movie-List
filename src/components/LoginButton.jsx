import { useState, useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
// import { v4 as uuid } from 'uuid';

function LoginButton() {
	const [inputValue, setInputValue] = useState({ email: '', password: '' });
	const [loginStatus, setLoginStatus] = useContext(LoginContext);

	const handleClick = (e) => {
		e.preventDefault();
		let loginData = { email: inputValue.email, password: inputValue.password };
		console.log(loginData);
		fetch('https://mymoviesapiapp.herokuapp.com/ahutenticate', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(loginData),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data === true) {
					setLoginStatus(!loginStatus);
				} else {
					alert('Wrong credentials');
				}
			});
	};

	return (
		<form action='login' onSubmit={handleClick} className='loginForm'>
			<input
				type='text'
				onChange={(event) =>
					setInputValue({ ...inputValue, email: event.target.value })
				}
				placeholder='Email'
				value={inputValue.email}
				className='textFieldInput'
			/>
			<input
				type='password'
				onChange={(event) =>
					setInputValue({ ...inputValue, password: event.target.value })
				}
				placeholder='Password'
				value={inputValue.password}
				className='textFieldInput'
			/>
			<button type='submit' value={'Login'} className='logInButton'>
				Log In
			</button>
		</form>
	);
}

export default LoginButton;
