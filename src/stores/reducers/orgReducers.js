import { GET_ORGANIZATION, getOrganization, GET_DETAIL, getDetail, GET_ORG_REPO, getOrgRepo } from "../actions/organization";
import { headersObject } from "./headersObject";

const initialState = {
	organizations: {},
	detail: {},
	orgRepositories: []
}

export const orgReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ORGANIZATION: {
			return { ...state, organizations: action.payload }
		}
		case GET_DETAIL: {
			return { ...state, detail: action.payload }
		}
		case GET_ORG_REPO: {
			return { ...state, orgRepositories: { response: action.payload } }
		}
		default:
			return state
	}
}

export const getOrganizationData = (data) => async (dispatch, getState) => {
	const org = await fetch(`${process.env.REACT_APP_API_URL}/users/${data}/orgs`, headersObject()).then(res => res.json())
	dispatch(getOrganization(org))
	return org
}

export const getOrganizationDetail = (data) => async (dispatch, getState) => {
	const org = await fetch(`${process.env.REACT_APP_API_URL}/orgs/${data}`, headersObject()).then(res => res.json())
	dispatch(getDetail(org))
	return org
}

export const getOrganizationRepos = (data) => async (dispatch, getState) => {
	const orgRepo = await fetch(`${process.env.REACT_APP_API_URL}/orgs/${data}/repos`, headersObject()).then(res => res.json())
	dispatch(getOrgRepo(orgRepo))
	return orgRepo
}