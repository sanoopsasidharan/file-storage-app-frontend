import React, { useEffect, useState } from "react";
import AppBar from "../../component/AppBar";
import axios from "../../axios";
import { Button } from "@mui/material";
import swal from "sweetalert";

import { storage } from "../../store/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import DataTable from "../../component/DataTable";
import { async } from "@firebase/util";

function HomePg() {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileErr, setPdfFileErr] = useState("");
  const [progress, setProgress] = useState(0);
  const [fileUrl, setFileUrl] = useState("");
  const [fileName, setfileName] = useState("");
  const [userFiles, setuserFiles] = useState();
  const [fileError, setfileError] = useState(false);
  const [updateTable, setupdateTable] = useState(false);

  // uplod files
  const handlePdfFilechage = (e) => {
    const file = e.target.files[0];
    uplodFile(file);
  };
  const uplodFile = (file) => {
    setfileName(file.name);

    // return true;
    if (!file) return;

    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          setFileUrl(url);
        });
      }
    );
  };

  // send url in server
  const sendFile = async () => {
    try {
      await await axios
        .post("/api/users/add-file", { url: fileUrl, fileName })
        .then((res) => {
          console.log(res.data.status);
          if (res.data.status) {
            swal("file uploded", " ", "success");
            setupdateTable(true);
          } else {
            swal("file not uploded", " ", "error");
          }
        });
    } catch (error) {
      swal("file not uploded", " ", "error");
      console.log(error);
    }
  };

  // get files in server
  const getFils = async () => {
    try {
      await axios
        .get("/api/users/get-files")
        .then((res) => {
          console.log(res.data.status);
          if (res.data.status) {
            setuserFiles(res.data.files);
          } else {
            setfileError(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const [first, setfirst] = useState();
  const [previwe, setpreviwe] = useState();

  const handileFileInput = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => setpreviwe(reader.result));
    reader.readAsDataURL(file);
    setpreviwe(file.name);
  };

  const file = () => {
    console.log();
  };
  useEffect(() => {
    getFils();
  }, [updateTable]);

  return (
    <>
      <AppBar />
      <div>HomePg</div>
      <div>HomePg</div>
      <input onChange={handlePdfFilechage} type="file" />
      <Button onClick={() => sendFile()} color="success" variant="contained">
        Submit
      </Button>
      <div>HomePg</div>
      <h3>uploaded {progress} %</h3>

      <DataTable fileError={fileError} userFiles={userFiles} />
    </>
  );
}

export default HomePg;
