import React from 'react';
import Overview from '../overviewcard/Overview';

const Repositories = (props) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			<>
				{
					props.repositories && props.repositories.response && props.repositories.response.length ?
						<>
							{
								props.repositories.response.map(repository => {
									return (
										<Overview repository={repository} key={repository.id} />
									)
								})
							}
						</>
						:
						<></>
				}
			</>
		</div>
	)
}

export default Repositories;