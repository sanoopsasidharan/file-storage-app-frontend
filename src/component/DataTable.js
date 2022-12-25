import React, { useState } from "react";

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
  const [searchTitle, setSearchTitle] = useState("");

  return (
    <div>
      <div>
        <input
          placeholder="searching ...."
          onChange={(e) => setSearchTitle(e.target.value)}
        />
      </div>

      <div className="smTables-main-div">
        <div className="smTables-sub-div">
          <TableContainer sx={{ borderRadius: "13px" }} component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead sx={{ backgroundColor: "black" }}>
                <TableRow>
                  <TableCell sx={fontColor} align="center">
                    No
                  </TableCell>
                  <TableCell sx={fontColor} align="left">
                    Name
                  </TableCell>

                  <TableCell sx={fontColor} align="center">
                    Download
                  </TableCell>
                </TableRow>
              </TableHead>
              {!fileError ? (
                <TableBody>
                  {userFiles
                    ?.filter((value) => {
                      if (searchTitle === "") {
                        return value;
                      } else if (
                        value.fileName
                          .toLowerCase()
                          .includes(searchTitle.toLowerCase())
                      ) {
                        return value;
                      }
                    })
                    .map((item, index) => (
                      <TableRow
                        key={item._id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          sx={intputSm}
                          align="center"
                          component="th"
                          scope="row"
                        >
                          {index + 1}
                        </TableCell>
                        <TableCell
                          sx={intputSm}
                          align="left"
                          component="th"
                          scope="row"
                        >
                          {item.fileName}
                        </TableCell>

                        <TableCell sx={intputSm} align="center">
                          <Button
                            className="button-pdf-color"
                            variant="contained"
                          >
                            <a
                              className="pdf-download-btn"
                              href={item.url}
                              download
                            >
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
    </div>
  );
}

export default DataTable;
