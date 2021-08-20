export const GET_ORGANIZATION = "GET_ORGANIZATION";

export const getOrganization = (org) => ({
	type: GET_ORGANIZATION,
	payload: org,
});