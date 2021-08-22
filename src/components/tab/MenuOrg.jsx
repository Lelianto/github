import React from 'react';

const MenuOrg = (props) => {
	return (
		<>
			<div className={props.scroll ? 'bg-white container flex fixed left-0 top-0 right-0 z-2000' : 'bg-white flex'}>
				<div className="w-full flex max-w-full overflow-x-scroll no-scrollbar">
					<div className="flex justify-around">
						{props.menus}
					</div>
				</div>
			</div>
		</>
	)
}

export default MenuOrg;