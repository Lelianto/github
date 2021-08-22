import React from 'react';

const OrgProfile = ({ detail }) => {
	return (
		<>
			<div className="w-full text-left">
				<div className="flex mt-5 mb-5">
					<div className="relative m-auto ml-0 mr-3 flex">
						<img className="rounded-md" width="100px" height="100px" src={detail.avatar_url} alt="" />
					</div>
					<div className="relative m-auto ml-0">
						<div id="orgName" className="text-lg font-bold text-black">
							{detail.login}
						</div>
						<div id="orgDesc" className="text-sm text-gray-500">
							{detail.description || '-'}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default OrgProfile;