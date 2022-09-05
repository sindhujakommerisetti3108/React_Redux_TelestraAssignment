import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../Redux/action";
import { useHistory } from "react-router";
const PostComponent = ({ post }) => {
  let dispatch = useDispatch();
  let history = useHistory();
  const handleEdit = () => {
    console.log("In the edit method of the post");
    history.push(`/edit/${post.id}`);
  };

  const handleDelete = () => {
    console.log("In the Delete method of the post");
    dispatch(deletePost(post.id));
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <button className="btn btn-primary btn-edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default PostComponent;
