import React from "react";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./style.css";

function RegisterFrom({
  name,
  setName,
  email,
  setEmail,
  number,
  setNumber,
  password,
  setPassword,
  errMeg,
  handleSubmit,
}) {
  return (
    <div className="from-main-div">
      <div className="from-sub-div">
        <div className="from-heading-div">
          <h3> Register</h3>
        </div>
        <Box component="form" noValidate autoComplete="off">
          <div className="textField-main-div">
            <div className="textField-div">
              <TextField
                required
                sx={{ width: "90%" }}
                id="outlined-required"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="textField-div">
              <TextField
                required
                sx={{ width: "90%" }}
                id="outlined-required"
                label="Email"
                type="email"      
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="textField-div">
              <TextField
                required
                sx={{ width: "90%" }}
                id="outlined-required"
                label="Number"
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="textField-div">
              <TextField
                required
                sx={{ width: "90%" }}
                id="outlined-required"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="form-submit-btn-div">
            <Button onClick={handleSubmit} color="success" variant="contained">
              Submit
            </Button>
          </div>
          <div>
            <p className="register-form-error">{errMeg}</p>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default RegisterFrom;
