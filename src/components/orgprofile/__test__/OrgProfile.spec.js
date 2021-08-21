import OrgProfile from "../OrgProfile";
import { shallow } from "enzyme";
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe("Organization Profile: Check content", () => {
	let wrapper;
	let mockProps = {
		avatar_url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
		login: "Lelianto",
		description: "React testing using jest in Organization Profile"
	}

	beforeEach(() => {
		wrapper = shallow(<OrgProfile detail={mockProps} />)
	});

	it('Renders correctly', () => {
		const tree = renderer.create(<Router><OrgProfile detail={mockProps} /></Router>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("Check organization name", () => {
		const orgName = wrapper.find("#orgName")
		expect(orgName.text()).toEqual(mockProps.login)
	})

	it("Check organization description", () => {
		const orgDesc = wrapper.find("#orgDesc")
		expect(orgDesc.text()).toEqual(mockProps.description)
	})
})