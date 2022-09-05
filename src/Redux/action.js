import * as types from "./actionCreators";
import axios from "axios";
import { API_URL, API_POST_URL } from "./UserListapi.js";

/* For Reading users */
const requestUsers = () => ({
  type: types.USERS_FETCH_REQUEST
});
const loadUsers = (Users) => ({
  type: types.USERSLIST_SUCCESS,
  payload: Users
});
const errorUsers = (error) => ({
  type: types.USERSLIST_FAILURE,
  payload: error
});

/*For loading user posts */
const requestUserPosts = (userId) => ({
  type: types.NUMBER_OF_USERPOSTS_REQUEST,
  payload: userId
});
const loadUserPosts = (Users) => ({
  type: types.NUMBER_OF_USERPOSTS_SUCCESS,
  payload: Users
});
const errorUserPosts = (error) => ({
  type: types.NUMBER_OF_USERPOSTS_FAILURE,
  payload: error
});

/*For Deleting posts */
const postDeleteRequest = () => ({
  type: types.POST_DELETE_REQUEST
});
const postDeleteSuccess = (User) => ({
  type: types.POST_DELETE_SUCCESS,
  payload: User
});
const postDeleteError = (error) => ({
  type: types.POST_DELETE_FAILURE,
  payload: error
});

/*For insertimg posts */
const insertPostRequest = (userId) => ({
  type: types.INSERT_POST_REQUEST
});
const insertPostSuccess = (Post) => ({
  type: types.INSERT_POST_SUCCESS,
  payload: Post
});
const insertPostError = (error) => ({
  type: types.INSERT_POST_FAILURE,
  payload: error
});

/*For updating posts */
const editPostRequest = (title, desc, postId) => ({
  type: types.POST_UPDATE_REQUEST
});
const editPostSuccess = (Post) => ({
  type: types.POST_UPDATE_SUCCESS,
  payload: Post
});
const editPostError = (error) => ({
  type: types.POST_UPDATE_FAILURE,
  payload: error
});

/* function to Load Users from api */
export const getUserList = () => {
  return async function (dispatch) {
    dispatch(requestUsers());
    try {
      const { data } = await axios.get(API_URL);
      if (data) {
        dispatch(loadUsers(data));
      } else {
        dispatch(errorUsers(data.Error));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

/* function to Retrieve posts of the selected user from api */
export const getUserPosts = (userId) => {
  return async function (dispatch) {
    let Url = `${API_URL}/${userId}/posts`;
    // console.log("url to retrieve posts are", Url);
    dispatch(requestUserPosts(userId));
    try {
      const { data } = await axios.get(Url);

      if (data) {
        dispatch(loadUserPosts(data));
      } else {
        dispatch(errorUserPosts(data.Error));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

/* function to Delete post of the user */
export const deletePost = (postId) => {
  console.log("Delete post method");
  return async function (dispatch) {
    let url = `${API_URL}/${postId}`;
    dispatch(postDeleteRequest(postId));
    try {
      const { status } = await axios.delete(url);
      console.log("*******Deleted Data*****", status);
      if (status === 200) {
        console.log("I am inside if condition");
        dispatch(postDeleteSuccess(postId));
      } else {
        dispatch(postDeleteError("Delete unsuccessful"));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

/* function to insert post of the user */
export const insertPost = (seluserId, posttitle, comment) => {
  console.log("insert post method");
  return async function (dispatch) {
    dispatch(insertPostRequest(seluserId, posttitle, comment));
    try {
      const { status, data } = await axios.post(API_POST_URL, {
        userId: Number(seluserId),
        title: posttitle,
        body: comment
      });
      if (status === 201) {
        console.log("I am inside if condition");
        dispatch(insertPostSuccess(data));
      } else {
        dispatch(insertPostError("Delete unsuccessful"));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

/*function to edit posts of the user */

export const editPost = (posttitle, comment, postId) => {
  console.log("Edit post method");
  return async function (dispatch) {
    let url = `${API_URL}/${postId}`;
    dispatch(editPostRequest(posttitle, comment, postId));
    try {
      const { data, status } = await axios.put(url, {
        title: posttitle,
        body: comment,
        id: postId
      });
      if (status === 200) {
        console.log("I am inside if condition");
        dispatch(editPostSuccess(data));
      } else {
        dispatch(editPostError("Edit unsuccessful"));
      }
    } catch (err) {
      console.log(err);
    }
  };
};
