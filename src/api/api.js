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
};

export const followAPI = {
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

export const authAPI = {
  authorization() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
};
