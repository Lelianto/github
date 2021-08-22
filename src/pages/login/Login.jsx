/**
 * @description import dependencies
 */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'element-react';
import { useHistory } from 'react-router-dom'
/**
 * @description import reducers, store function, and assets
 */
import { getUserData } from '../../stores/reducers/userReducers';
import mainLogo from '../../assets/images/mainLogo.jpg'

const Login = () => {
	let dispatch = useDispatch()
	let history = useHistory();
	const [username, setUsername] = useState('')

	/**
	 * @function onChangeText to make username be changed based on @param e
	 * @function setUsername to change username text
	 */
	const onChangeText = (e) => {
		setUsername(e)
	}
	/**
	 * @function handleKeyPress handle 'Enter' keypress based on @param e
	 */
	const handleKeyPress = (e) => {
		if (e.which === 13 && username) {
			dispatch(getUserData(username)).then(response => {
				if (!response.message) {
					history.push(`/${username}`);
				} else {
					console.log('error', response)
				}
			})
			setUsername('')
		}
	}

	return (
		<>
			<div className="w-full bg-doodle bg-center bg-repeat bg-cover">
				<div id="main" className="container">
					<div className="flex flex-col min-h-screen">
						<div className="sm:w-11/12 md:3/4 lg:w-1/3 border rounded-lg px-5 py-5 relative m-auto bg-white shadow-lg">
							<div className="flex">
								<img className="relative m-auto rounded-full h-40 w-40 object-cover" src={mainLogo} alt="" />
							</div>
							<div className="text-2xl font-bold my-3">
								<code id="login-text">
									Lian Hub
								</code>
							</div>
							<div>
								<Input value={username} className="w-full text-custom" onChange={(e) => onChangeText(e)} onKeyPress={(e) => handleKeyPress(e)} placeholder="Input your github username and press enter" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Login

