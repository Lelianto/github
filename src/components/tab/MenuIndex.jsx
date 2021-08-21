import React from 'react';

const MenuIndex = (props) => {
	return (
		<>
			<div className={props.scroll ? 'bg-white container flex shadow-sm fixed left-0 top-0 right-0 z-2000' : 'bg-white flex shadow-sm'}>
				<div className="sm:w-0 md:w-1/4"></div>
				<div className="sm:w-full md:w-1/2 flex max-w-full overflow-x-scroll no-scrollbar">
					<div className="flex justify-around">
						{props.menus}
					</div>
				</div>
				<div className="sm:w-0 md:w-1/4"></div>
			</div>
		</>
	)
}

export default MenuIndex;