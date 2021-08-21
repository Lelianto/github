import { GET_USER, GET_REPO, getUser, getRepo } from "../actions/user"

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
	const user = await fetch(`${process.env.REACT_APP_API_URL}/users/${data}`).then(res => res.json())
	dispatch(getUser(user))
}

export const getRepositories = (data) => async (dispatch, getState) => {
	const repositories = await fetch(`${process.env.REACT_APP_API_URL}/users/${data}/repos`).then(res => res.json())
	dispatch(getRepo(repositories))
}