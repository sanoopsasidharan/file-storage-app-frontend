import React, { useState } from "react";
import RegisterFrom from "../../component/RegisterFrom";
import axios from "../../axios";
import { useNavigate } from "react-router";

function RegisterPg() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errMeg, setErrMeg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (name === "" || email === "" || number === "" || password === "") {
      setErrMeg("please fill form");
      return true;
    }
    await axios
      .post("/api/users/create-user", { name, email, number, password })
      .then((res) => {
        console.log(res);
        if (!res.data.user) setErrMeg(res.data.msg);
        if (res.data.user) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        setErrMeg("something went wrong try again ");
      });
  };

  return (
    <div>
      <RegisterFrom
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        number={number}
        setNumber={setNumber}
        password={password}
        setPassword={setPassword}
        errMeg={errMeg}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default RegisterPg;
