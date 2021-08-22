import React from 'react';

const Tab = (props) => {
	return (
		<div className={props.defaultClass} onClick={() => props.onClickChangeNav(props.content.title)}>
			<div className="relative m-auto">
				{props.content.html}
			</div>
			<div id={props.content.title} className="relative m-auto pl-2 -mt-1">
				{props.content.title}
			</div>
		</div>
	)
}

export default Tab;