import { GET_USER, GET_REPO, getUser, getRepo } from "../actions/user"
import { headersObject } from "./headersObject"

const initialState = {
	user: {},
	repositories: {}
}

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER: {
			return { ...state, user: action.payload }
		}
		case GET_REPO: {
			return { ...state, repositories: { response: action.payload } }
		}
		default:
			return state
	}
}

export const getUserData = (data) => async (dispatch, getState) => {
	const user = await fetch(`${process.env.REACT_APP_API_URL}/users/${data}`, headersObject()).then(res => res.json())
	await dispatch(getUser(user))
	return user
}

export const getRepositories = (data) => async (dispatch, getState) => {
	const repositories = await fetch(`${process.env.REACT_APP_API_URL}/users/${data}/repos`, headersObject()).then(res => res.json())
	await dispatch(getRepo(repositories))
	return repositories
}