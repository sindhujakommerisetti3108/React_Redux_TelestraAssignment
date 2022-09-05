import * as types from "./actionCreators.js";

const initialstate = {
  Users: [],
  Posts: [],
  Post: {},
  isloading: true,
  isPostsLoading: true,
  isPostsinserted: false,
  postsError: false,
  error: false,
  pageNum: 1,
  postId: 0,
  isPostDeleting: true
};
const UserReducer = (state = initialstate, action) => {
  switch (action.type) {
    case types.USERS_FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
        Users: []
      };
    case types.USERSLIST_SUCCESS:
      return {
        ...state,
        Users: action.payload,
        totalResults: action.payload.totalResults,
        isLoading: false
      };
    case types.USERSLIST_FAILURE:
      return {
        ...state,
        error: true,
        isLoading: false
      };

    case types.NUMBER_OF_USERPOSTS_REQUEST:
      return {
        ...state,
        isPostsLoading: true,
        postsError: false,
        Posts: []
      };

    case types.NUMBER_OF_USERPOSTS_SUCCESS:
      return {
        ...state,
        isPostsLoading: false,
        Posts: action.payload
      };
    case types.NUMBER_OF_USERPOSTS_FAILURE:
      return {
        ...state,
        postsError: true,
        isPostsLoading: false
      };

    case types.INSERT_POST_REQUEST:
      return {
        ...state,
        isPostsinserted: false
      };
    case types.INSERT_POST_SUCCESS:
      return {
        ...state,
        isPostsinserted: true,
        Posts: [...state.Posts, action.payload]
      };
    case types.POST_UPDATE_REQUEST:
      return {
        ...state,
        Post: action.payload
      };
    case types.POST_UPDATE_SUCCESS:
      return {
        ...state,
        Posts: state.Posts.map((Post, i) =>
          Post.id === action.payload.id
            ? {
                ...Post,
                title: action.payload.title,
                body: action.payload.body
              }
            : Post
        )
      };
    case types.POST_DELETE_REQUEST:
      return {
        ...state,
        postId: action.payload,
        isPostDeleting: true
      };
    case types.POST_DELETE_SUCCESS:
      return {
        ...state,
        isPostDeleting: false,
        Posts: state.Posts.filter((post) => post.id !== action.payload)
      };

    default: {
      return state;
    }
  }
};
export default UserReducer;
