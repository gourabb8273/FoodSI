import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import "./modalDialog.css";

/**
 *  Reuseable modal component
 */
function ModalDialog({
  shouldEnable,
  variant,
  name,
  bodyTitle,
  bodyDescription,
  closeName,
  actionName,
  handleAction,
  buttonBodyStyle,
  buttonStyle,
}) {
  const [showModal, setShowModal] = useState(false);

  /**
   * Close the modal
   */
  function handleCloseModal() {
    setShowModal(false);
  }

  /**
   * Show the modal
   */
  function handleShowModal() {
    setShowModal(true);
  }

  /**
   * Close the modal and remove all tasks
   */
  function handleClearAndDestroy(e) {
    e.preventDefault();
    handleAction(e);
    handleCloseModal();
  }

  return (
    <div className={buttonBodyStyle}>
      <Button
        className={buttonStyle}
        disabled={!shouldEnable}
        variant={variant}
        onClick={handleShowModal}
      >
        {name}
      </Button>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">{bodyTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-description">{bodyDescription}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            {closeName}
          </Button>
          <Button variant="danger" onClick={handleClearAndDestroy}>
            {actionName}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalDialog;
