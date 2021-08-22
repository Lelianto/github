import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import HomePage from '../pages/index/Index';
import Organization from '../pages/organization/Organization';
import Login from '../pages/login/Login';
import { store } from '../stores/store';
import { Provider } from "react-redux";

const MainRoute = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/org' component={Organization} />
					<Route exact path='/login' component={Login} />
					<Route path='/org/:orgname' component={Organization} />
					<Route path='/:username' component={HomePage} />
				</Switch>
			</BrowserRouter>
		</Provider>
	)
}
export default MainRoute;