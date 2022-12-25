import axios from "../../axios";
import React, { useContext, useState } from "react";
import LoginFrom from "../../component/LoginForm";
import { useNavigate } from "react-router-dom";
import AdminAuthContext from "../../store/AdminAuthContextProvider";

function Login() {
  const { getAdminLogged, setAdminDetails } = useContext(AdminAuthContext);
  const [email, setEmail] = useState("");
  const [Errmesg, setErrmesg] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      if (email === "" || password === "") {
        setErrmesg("please fill form");
        return true;
      }
      await axios
        .post("/api/admin/login", { email, password })
        .then(async (result) => {
          console.log(result);
          console.log(result.data.admin);
          const adminObj = result.data.admin;
          if (!result.data.admin) setErrmesg("somthing error");
          setAdminDetails(adminObj);

          await getAdminLogged();
          navigate("/admin");
          console.log(result);
        });
    } catch (error) {
      setErrmesg("email and password not match");

      console.log(error);
    }
  };

  const heading = "Admin Login";

  return (
    <>
      <LoginFrom
        heading={heading}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
        Errmesg={Errmesg}
      />
    </>
  );
}

export default Login;
