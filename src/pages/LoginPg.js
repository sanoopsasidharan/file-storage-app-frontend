import React, { useState } from "react";
import LoginFrom from "../component/LoginFrom";

function LoginPg() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <div>
      <LoginFrom
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </div>
  );
}

export default LoginPg;
