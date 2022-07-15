const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {
      id: 1,
      message: 'How are you?',
      likesCount: 12,
    },
    {
      id: 2,
      message: 'My friend',
      likesCount: 72,
    },
    {
      id: 1,
      message: 'How are you?',
      likesCount: 12,
    },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = '';
      break;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      break;

    default:
      return state;
  }
  return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
