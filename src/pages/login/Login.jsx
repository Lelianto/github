import React, { useState } from 'react';
import { Input } from 'element-react';
import { useHistory } from 'react-router-dom'
import mainLogo from '../../assets/images/mainLogo.jpg'

const Login = () => {
	let history = useHistory();
	const [username, setUsername] = useState('')

	const onChangeText = (e) => {
		setUsername(e)
	}

	const handleKeyPress = (e) => {
		if (e.which === 13 && username) {
			history.push(`/${username}`);
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
								<code>
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

export default Login;
