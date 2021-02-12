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
	unFollow (userId) {
		return instance.delete(`follow/${userId}`).then(response => response.data);
	},
	follow(userId) {
		return instance.post(`follow/${userId}`, {}).then(response => response.data);
	},
	getProfileUsers(userId) {
		return instance.get(`profile/` + userId);
	}
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`);
	}
}
