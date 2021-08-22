import { getOrganization, getDetail, getOrgRepo, GET_ORGANIZATION, GET_DETAIL, GET_ORG_REPO } from "../organization";

describe("Test organization Action", () => {
	it("Will check the return of getOrganization Action", () => {
		const result = getOrganization('Lelianto')
		expect(result).toEqual({ type: GET_ORGANIZATION, payload: 'Lelianto' })
	})
	it("Will check the return of getDetail Action", () => {
		const result = getDetail('OrgTesting123')
		expect(result).toEqual({ type: GET_DETAIL, payload: 'OrgTesting123' })
	})
	it("Will check the return of getOrgRepo Action", () => {
		const result = getOrgRepo('OrgTesting123')
		expect(result).toEqual({ type: GET_ORG_REPO, payload: 'OrgTesting123' })
	})
})