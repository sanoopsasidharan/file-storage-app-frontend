import React, { useContext, useState } from "react";
import LoginFrom from "../../component/LoginForm";
import axios from "../../axios";
import AuthContext from "../../store/AuthContextProvider";
import { useNavigate } from "react-router";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function LoginPg() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Errmesg, setErrmesg] = useState("");

  const navigate = useNavigate();

  const { userlogged, getUserLogged, setuserDetails } = useContext(AuthContext);
  const handleLogin = async () => {
    try {
      if (email === "" || password === "") {
        setErrmesg("please fill form");
        return true;
      }
      axios
        .post("/api/users/login-user", { email, password })
        .then(async (result) => {
          console.log(result);
          console.log(result.data.user);
          const userObj = result.data.user;

          if (!result.data.user) setErrmesg("somthing error");

          cookies.set("userTocken", result.data.token, { path: "/" });
          console.log(cookies.get("userTocken"));

          setErrmesg("");
          setuserDetails(userObj);

          await getUserLogged();
          navigate("/");
        })
        .catch((err) => {
          setErrmesg("email and password not match");
          console.log(err.message);
        });
    } catch (error) {
      console.log(error);
      setErrmesg("something went wrong try again ");
    }
  };
  const heading = "Login";

  return (
    <div>
      <LoginFrom
        heading={heading}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
        Errmesg={Errmesg}
      />
    </div>
  );
}

export default LoginPg;
