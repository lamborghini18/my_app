import * as axios from "axios";



const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '871a2d76-a5bd-4ada-b1fe-550ef6545529'
	}
})


export const usersAPI = {
	getUsers (currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
	},
	unFollowUsers (id) {
		return instance.delete(`follow/${id}`).then(response => response.data);
	},
	followUsers (id) {
		return instance.post(`follow/${id}`, {}).then(response => response.data);
	},
	getProfileUsers (userId) {
		return instance.get(`profile/` + userId).then(response => response.data);
	}

}

// export const getUsers = (currentPage = 1, pageSize = 10) => {
// 	return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
// }

// export const unFollowUsers = (id) => {
// 	return instance.delete(`follow/${id}`).then(response => response.data);
// }

// export const followUsers = (id) => {
// 	return instance.post(`follow/${id}`, {}).then(response => response.data);
// }

// export const getProfileUsers = (userId) => {
// 	return instance.get(`profile/` + userId).then(response => response.data);
// }