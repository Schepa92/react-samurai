const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {
      // id: '',
      message: 'How are you?',
      likesCount: 12,
    },
    {
      // id: '',
      message: 'My friend',
      likesCount: 72,
    },
    {
      // id: '',
      message: 'How are you?',
      likesCount: 12,
    },
  ],
  newPostText: '',
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

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
