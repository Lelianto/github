import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const HomePage = (props) => {
	return (
		<>
			<div>
				HomePage
			</div>
		</>
	)
}

const mapStateToProps = state => {
	return {}
}

export default connect(mapStateToProps, {})(withRouter(HomePage));