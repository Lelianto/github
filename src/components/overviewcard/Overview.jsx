import React from 'react';
import { stars } from '../../assets/svg';
import colors from '../../assets/colors.json'

const Overview = ({ repository }) => {
	const setStyle = (language) => {
		if (colors[`${language}`]) {
			return { backgroundColor: colors[`${language}`].color }
		}
	}

	const language = (languageExist) => {
		if (languageExist) {
			return (
				<>
					<div className="mr-1"><span className="inline-block h-3 w-3 rounded-full" style={setStyle(languageExist)}></span></div>
					<div className="mr-3">
						{languageExist}
					</div>
				</>
			)
		} else {
			return <></>
		}
	}
	return (
		<>
			<div className="container flex sm:px-0 md:px-3">
				<div className="flex w-full flex-col justify-between border rounded-sm p-3">
					<div className="text-left text-base text-blue-700 font-bold break-words">
						<a
							href={`https://github.com/${repository.full_name}`}
							target="_blank"
							className="text-blue-700 font-bold"
							rel="noopener norefferer"
						>
							<span>{repository.name}</span>
						</a>
					</div>
					<div className="text-left text-base text-gray-500 break-words">
						{repository.description}
					</div>
					<div className="flex mt-3">
						{language(repository.language)}
						<div className="flex">
							<div className="relative m-auto ml-0 mr-1">
								{stars()}
							</div>
							<div className="relative m-auto ml-0 mr-1">
								{repository.stargazers_count}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Overview;