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
import OrgProfile from '../../components/orgprofile/OrgProfile';
import Menu from '../../components/tab/Menu';
import Repositories from '../../components/repository/Repositories';
import Empty from '../../components/empty/Empty';
/**
 * @description import reducers, store function, and assets
 */
import { getOrganizationDetail, getOrganizationRepos } from '../../stores/reducers/orgReducers';
import { listMenuOrg } from '../../assets/svg';

/**
 * @function useQuery to access query params in route
 */
const useQuery = () => {
	return new URLSearchParams(useLocation().search);
}

const Organization = (props) => {
	let location = useLocation()
	let dispatch = useDispatch()
	let params = useParams()
	let queries = useQuery()
	let history = useHistory();
	const [scroll, setScroll] = useState(false)
	const [currentTab, setCurrentTab] = useState('Overview')
	const [orgname, setOrgName] = useState('')
	const [username, setUsername] = useState('')

	useEffect(() => {
		/**
		 * @function getOrganizationDetail, @function getOrganizationRepos, @function setUsername will be fired when the @param params.username changed
		 */
		dispatch(getOrganizationDetail(params.orgname)).then(response => {
			if (response.message) return history.push('/login')
		})
		dispatch(getOrganizationRepos(params.orgname))
		setUsername(localStorage.getItem("lastUser"))
	}, [params.orgname])

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

	useEffect(() => {
		/**
		 * @function setOrgName, @function setCurrentTab will be fired when location is changing
		 */
		setOrgName(params.orgname)
		setCurrentTab(queries.get('tab') || 'Overview')
	}, [location]);

	/**
	 * @function tabContent to handle logic between contained tab page and not.
	 * @return conditional component based on @function setCurrentTab and @var currentTab
	 */
	const tabContent = () => {
		if (["Overview", "Repositories"].includes(currentTab)) {
			return (
				<>
					<div className="w-full md:container text-md mt-5 mb-3 text-left">
						{currentTab === "Overview" ? "Popular Repositories" : currentTab}
					</div>
					<Repositories repositories={props.repositories} />
				</>
			)
		} else {
			return (
				<div className="w-full md:container text-md mt-10 mb-10 text-left">
					<Empty username={orgname} currentTab={currentTab} />
				</div>
			)
		}
	}

	return (
		<>
			<div id="main" className="w-full">
				<Header lastUser={username} />
			</div>
			<div id="main" className="md:container mx-4">
				<OrgProfile detail={props.detail} />
			</div>
			<div className="w-full shadow-sm">
				<div id="main" className="md:container mx-4">
					<Menu scroll={scroll} listOfMenu={listMenuOrg} params={params.orgname} />
				</div>
			</div>
			<div id="main" className="md:container mx-4">
				{tabContent()}
			</div>
		</>
	)
}

/**
 * @function mapStateToProps contain with any state from store file
 * @param {*} state
 * @returns @var detail for getting organization detail object from orgReducer
 * @returns @var repositories for getting orgRepositories object from orgReducer
 */
const mapStateToProps = state => {
	return {
		detail: state.orgReducer.detail,
		repositories: state.orgReducer.orgRepositories
	}
}

export default connect(mapStateToProps, {})(Organization);