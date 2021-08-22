export const GET_ORGANIZATION = "GET_ORGANIZATION";
export const GET_DETAIL = "GET_DETAIL";
export const GET_ORG_REPO = "GET_ORG_REPO"

export const getOrganization = (org) => ({
	type: GET_ORGANIZATION,
	payload: org,
});

export const getDetail = (detail) => ({
	type: GET_DETAIL,
	payload: detail,
});

export const getOrgRepo = (repository) => ({
	type: GET_ORG_REPO,
	payload: repository,
});