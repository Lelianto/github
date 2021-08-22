import Tab from "../Tab";
import { shallow } from "enzyme";
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { setting } from '../../../assets/svg'

describe("Menu Tab Global: Check content", () => {
	let wrapper;

	let mockProps = {
		defaultClass: "flex justify-around sm:px-4 md:px-7 py-4 cursor-pointer text-gray-400",
		content: {
			html: setting(),
			title: "Setting"
		}
	}

	beforeEach(() => {
		wrapper = shallow(<Tab defaultClass={mockProps.defaultClass} content={mockProps.content} />)
	});

	it('Renders correctly', () => {
		const tree = renderer.create(<Router><Tab defaultClass={mockProps.defaultClass} content={mockProps.content} /></Router>).toJSON();
		expect(tree).toMatchSnapshot();
	});
})