import React, { createContext, useEffect, useState } from "react";
import axios from "../axios";
const AdminAuthContext = createContext(null);

function AdminAuthContextProvider(props) {
  const [adminLogged, setAdminLogged] = useState(true);
  const [adminDetails, setAdminDetails] = useState("");
  //   const [userData, setuserData] = useState(undefined);
  useEffect(() => {
    getAdminLogged();
  }, [adminLogged]);

  const getAdminLogged = async () => {
    await axios
      .post("/api/admin/IsAdminLogin")
      .then((resutl) => {
        // console.log("====================================");
        // console.log(resutl);
        // console.log("====================================");
        if (resutl.data.admin === false) setAdminLogged(false);
        else setAdminLogged(true);
        if (resutl.data.payload) {
          const { payload } = resutl.data;
          setAdminDetails(payload);
        }
      })
      .catch((err) => {
        setAdminLogged(false);
      });
  };

  return (
    <AdminAuthContext.Provider
      value={{
        adminLogged,
        setAdminDetails,
        adminDetails,
        getAdminLogged,
      }}
    >
      {props.children}
    </AdminAuthContext.Provider>
  );
}

export default AdminAuthContext;
export { AdminAuthContextProvider };
