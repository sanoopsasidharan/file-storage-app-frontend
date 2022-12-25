import React from "react";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./style.css";

function LoginFrom({ email, password, setEmail, setPassword, handleLogin }) {
  return (
    <div className="from-main-div">
      <div className="from-sub-div">
        <div className="from-heading-div">
          <h3>Login</h3>
        </div>
        <Box component="form" noValidate autoComplete="off">
          <div className="textField-main-div">
            <div className="textField-div">
              <TextField
                required
                sx={{ width: "90%" }}
                id="outlined-required"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="textField-div">
              <TextField
                sx={{ width: "90%" }}
                required
                id="outlined-required"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="form-submit-btn-div">
            <Button onClick={handleLogin} color="success" variant="contained">
              Submit
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default LoginFrom;
