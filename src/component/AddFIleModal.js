import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CiNoWaitingSign } from "react-icons/ci";
import { AiFillFolderAdd } from "react-icons/ai";

function AddFIleModal({
  handlePdfFilechage,
  progress,
  sendFile,
  show,
  setShow,
  finsh,
}) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const saveChange = async () => {
    if (finsh) {
      await sendFile();
      handleClose();
    }
  };

  return (
    <>
      <div className="modal-heanding">
        <Button variant="primary" onClick={handleShow}>
          <AiFillFolderAdd /> Files
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>uploading file {progress} %</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input onChange={handlePdfFilechage} type="file" />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          {finsh ? (
            <Button variant="success" onClick={saveChange}>
              Submit
            </Button>
          ) : (
            <Button variant="secondary">
              <CiNoWaitingSign />
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddFIleModal;
