import React, { useState, useEffect } from "react";
import User from "../components/User";
import axios from "axios";
const Users = () => {
  const [usersArray, setusersArray] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => setusersArray(res.data.users || []));
  }, []);

  return (
    <div>
      {usersArray.map((userData) => (
        <User key={userData.id} user={userData} />
      ))}
    </div>
  );
};

export default Users;
