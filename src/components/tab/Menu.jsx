import React, { useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { listOfMenu } from '../../assets/svg'
import './Menu.scss'

const Menu = (props) => {
	let history = useHistory();
	let params = useParams()
	const [activedMenu, setActivedMenu] = useState('Overview')

	const onClickChangeNav = (nav) => {
		if (nav) {
			setActivedMenu(nav)
			history.push(`${params.username}?tab=${nav}`);
		}
	}

	const menus = () => {
		return (
			<>
				{
					listOfMenu.map((content) => {
						let defaultClass = 'flex justify-around sm:px-4 md:px-7 py-4 cursor-pointer'
						if (activedMenu === content.title) {
							defaultClass += ' border-b-4 border-orange-bold text-black'
						} else {
							defaultClass += ' text-gray-400'
						}

						return (
							<div key={content.title} className={defaultClass} onClick={() => onClickChangeNav(content.title)}>
								<div className="relative m-auto">
									{content.html}
								</div>
								<div className="relative m-auto pl-2 -mt-1">
									{content.title}
								</div>
							</div>
						)
					})
				}
			</>
		)
	}
	return (
		<>
			<div className={props.scroll ? 'bg-white flex shadow-sm fixed left-0 top-0 right-0 z-2000' : 'bg-white flex shadow-sm'}>
				<div className="sm:w-0 md:w-1/4"></div>
				<div className="sm:w-full md:w-1/2 flex max-w-full overflow-x-scroll no-scrollbar">
					<div className="flex justify-around">
						{menus()}
					</div>
				</div>
				<div className="sm:w-0 md:w-1/4"></div>
			</div>
		</>
	)
}

export default Menu;