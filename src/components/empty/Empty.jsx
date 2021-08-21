import React from 'react';
import emptyImage from '../../assets/images/emptyImage.png'

const Empty = ({ username, currentTab }) => {
	return (
		<>
			<div className="w-full flex flex-col">
				<div className="relative m-auto mt-5">
					<img width="125px" src={emptyImage} alt="" />
				</div>
				<div className="relative m-auto text-gray-800 font-bold text-center sm:text-xl md:text-3xl mt-5">
					<span className="text-blue-600">{username}</span>, Your <code>{currentTab}</code> page is under construction
				</div>
			</div>
		</>
	)
}

export default Empty;