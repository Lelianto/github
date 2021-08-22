import MenuOrg from "../MenuOrg";
import { shallow } from "enzyme";
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe("Menu Tab in Organization Page: Check content", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<MenuOrg scroll={true} menus="Overview" />)
	});

	it('Renders correctly', () => {
		const tree = renderer.create(<Router><MenuOrg scroll={true} menus="Overview" /></Router>).toJSON();
		expect(tree).toMatchSnapshot();
	});
})