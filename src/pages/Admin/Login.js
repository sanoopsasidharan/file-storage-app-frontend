import axios from "../../axios";
import React, { useContext, useState } from "react";
import LoginFrom from "../../component/LoginForm";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import AdminAuthContext from "../../store/AdminAuthContextProvider";
const cookies = new Cookies();
// import swal from "sweetalert";

function Login() {
  const [email, setEmail] = useState();
  const { getAdminLogged, setAdminDetails } = useContext(AdminAuthContext);

  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await axios
        .post("/api/admin/login", { email, password })
        .then(async (result) => {
          console.log(result);
          console.log(result.data.admin);
          const adminObj = result.data.admin;
          console.log("==============admin token======================");
          console.log(result.data.token);

          console.log("====================================");

          if (!result.data.admin)
            //    setErrmesg("somthing error");

            cookies.set("adminTocken", result.data.token, { path: "/admin" });
          console.log(cookies.get("adminTocken"));

          setAdminDetails(adminObj);

          await getAdminLogged();
          navigate("/admin");
          console.log(result);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const heading = "Admin Login";

  return (
    <>
      <div>Login</div>

      <div>Login</div>
      <LoginFrom
        heading={heading}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
    </>
  );
}

export default Login;
