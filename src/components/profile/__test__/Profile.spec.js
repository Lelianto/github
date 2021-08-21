import Profile from "../Profile";
import { shallow } from "enzyme";
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe("Profile: Check content", () => {
	let wrapper;
	let mockProps = {
		user: {
			avatar_url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
			name: "Lelianto Eko Pradana",
			bio: "Love React.js!",
			login: "Lelianto",
			followers: "0",
			following: "0",
			company: "company",
			location: "Indonesia",
			blog: "lelianto.eko"
		},
		organizations: [
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
	}
	beforeEach(() => {
		wrapper = shallow(<Profile user={mockProps.user} organizations={mockProps.organizations} />)
	});

	it('Renders correctly', () => {
		const tree = renderer.create(<Router><Profile user={mockProps.user} organizations={mockProps.organizations} /></Router>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("Check user profile name", () => {
		const name = wrapper.find("#name")
		expect(name.text()).toEqual(mockProps.user.name)
	})

	it("Check user profile bio", () => {
		const bio = wrapper.find("#bio")
		expect(bio.text()).toEqual(mockProps.user.bio)
	})

	it("Check user profile username", () => {
		const username = wrapper.find("#login")
		expect(username.text()).toEqual(mockProps.user.login)
	})

	it("Check user profile followers", () => {
		const followers = wrapper.find("#followers")
		expect(followers.text()).toEqual(mockProps.user.followers)
	})

	it("Check user profile following", () => {
		const following = wrapper.find("#following")
		expect(following.text()).toEqual(mockProps.user.following)
	})

	it("Check user profile company", () => {
		const company = wrapper.find("#company")
		expect(company.text()).toEqual(mockProps.user.company)
	})

	it("Check user profile location", () => {
		const location = wrapper.find("#location")
		expect(location.text()).toEqual(mockProps.user.location)
	})

	it("Check user profile blog", () => {
		const blog = wrapper.find("#blog")
		expect(blog.text()).toEqual(mockProps.user.blog)
	})
})


