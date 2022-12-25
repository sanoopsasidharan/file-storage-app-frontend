import axios from "../../axios";
import React, { useEffect, useState } from "react";
import DataTable from "../../component/DataTable";
import { useNavigate } from "react-router-dom";
import NavBar from "../../component/NavBar";

function FileLisiting() {
  const [fileError, setfileError] = useState(false);
  const [userFiles, setUserFiles] = useState();
  const navigate = useNavigate();

  // get files in server
  const getFils = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) navigate("/admin");
      await axios
        .get(`/api/admin/files?userId=${userId}`)
        .then((res) => {
          console.log(res.data);
          if (res.data.status) {
            setUserFiles(res.data.files);
          } else {
            setfileError(true);
          }
        })
        .catch((err) => {
          console.log(err);
          setfileError(true);
        });
    } catch (error) {
      console.log(error);
      setfileError(true);
    }
  };
  useEffect(() => {
    getFils();
  }, []);

  return (
    <div>
      <NavBar />
      <DataTable fileError={fileError} userFiles={userFiles} />
    </div>
  );
}

export default FileLisiting;
