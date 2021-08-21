import MenuIndex from "../MenuIndex";
import { shallow } from "enzyme";
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe("Menu Tab in Homepage: Check content", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<MenuIndex scroll={true} menus="Overview" />)
	});

	it('Renders correctly', () => {
		const tree = renderer.create(<Router><MenuIndex scroll={true} menus="Overview" /></Router>).toJSON();
		expect(tree).toMatchSnapshot();
	});
})