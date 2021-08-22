/**
 * @description import dependencies
 */
import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useLocation, useParams, useHistory } from 'react-router-dom';
/**
 * @description import components
 */
import Header from '../../components/header/Header';
import Menu from '../../components/tab/Menu';
import Profile from '../../components/profile/Profile';
import Repositories from '../../components/repository/Repositories';
import Empty from '../../components/empty/Empty';
/**
 * @description import reducers, store function, and assets
 */
import { getUserData, getRepositories } from '../../stores/reducers/userReducers';
import { getOrganizationData } from '../../stores/reducers/orgReducers'
import { listOfMenu } from '../../assets/svg';

/**
 * @function useQuery to access query params in route
 */
const useQuery = () => {
	return new URLSearchParams(useLocation().search);
}

const HomePage = (props) => {
	let dispatch = useDispatch()
	let params = useParams()
	let queries = useQuery()
	let history = useHistory();
	let location = useLocation()
	const [scroll, setScroll] = useState(false)
	const [username, setUsername] = useState('')
	const [currentTab, setCurrentTab] = useState('Overview')

	useEffect(() => {
		/**
		 * @function getUserData, @function getRepositories, @function getOrganizationData, @function setUsername will be fired when the @param params.username changed
		 */
		dispatch(getUserData(params.username)).then(response => {
			if (response.message) return history.push('/login')
		})
		dispatch(getRepositories(params.username))
		dispatch(getOrganizationData(params.username))
		setUsername(params.username)
		localStorage.setItem("lastUser", params.username)
	}, [params.username])

	useEffect(() => {
		/**
		 * @function setCurrentTab will be fired in every changes of @var location
		 */
		setCurrentTab(queries.get('tab') || 'Overview')
	}, [location])

	/**
	 * @function handleScroll to handle scroll event and get scroll position event
	 * @param {*} event 
	 */
	const handleScroll = (event) => {
		setScroll(event.srcElement.documentElement.scrollTop > 75)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	}, [])

	/**
	 * @function tabContent to handle logic between contained tab page and not.
	 * @return conditional component based on @function setCurrentTab and @var currentTab
	 */
	const tabContent = () => {
		if (["Overview", "Repositories"].includes(currentTab)) {
			return (
				<>
					<div className="w-full lg:container text-md mt-5 mb-3 text-left">
						{currentTab === "Overview" ? "Popular Repositories" : currentTab}
					</div>
					<Repositories repositories={props.repositories} />
				</>
			)
		} else {
			return (
				<div className="container text-md mt-10 mb-10 text-left">
					<Empty username={username} currentTab={currentTab} />
				</div>
			)
		}
	}

	return (
		<>
			<div id="main" className="w-full">
				<Header lastUser={username} />
			</div>
			<div id="main" className="w-full shadow-sm max-w-full overflow-x-scroll no-scrollbar">
				<br />
				<div className="md:container mx-4">
					<Menu scroll={scroll} listOfMenu={listOfMenu} params={params.username} access="index" />
				</div>
			</div>
			<div id="main" className="md:container mx-4 min-h-screen">
				<div className="w-full">
					<div className="block md:flex">
						<div className="w-full md:w-1/4">
							<Profile user={props.user} organizations={props.organizations} />
						</div>
						<div className="w-full md:w-3/4 flex flex-col">
							{tabContent()}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

/**
 * @function mapStateToProps contain with any state from store file
 * @param {*} state 
 * @returns @var user for getting user object from userReducer
 * @returns @var repositories for getting repositories object from userReducer
 * @returns @var organizations for getting organizations object from orgReducer
 */
const mapStateToProps = state => {
	return {
		user: state.userReducer.user,
		repositories: state.userReducer.repositories,
		organizations: state.orgReducer.organizations
	}
}

export default connect(mapStateToProps, {})(HomePage);