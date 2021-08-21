import React from 'react';
import { Button } from 'element-react'
import { followers, offices, locations, links } from '../../assets/svg'
import OrganizationList from './OrganizationList';
import './Profile.scss'

const Profile = ({ user, organizations }) => {
	const organizationList = () => {
		return (
			<OrganizationList organizations={organizations} />
		)
	}
	return (
		<>
			<div className="w-full p-3 sm:pt-7 md:pt-3 relative md:-top-8">
				<div className="flex flex-col">
					<div className="flex justify-center">
						<img className="rounded-full img-dynamic" src={user.avatar_url} alt="" />
					</div>
					<div className="py-3">
						<div id="name" className="text-left w-full text-2xl">
							{user.name}
						</div>
						<div id="login" className="text-left w-full text-xl text-gray-400">
							{user.login}
						</div>
					</div>
					<div id="bio" className="text-left w-full text-base mb-2">
						{user.bio}
					</div>
					<div className="text-left w-full">
						<Button className="text-center w-full">Edit profile</Button>
					</div>
					<div className="flex text-left mt-3">
						<div className="relative m-auto mr-2 ml-0">
							{followers()}
						</div>
						<div className="relative m-auto ml-0 mr-0">
							<span id="followers">{user.followers}</span> Followers <span>&#8226;</span> <span id="following">{user.following}</span> Following
						</div>
					</div>
					<div className="flex flex-col mt-3 border-b pb-3">
						<div className="flex">
							<div className="relative m-auto text-left ml-0 mr-2">
								{offices()}
							</div>
							<div id="company" className="relative m-auto text-left ml-0 overflow-ellipsis overflow-hidden w-full max-w-full h-6 whitespace-nowrap">
								{user.company}
							</div>
						</div>
						<div className="flex">
							<div className="relative m-auto text-left ml-0 mr-2">
								{locations()}
							</div>
							<div id="location" className="relative m-auto text-left ml-0 overflow-ellipsis overflow-hidden w-full max-w-full h-6 whitespace-nowrap">
								{user.location}
							</div>
						</div>
						<div className="flex">
							<div className="relative m-auto text-left ml-0 mr-2">
								{links()}
							</div>
							<div id="blog" className="relative m-auto text-left ml-0 overflow-ellipsis overflow-hidden w-full max-w-full h-6 whitespace-nowrap">
								{user.blog}
							</div>
						</div>
					</div>
					<div className="flex flex-col pt-3 border-b pb-3">
						<div className="text-base text-left font-bold">
							Achievements
						</div>
						<div className="flex mt-3">
							<img width="64px" src="https://github.githubassets.com/images/modules/profile/badge--acv-64.png" alt="" />
						</div>
					</div>
					<div className="flex flex-col pt-3 pb-3">
						<div className="text-base text-left font-bold">
							Organizations
						</div>
						<div className="flex flex-wrap mt-3">
							{organizationList()}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Profile;