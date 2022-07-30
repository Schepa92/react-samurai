import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
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
  newPostText: '',
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let idCount = new Date().toLocaleString();
      let newPost = {
        id: idCount,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, newPost],
      };

    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

    case SET_STATUS:
      return { ...state, status: action.status };

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

const setUserStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getUserProfile = (profileId) => (dispatch) => {
  profileAPI.getProfile(profileId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};

export const getUserStatus = (profileId) => (dispatch) => {
  profileAPI.getStatus(profileId).then((response) => {
    dispatch(setUserStatus(response.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  });
};

export default profileReducer;
