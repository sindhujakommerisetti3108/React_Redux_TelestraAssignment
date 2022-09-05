import React from "react";
import { useSelector } from "react-redux";
import PostComponent from "./PostComponent";
import { useHistory } from "react-router";
const UserPostList = () => {
  let history = useHistory();
  let { Posts } = useSelector((state) => state.data);
  let userId;
  if (Posts.length > 0) {
    userId = Posts[0].userId;
  }
  const handleAdd = () => {
    console.log("in the add method of the userspost component");
    history.push(`/add/${userId}`);
  };
  const handleBack = () => {
    console.log("In the back method from the post component");
    history.push("/");
  };
  console.log("userId is ", userId);
  return (
    <>
      <div className="navigate-back">
        <button className="btn  btn-add" onClick={handleAdd}>
          Add new post
        </button>
        <button className="btn btn-back" onClick={handleBack}>
          User's List
        </button>
      </div>
      <div className="posts-container">
        {Posts.map((post, index) => (
          <PostComponent post={post} key={post.id} />
        ))}
      </div>
    </>
  );
};
export default UserPostList;
