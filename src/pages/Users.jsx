import React, { useState, useEffect } from "react";
import user from "../components/user";
import axios from "axios";
const Users = () => {
  const [usersArray, setusersArray] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => setuserArray);
  }, []);

  return (
    <div>
      {usersArray.map((user) => (
        <user user={user} />
      ))}
    </div>
  );
};

export default Users;
