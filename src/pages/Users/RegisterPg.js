import React, { useState } from "react";
import RegisterFrom from "../../component/RegisterFrom";

function RegisterPg() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [password, setPassword] = useState();

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
      />
    </div>
  );
}

export default RegisterPg;
