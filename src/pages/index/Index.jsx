import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import Header from '../../components/header/Header';
import Menu from '../../components/tab/Menu';
import Profile from '../../components/profile/Profile';
import { getUserData, getRepositories } from '../../stores/reducers/userReducers';
import { getOrganizationData } from '../../stores/reducers/orgReducers'
import { listOfMenu } from '../../assets/svg';
import Repositories from '../../components/repository/Repositories';
import Empty from '../../components/empty/Empty';

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
		dispatch(getUserData(params.username)).then(response => {
			if (response.message) return history.push('/login')
		})
		dispatch(getRepositories(params.username))
		dispatch(getOrganizationData(params.username))
		localStorage.setItem("lastUser", params.username)
		setUsername(params.username)
	}, [params.username])

	useEffect(() => {
		setCurrentTab(queries.get('tab') || 'Overview')
	}, [location])

	const handleScroll = (event) => {
		setScroll(event.srcElement.documentElement.scrollTop > 75)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	}, [])

	const tabContent = () => {
		if (["Overview", "Repositories"].includes(currentTab)) {
			return (
				<>
					<div className="container text-md mt-5 mb-3 text-left">
						{currentTab === "Overview" ? "Popular Repositories" : currentTab}
					</div>
					<Repositories repositories={props.repositories} />
				</>
			)
		} else {
			return (
				<div className="container text-md mt-10 mb-3 text-left">
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
			<div id="main" className="sm:w-full md:container">
				<br />
				<Menu scroll={scroll} listOfMenu={listOfMenu} params={params.username} access="index" />
			</div>
			<div id="main" className="container min-h-screen">
				<div className="w-full">
					<div className="sm:block md:flex">
						<div className="sm:w-full md:w-1/4">
							<Profile user={props.user} organizations={props.organizations} />
						</div>
						<div className="sm:w-full md:w-3/4 flex flex-col">
							{tabContent()}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

const mapStateToProps = state => {
	return {
		user: state.userReducer.user,
		repositories: state.userReducer.repositories,
		organizations: state.orgReducer.organizations
	}
}

export default connect(mapStateToProps, {})(HomePage);