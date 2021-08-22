import Menu from "../Menu";
import { shallow } from "enzyme";
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { listOfMenu } from '../../../assets/svg';

describe("Menu Tab Global: Check content", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Menu listOfMenu={listOfMenu} scroll={true} access="index" params="Lelianto" />)
	});

	it('Renders correctly', () => {
		const tree = renderer.create(<Router><Menu listOfMenu={listOfMenu} scroll={true} access="index" params="Lelianto" /></Router>).toJSON();
		expect(tree).toMatchSnapshot();
	});
})