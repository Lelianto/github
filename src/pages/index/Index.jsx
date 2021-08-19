import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import Menu from '../../components/tab/Menu';

const HomePage = (props) => {
	let params = useParams()
	const [scroll, setScroll] = useState(false)
	const [username, setUsername] = useState('')
	const location = useLocation();

	useEffect(() => {
		setUsername(params.username)
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
			<div id="main" className="container min-h-screen">
				<Header />
				<br />
				<Menu scroll={scroll} />
			</div>
			<div className="container min-h-screen">
				<Header />
			</div>
		</>
	)
}

const mapStateToProps = state => {
	return {}
}

export default connect(mapStateToProps, {})(HomePage);