import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Link, useHistory } from 'react-router-dom'
import './Header.scss';
import { FaGithub, FaBell } from 'react-icons/fa';
import { Input } from 'element-react';

const Header = () => {
	let history = useHistory();
	const [text, setText] = useState('')

	const showSettings = (e) => {
		e.preventDefault();
	}

	const onChangeText = (e) => {
		setText(e)
	}

	const handleKeyPress = (e) => {
		if (e.which === 13) {
			history.push(`${text}`);
		}
	}

	return (
		<>
			<div className="bg-white w-full shadow-md">
				<div className="container w-full flex sm:justify-between md:justify-around">
					<div className="sm:block md:hidden mb-5">
						<Menu>
							<Link to={`/`} id="home" className="menu-item">Pull Request</Link>
							<Link to={`/`} onClick={showSettings} id="home" className="menu-item--small" >Issues</Link>
						</Menu>
					</div>
					<div className="sm:p-2">
						<FaGithub size={36} />
					</div>
					<div className="sm:hidden md:flex justify-left w-2/3" id="textbox">
						<Input onChange={(text) => onChangeText(text)} onKeyPress={(e) => handleKeyPress(e)} placeholder="Please input an username" className="max-w-lg h-4 relative my-auto mx-5" append="/" />
						<Link to={`/`} id="home" className="menu-item relative my-auto mx-5 text-gray-400 hover:text-black" >Pull Request</Link>
						<Link to={`/`} onClick={showSettings} id="home" className="menu-item--small relative my-auto mx-5 text-gray-400 hover:text-black" >Issues</Link>
					</div>
					<div className="sm:p-2 flex">
						<FaBell size={26} className="relative m-auto" />
					</div>
				</div>
			</div>
		</>
	)
}

export default Header