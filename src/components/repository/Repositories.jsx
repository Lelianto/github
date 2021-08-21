import React from 'react';
import Overview from '../overviewcard/Overview';

const Repositories = (props) => {
	return (
		<div className="w-full flex flex-wrap">
			<>
				{
					props.repositories && props.repositories.response ?
						<>
							{
								props.repositories.response.map(repository => {
									return (
										<div key={repository.id} className="sm:w-full md:w-1/2 mb-3 flex">
											<Overview repository={repository} />
										</div>
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

export default Repositories