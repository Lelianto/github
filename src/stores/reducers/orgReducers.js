import { GET_ORGANIZATION, getOrganization } from "../actions/organization";

const initialState = {
	organization: {}
}

export const orgReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ORGANIZATION: {
			return { ...state, organization: action.payload }
		}
		default:
			return state
	}
}

export const getOrganizationData = (data) => async (dispatch, getState) => {
	const org = await fetch(`https://api.github.com/users/${data}/orgs`).then(res => res.json())
	dispatch(getOrganization(org))
}