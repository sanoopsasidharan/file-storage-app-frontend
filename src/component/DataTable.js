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

function DataTable({ userFiles, fileError, showUser, deletingUser }) {
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
                  Age
                </TableCell>
                <TableCell sx={fontColor} align="center">
                  Email
                </TableCell>
                <TableCell sx={fontColor} align="center">
                  Number
                </TableCell>
                <TableCell sx={fontColor} align="center">
                  delete
                </TableCell>
              </TableRow>
            </TableHead>
            {!fileError ? (
              <TableBody>
                {userFiles?.map((item, index) => (
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
                      {item.fileName}
                    </TableCell>
                    <TableCell sx={intputSm} align="center">
                      {item.url}
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
                        onClick={() => deletingUser(item._id)}
                        variant="contained"
                      >
                        delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              <div className="nouser-div">
                <p>no users</p>
              </div>
            )}
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default DataTable;
