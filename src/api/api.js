import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'e9786620-561c-440a-b79f-ca9aa8369084',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  followed(id) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  unfollowed(id) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
};

export const profileAPI = {
  getProfile(profileId) {
    return instance.get(`profile/` + profileId);
  },
  getStatus(profileId) {
    return instance.get(`profile/status/` + profileId);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status });
  },
  savePhoto(file) {
    const formData = new FormData();
    formData.append('image', file);
    return instance.put(`/profile/photo`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile);
  },
};

export const authAPI = {
  authorization() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  login(email, password, rememberMe = false) {
    return instance
      .post(`auth/login`, { email, password, rememberMe })
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
