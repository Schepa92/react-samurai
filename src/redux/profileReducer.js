import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    {
      id: 4343625,
      message: 'How are you?',
      likesCount: 12,
    },
    {
      id: 78489780,
      message: 'My friend',
      likesCount: 72,
    },
    {
      id: 609786,
      message: 'How are you?',
      likesCount: 12,
    },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let idCount = new Date().toLocaleString();
      let newPost = {
        id: idCount,
        message: action.postText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

    case SET_STATUS:
      return { ...state, status: action.status };

    default:
      return state;
  }
};

export const addPost = (text) => ({ type: ADD_POST, postText: text });

const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

const setUserStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getUserProfile = (profileId) => async (dispatch) => {
  let response = await profileAPI.getProfile(profileId);
  dispatch(setUserProfile(response.data));
};

export const getUserStatus = (profileId) => async (dispatch) => {
  let response = await profileAPI.getStatus(profileId);
  dispatch(setUserStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export default profileReducer;
