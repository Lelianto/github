import { useDispatch } from "react-redux";
import { getOrganizationData, getOrganizationDetail, getOrganizationRepos } from "../orgReducers";

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
	useDispatch: () => mockDispatch
}));

describe("Testing user reducers", () => {
	let dispatch;
	beforeEach(() => {
		dispatch = useDispatch()
	})
	it("will hit Get Organization Info API and get response", async () => {
		const response = await getOrganizationData('Lelianto')(dispatch);
		expect(response).not.toBeNull()
		expect(typeof response).toEqual('object')
		expect(dispatch).toHaveBeenCalled();
	})
	it("will hit Get Organization Detail API and get response", async () => {
		const response = await getOrganizationDetail('OrgTesting123')(dispatch);
		expect(response).not.toBeNull()
		expect(typeof response).toEqual('object')
		expect(dispatch).toHaveBeenCalled();
	})
	it("will hit Get Organization Repos API and get response", async () => {
		const response = await getOrganizationRepos('OrgTesting123')(dispatch);
		expect(response).not.toBeNull()
		expect(typeof response).toEqual('object')
		expect(dispatch).toHaveBeenCalled();
	})
})