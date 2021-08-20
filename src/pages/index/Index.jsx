import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import Menu from '../../components/tab/Menu';
import Profile from '../../components/profile/Profile';
import Overview from '../../components/overviewcard/Overview';
import { getUserData, getRepositories } from '../../stores/reducers/userReducers';
import { getOrganizationData } from '../../stores/reducers/orgReducers'

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
}

const HomePage = (props) => {
	let params = useParams()
	let queries = useQuery()
	let dispatch = useDispatch()
	const [scroll, setScroll] = useState(false)
	const [username, setUsername] = useState('')
	const [currentTab, setCurrentTab] = useState('Overview')
	const location = useLocation();

	useEffect(() => {
		dispatch(getUserData(params.username))
		dispatch(getRepositories(params.username))
		dispatch(getOrganizationData(params.username))
	}, [location])

	useEffect(() => {
		setUsername(params.username)
		setCurrentTab(queries.get('tab') || 'Overview')
	}, [location]);

	const handleScroll = (event) => {
		setScroll(event.srcElement.documentElement.scrollTop > 70)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	}, [])

	return (
		<>
			<div id="main" className="w-full">
				<Header />
			</div>
			<div id="main" className="container min-h-screen">
				<br />
				<Menu scroll={scroll} />
				<div className="container">
					<div className="sm:block md:flex">
						<div className="sm:w-full md:w-1/4">
							<Profile user={props.user} organizations={props.organizations} />
						</div>
						<div className="sm:w-full md:w-3/4 flex flex-col">
							<div className="container text-md mt-5 mb-3 text-left">
								Popular Repositories
							</div>
							<div className="w-full flex flex-wrap">
								<>
									{
										props.repositories.response ?
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
		organizations: state.orgReducer.organization
	}
}

export default connect(mapStateToProps, {})(HomePage);