import * as axios from "axios";


export const getUsers = (currentPage = 1, pageSize = 10) => {
	return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
		withCredentials: true,
	}).then(response => response.data);
}

export const unFollowUsers = (id) => {
	return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
		withCredentials: true,
		headers: {
			'API-KEY': '871a2d76-a5bd-4ada-b1fe-550ef6545529'
		}
	})
}

export const followUsers = (id) => {
	return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
		withCredentials: true,
		headers: {
			'API-KEY': '871a2d76-a5bd-4ada-b1fe-550ef6545529'
		}
	})
}

export const getProfileUsers = (userId) => {
	return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
}