import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import * as Scroll from 'react-scroll';
import './Menu.scss';
import Tab from '../tabmenu/Tab';
import MenuIndex from './MenuIndex';
import MenuOrg from './MenuOrg';

const Menu = (props) => {
	let history = useHistory();
	const [activedMenu, setActivedMenu] = useState('Overview')

	const onClickChangeNav = (nav) => {
		if (nav) {
			setActivedMenu(nav)
			if (window.screen.width < 992) {
				let scroll = Scroll.animateScroll;
				scroll.scrollTo(window.screen.height);
			}
			history.push(`${props.params}?tab=${nav}`);
		}
	}

	const menus = () => {
		return (
			<>
				{
					props.listOfMenu.map((content) => {
						let defaultClass = 'flex justify-around px-4 md:px-7 py-4 cursor-pointer'
						if (activedMenu === content.title) {
							defaultClass += ' border-b-2 border-orange-bold text-black'
						} else {
							defaultClass += ' text-gray-400'
						}

						return (
							<Tab key={content.title} content={content} onClickChangeNav={onClickChangeNav} defaultClass={defaultClass} />
						)
					})
				}
			</>
		)
	}

	if (props.access === 'index') {
		return <><MenuIndex scroll={props.scroll} menus={menus()} /></>
	} else {
		return <><MenuOrg scroll={props.scroll} menus={menus()} /></>
	}
}

export default Menu;