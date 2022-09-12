import { useState } from 'react';

function SignUpForm() {
	const [newUser, setNewUser] = useState({ email: '', password: '' });

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch('https://mymoviesapiapp.herokuapp.com/add', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newUser),
		})
			.then((response) => response.json())
			.then((data) => console.log(data));
		alert(
			`new user generated with Email:${newUser.email} and Password: ${newUser.password}`
		);
		setNewUser({ email: '', password: '' });
	};
	return (
		<form action='login' onSubmit={handleSubmit} className='signUpForm'>
			<input
				type='text'
				onChange={(event) =>
					setNewUser({ ...newUser, email: event.target.value })
				}
				placeholder='Email'
				value={newUser.email}
				className='textFieldInput'
			/>
			<input
				type='password'
				onChange={(event) =>
					setNewUser({ ...newUser, password: event.target.value })
				}
				placeholder='Password'
				value={newUser.password}
				className='textFieldInput'
			/>
			<button type='submit' value={'Sign Up'} className='logInButton'>
				Sign Up
			</button>
		</form>
	);
}

export default SignUpForm;
