import React from "react";
import { Spinner } from "react-bootstrap";

import "../../../src/common.css";

/**
 * Loading spinner component
 */
function LoadingSpinner() {
  return (
    <Spinner className="loading-spinner" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default LoadingSpinner;
