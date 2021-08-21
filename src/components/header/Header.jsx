import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'
import './Header.scss';
import { FaGithub, FaBell } from 'react-icons/fa';
import { Input } from 'element-react';

const Header = ({ lastUser }) => {
	let params = useParams()
	let history = useHistory();
	const location = useLocation()
	const [text, setText] = useState('')

	const onChangeText = (e) => {
		setText(e)
	}

	useEffect(() => {
		if (!(params.username || params.orgname)) {
			history.push(`/login`);
		}
	}, [location]);

	const handleKeyPress = (e) => {
		if (e.which === 13) {
			history.push(`/${text}`);
			setText('')
		}
	}

	return (
		<>
			<div className="bg-white w-full shadow-md">
				<div className="sm:w-full md:container flex sm:justify-between md:justify-around">
					<div className="sm:block md:hidden mb-5">
						<Menu>
							<Link to={`/${lastUser}`} id="home" className="menu-item">Pull Request</Link>
							<Link to={`/${lastUser}`} id="home" className="menu-item--small" >Issues</Link>
						</Menu>
					</div>
					<div className="sm:p-2">
						<Link to={`/${lastUser}`} id="logo">
							<FaGithub size={36} />
						</Link>
					</div>
					<div className="sm:hidden md:flex justify-left w-2/3" id="textbox">
						<Input value={text} onChange={(text) => onChangeText(text)} onKeyPress={(e) => handleKeyPress(e)} placeholder="Please input an username & press enter" className="max-w-lg h-4 relative my-auto mx-5" append="/" />
						<Link to={`/${lastUser}`} id="home" className="menu-item relative my-auto mx-5 text-gray-400 hover:text-black" >Pull Request</Link>
						<Link to={`/${lastUser}`} id="home" className="menu-item--small relative my-auto mx-5 text-gray-400 hover:text-black" >Issues</Link>
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