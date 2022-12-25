import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./style.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const fontColor = {
  color: "whitesmoke",
  fontSize: "18px",
  paddingTop: " 15px ",
  paddingBottom: "15px",
};
const intputSm = {
  fontSize: "15px",
  paddingTop: " 15px ",
  paddingBottom: "15px",
  backgroundColor: "#efefef",
  color: "#000000d1",
};

function UserTable({ users, userErr }) {
  const navigate = useNavigate();

  const handleViewFiles = (userId) => {
    localStorage.setItem("userId", userId);
    navigate("/admin/fileListing");
  };
  return (
    <div className="smTables-main-div">
      <div className="smTables-sub-div">
        <TableContainer sx={{ borderRadius: "13px" }} component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead sx={{ backgroundColor: "black" }}>
              <TableRow>
                <TableCell sx={fontColor} align="center">
                  Name
                </TableCell>
                <TableCell sx={fontColor} align="center">
                  Email
                </TableCell>
                <TableCell sx={fontColor} align="center">
                  Number
                </TableCell>
                <TableCell sx={fontColor} align="center">
                  View files
                </TableCell>
              </TableRow>
            </TableHead>
            {userErr ? (
              <TableBody>
                {users?.map((item, index) => (
                  <TableRow
                    key={item._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      sx={intputSm}
                      align="center"
                      component="th"
                      scope="row"
                    >
                      {item.name}
                    </TableCell>
                    <TableCell sx={intputSm} align="center">
                      {item.email}
                    </TableCell>
                    <TableCell sx={intputSm} align="center">
                      {item.number}
                    </TableCell>

                    <TableCell sx={intputSm} align="center">
                      <Button
                        color="error"
                        onClick={() => handleViewFiles(item._id)}
                        variant="contained"
                      >
                        view
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              <div className="nouser-div">
                <p>No users</p>
              </div>
            )}
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default UserTable;
