import Header from "../Header";
import { shallow } from "enzyme";
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: () => ({ username: 'Lelianto' }),
	useRouteMatch: () => ({ url: '/Lelianto' }),
	useLocation: () => ({ url: '/' })
}));

describe("Header: Check menu content", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Header lastUser={'last-user'} />)
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('Renders correctly', () => {
		const tree = renderer.create(<Router><Header lastUser={'last-user'} /></Router>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("Pull request (1 and 2) menu is exist.", () => {
		const pullRequestMenu1 = wrapper.find('#pullrequest1');
		expect(pullRequestMenu1.text()).toEqual('Pull Request')
		const pullRequestMenu2 = wrapper.find('#pullrequest2');
		expect(pullRequestMenu2.text()).toEqual('Pull Request')
	});
	it("Issues (1 and 2) menu is exist.", () => {
		const issuesMenu1 = wrapper.find('#issues1');
		expect(issuesMenu1.text()).toEqual('Issues')
		const issuesMenu2 = wrapper.find('#issues2');
		expect(issuesMenu2.text()).toEqual('Issues')
	});
	it("Input Username.", () => {
		wrapper.find('#inputUsername').simulate('change', { target: { value: 'Lelianto' } });
		expect(wrapper.find("#inputUsername").get(0).props.value.target.value).toEqual("Lelianto");
	})
});