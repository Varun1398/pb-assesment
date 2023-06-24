import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { listUser } from "../../store/Actions/listUserAction";
import "./homepage.css";
import Pagination from "react-js-pagination";
import { listUserPerPage } from "../../store/Actions/listUserPerPageAction";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

function Homepage() {
  const dispatch = useDispatch();
  const listUsersData = useSelector((state) => state.listUser.data);
  const listUserPerPageData = useSelector(
    (state) => state.listUserPerPage.data
  );
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState();
  const [itemsPerPage, setItemsPerPage] = useState();
  const [totalItems, setTotalItems] = useState(0);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoader(true);
    dispatch(listUser());
  }, []);

  useEffect(() => {
    (async () => {
      if (listUsersData && listUsersData.data.length > 0) {
        setUser(listUsersData?.data);
        setItemsPerPage(listUsersData.per_page);
        setTotalItems(listUsersData?.total);
        setCurrentPage(listUsersData.page);
        setLoader(false);
      }
      if (listUserPerPageData && listUserPerPageData.data.length > 0) {
        setUser(listUserPerPageData?.data);
        setItemsPerPage(listUserPerPageData.per_page);
        setTotalItems(listUserPerPageData.total);
        setCurrentPage(listUserPerPageData.page);
      }
    })();
  }, [listUsersData, listUserPerPageData]);

  const handlePageChange = (pageNumber) => {
    setLoader(true);
    dispatch(listUserPerPage(pageNumber));
  };

  const handleUserClick = (user) => {
    localStorage.setItem("userDetails", JSON.stringify(user))
    navigate("/userDetails");
  };

  if (loader === true) {
    return <Loader />;
  } else {
    return (
      <div>
        <h2 className="item-title">List of Users</h2>
        <div className="list">
          {user.map((userData) => {
            return (
              <ul
                className="list-group"
                key={userData.id}
                onClick={() => handleUserClick(userData)}
              >
                <li className="list-group-item list-group-item-hover">
                  {userData.first_name} {userData.last_name}
                </li>
              </ul>
            );
          })}
        </div>
        <div>
          <Pagination
            itemClass="page-item"
            linkClass="page-link"
            className="pagination"
            activePage={currentPage}
            activeLinkClass="current-page"
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={totalItems}
            onChange={handlePageChange}
          />
        </div>
      </div>
    );
  }
}
export default Homepage;
