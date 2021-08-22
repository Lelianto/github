import { getUser, getRepo, GET_USER, GET_REPO } from "../user";

describe("Test user Action", () => {
	it("Will check the return of getUser Action", () => {
		const result = getUser('Lelianto')
		expect(result).toEqual({ type: GET_USER, payload: 'Lelianto' })
	})
	it("Will check the return of getRepo Action", () => {
		const result = getRepo('Lelianto')
		expect(result).toEqual({ type: GET_REPO, payload: 'Lelianto' })
	})
})