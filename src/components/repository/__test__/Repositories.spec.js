import Repositories from "../Repositories";
import { shallow } from "enzyme";
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe("Repositories: Check content", () => {
	let wrapper;
	let mockProps = {
		response: [
			{
				id: 237374481,
				name: 'alta_final_fe',
				full_name: 'Lelianto/alta_final_fe',
				stargazers_count: "0",
				language: 'JavaScript',
				description: "React testing using jest in Overview Card"
			}
		]
	}

	beforeEach(() => {
		wrapper = shallow(<Repositories repositories={mockProps} />)
	});

	it('Renders correctly', () => {
		const tree = renderer.create(<Router><Repositories repositories={mockProps} /></Router>).toJSON();
		expect(tree).toMatchSnapshot();
	});
})