import { useDispatch } from "react-redux";
import { getUserData, getRepositories } from "../userReducers";

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
	useDispatch: () => mockDispatch
}));

describe("Testing user reducers", () => {
	let dispatch;
	beforeEach(() => {
		dispatch = useDispatch()
	})
	it("will hit Get User Info API and get response", async () => {
		const response = await getUserData('Lelianto')(dispatch);
		expect(response).not.toBeNull()
		expect(typeof response).toEqual('object')
		expect(dispatch).toHaveBeenCalled();
	})
	it("will hit Get User Repositories API and get response", async () => {
		const response = await getRepositories('Lelianto')(dispatch);
		expect(response).not.toBeNull()
		expect(typeof response).toEqual('object')
		expect(dispatch).toHaveBeenCalled();
	})
})