import React, { useState } from "react";
import { insertPost } from "../Redux/action";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
const AddPost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  let { UserId } = useParams();
  let dispatch = useDispatch();
  let history = useHistory();
  const handleInsertPost = () => {
    if(title!==""||desc!==""){
      dispatch(insertPost(UserId, title, desc));
      history.push("/posts");
    }
    else{
      alert("Please input data to insert a post..");
    }
  };
  const handleBackPosts = () => {
    history.push("/posts");
  };
  return (
    <>
      <div className="navigate-back">
        <button className="btn btn-posts" onClick={handleBackPosts}>
          Posts
        </button>
      </div>
      <form className="add-form">
        <h5 style={{ marginBottom: "25px" }}>Add Post Details</h5>
        <div className="form-group">
          <label>Enter Title </label>
          <input
            type="text"
            placeholder="Enter Title"
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
            placeholder="Enter Post"
            className="form-control"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <br></br>
          <button
            type="button"
            className="btn btn-info"
            style={{ backgroundColor: "rgba(3, 37, 65, 1)", color: "white" }}
            onClick={handleInsertPost}
          >
            Insert
          </button>
        </div>
      </form>
    </>
  );
};
export default AddPost;
