import React from "react";
import { useEffect } from "react";
import { getUserPosts } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const UserComponent = ({ user }) => {
  let dispatch = useDispatch();
  let { Posts } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getUserPosts(user.id));
  }, []);

  const handleUserPosts = () => {
    dispatch(getUserPosts(user.id));
  };

  return (
    <>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        {user.address.street}
        <br />
        {user.address.suite}
        <br />
        {user.address.city},{user.address.zipcode}
      </td>
      <td>{user.phone}</td>
      <td>
        <Link to="/posts">
          <button className=" btn btn-link" onClick={handleUserPosts}>
            {Posts.length}
          </button>
        </Link>
      </td>
    </>
  );
};

export default UserComponent;
