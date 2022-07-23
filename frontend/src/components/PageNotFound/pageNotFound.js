import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

import NavBar from "../NavBar/navbar";
import "./pageNotFound.css";

/**
 * Page not found 404 component
 */
function PageNotFound() {
  const history = useNavigate();
  const shouldNavBarTitleRender = false;

  /**
   * Navigate to main page
   */
  function handleRedirect(e) {
    e.preventDefault();
    history("/");
  }

  return (
    <div>
      <NavBar shouldNavBarTitleRender={shouldNavBarTitleRender} />
      <div className="page-not__found">
        <h2>404</h2>
        <div className="page-not_found--body">
          <h3>Oops!, This Page Could Not Be Found!</h3>
          <h5>THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST</h5>
          <Button variant="primary" onClick={handleRedirect}>
            BACK TO HOME PAGE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
