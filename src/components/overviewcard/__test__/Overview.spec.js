import Overview from "../Overview";
import { shallow } from "enzyme";
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe("Overview Card: Check content", () => {
	let wrapper;
	let mockProps = {
		id: 237374481,
		name: 'alta_final_fe',
		full_name: 'Lelianto/alta_final_fe',
		stargazers_count: "0",
		language: 'JavaScript',
		description: "React testing using jest in Overview Card"
	}

	beforeEach(() => {
		wrapper = shallow(<Overview repository={mockProps} />)
	});

	it('Renders correctly', () => {
		const tree = renderer.create(<Router><Overview repository={mockProps} /></Router>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("Check repository name", () => {
		const repoName = wrapper.find("#repoName")
		expect(repoName.text()).toEqual(mockProps.name)
	})

	it("Check repository description", () => {
		const description = wrapper.find("#description")
		expect(description.text()).toEqual(mockProps.description)
	})

	it("Check repository count", () => {
		const count = wrapper.find("#count")
		expect(count.text()).toEqual(mockProps.stargazers_count)
	})

	it("Check repository main language", () => {
		const language = wrapper.find("#language")
		expect(language.text()).toEqual(mockProps.language)
	})
})