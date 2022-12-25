import axios from "../../axios";
import React, { useEffect, useState } from "react";
import UserTable from "../../component/UserTable";
import NavBar from "../../component/NavBar";

function Home() {
  const [users, setUsers] = useState();
  const [userErr, setUserErr] = useState(false);
  const lisingUsers = async () => {
    try {
      await axios.get("/api/admin/user-list").then((res) => {
        // console.log(res.data.status);
        if (res.data.status) {
          setUsers(res.data.users);
          setUserErr(true);
          // swal("file uploded", " ", "success");
          // setupdateTable(true);
        } else {
          console.log(res, "404");
          // swal("file not uploded", " ", "error");
        }
      });
    } catch (error) {
      // swal("file not uploded", " ", "error");
      console.log(error.message, "error data");
    }
  };
  useEffect(() => {
    lisingUsers();
  }, []);

  return (
    <div>
      <NavBar />
      <UserTable userErr={userErr} users={users} />
    </div>
  );
}

export default Home;
