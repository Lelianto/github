import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import Header from '../../components/header/Header';
import OrgProfile from '../../components/orgprofile/OrgProfile';
import { getOrganizationDetail, getOrganizationRepos } from '../../stores/reducers/orgReducers';
import Menu from '../../components/tab/Menu';
import { listMenuOrg } from '../../assets/svg';
import Repositories from '../../components/repository/Repositories';
import Empty from '../../components/empty/Empty';

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
		dispatch(getOrganizationDetail(params.orgname)).then(response => {
			if (response.message) return history.push('/login')
		})
		dispatch(getOrganizationRepos(params.orgname))
		setUsername(localStorage.getItem("lastUser"))
	}, [params.orgname])

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
		setOrgName(params.orgname)
		setCurrentTab(queries.get('tab') || 'Overview')
	}, [location]);

	const tabContent = () => {
		if (["Overview", "Repositories"].includes(currentTab)) {
			return (
				<>
					<div className="sm:w-full md:container text-md mt-5 mb-3 text-left">
						{currentTab === "Overview" ? "Popular Repositories" : currentTab}
					</div>
					<Repositories repositories={props.repositories} />
				</>
			)
		} else {
			return (
				<div className="sm:w-full md:container text-md mt-5 mb-3 text-left">
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
			<div id="main" className="container">
				<OrgProfile detail={props.detail} />
			</div>
			<div id="main" className="w-full">
				<Menu scroll={scroll} listOfMenu={listMenuOrg} params={params.orgname} />
			</div>
			<div id="main" className="container">
				{tabContent()}
			</div>
		</>
	)
}

const mapStateToProps = state => {
	return {
		detail: state.orgReducer.detail,
		repositories: state.orgReducer.orgRepositories
	}
}

export default connect(mapStateToProps, {})(Organization);