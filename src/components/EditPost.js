import React, { useState } from "react";
import { editPost } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
const EditPost = () => {
  let { Posts } = useSelector((state) => state.data);
  let { postId } = useParams();
  let history = useHistory();
  console.log("postid", postId);
  console.log("posts are", Posts);
  let postdetails = [];
  let dispatch = useDispatch();
  const getPostDetails = () => {
    Posts.map((post) => {
      if (Posts.length !== 0 && post.id === Number(postId)) {
        console.log("found the post id");
        postdetails[0] = post.title;
        postdetails[1] = post.body;
        postdetails[2] = post.id;
      }
      return postdetails;
    });
  };
  getPostDetails();
  const [title, setTitle] = useState(postdetails[0]);
  const [desc, setDesc] = useState(postdetails[1]);

  const handleEditPost = () => {
    if(title!==postdetails[0]&&desc!==postdetails[1]&&title!==""&&desc!==""){
      console.log("title is",title,"title already",postdetails[0]);
      dispatch(editPost(title, desc, Number(postdetails[2])));
      history.push("/posts");
    }
    else{
      alert("Please edit the data to continue..")
    }
  };
  const handleBackPosts = () => {
    history.push("/posts");
  };
  return (
    <>
      <div className="navigate-back">
        <button className="btn btn-posts" onClick={handleBackPosts}>
         Back to Posts
        </button>
      </div>
      <form className="edit-form">
        <h5 style={{ marginBottom: "25px" }}>Edit Post Details</h5>
        <div className="form-group">
          <label>Enter Title </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br></br>
        </div>
        <div className="form-group">
          <label> Enter Post </label>
          <textarea
            type="text"
            className="form-control text-area-form"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <br></br>
          <button
            type="button"
            className="btn btn-info"
            onClick={handleEditPost}
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
};
export default EditPost;
