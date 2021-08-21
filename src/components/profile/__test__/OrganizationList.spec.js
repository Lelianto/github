import OrganizationList from "../OrganizationList";
import { shallow } from "enzyme";
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe("Organization List: Check content", () => {
	let wrapper;
	let mockProps = [
		{
			id: 123,
			login: 'Organization1',
			avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
		},
		{
			id: 234,
			login: 'Organization2',
			avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
		}
	]
	beforeEach(() => {
		wrapper = shallow(<OrganizationList organizations={mockProps} />)
	});

	it('Renders correctly', () => {
		const tree = renderer.create(<Router><OrganizationList organizations={mockProps} /></Router>).toJSON();
		expect(tree).toMatchSnapshot();
	});
})