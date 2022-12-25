import { Button } from "@mui/material";
import React from "react";
import { AiFillFolderAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import AppBar from "../../component/AppBar";
import "../../component/style.css";

function UserHomePg() {
  const navigate = useNavigate();

  return (
    <>
      <AppBar />

      <div className="home-page-main-div">
        <h2>Store Your Files in Cloud</h2>
        <Button onClick={() => navigate("fileListing")} variant="contained">
          <AiFillFolderAdd />
        </Button>
      </div>
    </>
  );
}

export default UserHomePg;
