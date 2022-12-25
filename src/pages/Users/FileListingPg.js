import React, { useEffect, useState } from "react";
import AppBar from "../../component/AppBar";
import axios from "../../axios";
import swal from "sweetalert";

import { storage } from "../../store/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import DataTable from "../../component/DataTable";
import AddFIleModal from "../../component/AddFIleModal";

function FileListingPg() {
  const [progress, setProgress] = useState(0);
  const [fileUrl, setFileUrl] = useState("");
  const [fileName, setfileName] = useState("");
  const [userFiles, setuserFiles] = useState();
  const [fileError, setfileError] = useState(false);
  const [updateTable, setupdateTable] = useState(false);
  const [finsh, setfinsh] = useState(false);
  const [show, setShow] = useState(false);

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
          setfinsh(true);
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

  useEffect(() => {
    getFils();
  }, [updateTable]);

  return (
    <>
      <AppBar />

      <AddFIleModal
        finsh={finsh}
        sendFile={sendFile}
        handlePdfFilechage={handlePdfFilechage}
        progress={progress}
        show={show}
        setShow={setShow}
      />

      <DataTable fileError={fileError} userFiles={userFiles} />
    </>
  );
}

export default FileListingPg;
