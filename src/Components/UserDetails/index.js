import React, { useEffect, useState } from "react";

function UserDetails() {
  const [userDetailsData, setUserDetailsData] = useState(
    JSON.parse(localStorage.getItem("userDetails"))
  );
  const [avatar, setAvatar] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  useEffect(() => {
    setAvatar(userDetailsData.avatar);
    setFirstName(userDetailsData.first_name);
    setLastName(userDetailsData.last_name);
  }, []);
    return (
      <div className="user-details">
        <div className="user-avatar">
          <img src={avatar} alt="User Avatar" />
        </div>
        <div className="user-info">
          <h2>
            {firstName} {lastName}
          </h2>
        </div>
      </div>
    );
  }
export default UserDetails;
