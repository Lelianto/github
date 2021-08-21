import React from 'react';
import { Link } from 'react-router-dom';

const OrganizationList = ({ organizations }) => {
	return (
		<>
			{
				organizations.length && organizations.length !== 0 ?
					<>
						{
							organizations.map((organization) => {
								return (
									<Link key={organization.id} to={`/org/${organization.login}`}>
										<img className="mr-1 mb-1" size="32px" height="32px" width="32px" src={organization.avatar_url} alt="" />
									</Link>
								)
							})
						}
					</>
					:
					<></>
			}
		</>
	)
}

export default OrganizationList