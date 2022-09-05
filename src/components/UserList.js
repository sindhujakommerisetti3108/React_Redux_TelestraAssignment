import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserComponent from "./UserComponent";
import { Spinner } from "react-bootstrap";
import Pagination from "react-js-pagination";
import { getUserList } from "../Redux/action";

const UserList = () => {
  let { Users, error, isLoading, totalResults, pageNum } = useSelector(
    (state) => state.data
  );
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserList());
  }, []);

  const handlePageChange = (pageNumber) => {
    dispatch(getUserList(pageNumber));
  };
  return (
    <>
      <div className="content-container">
        {error ? (
          <p className="errormsg">Users Not Found !!! </p>
        ) : isLoading ? (
          <Spinner animation="border" variant="success" />
        ) : (
          <>
            <div className="users-container">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">User ID</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone Number </th>
                    <th scope="col">No of posts</th>
                  </tr>
                </thead>
                <tbody className="">
                  {Users.map((User) => (
                    <tr>
                      <UserComponent user={User} key={User.id} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="pagination_wrapper">
              <Pagination
                color="secondary"
                activePage={pageNum}
                totalItemsCount={Number(totalResults)}
                itemsCountPerPage={10}
                pageRangeDisplayed={5}
                innerClass="pagination"
                itemClass="page-item"
                linkClass="page-link"
                disabledClass="disabled"
                activeClass="active"
                onChange={handlePageChange}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default UserList;
