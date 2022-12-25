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
import axios from "axios";
var fileDownload = require("js-file-download");
// import downloadFile from "react-file-downloader";

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
  const downloadFile = async (url, fileNam) => {};

  const filedownlod = (url, fileNam) => {
    const link = document.createElement("a");
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // downloadFile(url, fileNam);
    // fileDownload(url, `${fileNam}`);
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
                      <Button color="error" variant="contained">
                        <a href={item.url} download>
                          Click to download
                        </a>
                      </Button>

                      {/* <Button
                        color="error"
                        onClick={() => downloadFile(item.url, item.url)}
                        variant="contained"
                      >
                        download
                      </Button> */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              <div className="nouser-div">
                <p>No files</p>
              </div>
            )}
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default DataTable;
