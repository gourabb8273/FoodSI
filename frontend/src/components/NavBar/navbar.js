import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { logout } from "../../store/slices/credentialSlice";
import "./navbar.css";

/**
 * Reusable navbar component
 */
function NavBar({
  login,
  isLoggedIn,
  signup,
  shouldShowSearch,
  handleChangeSearch,
  searchText,
  signout,
  joinAsSeller,
  shouldNavBarTitleRender,
}) {  
  const history = useNavigate();  
  const dispatch = useDispatch();
  const userName = isLoggedIn ? "Gourab" : "Guest";

  /**
   *  Logout the user session
   */
  function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
    Cookies.remove("jwtAuth");
    history("/");
  }

  return (
    <Navbar
      className="navbar-header"
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand className="navbar-header_logo">
          <h3>
            Food<span>SI</span>
          </h3>
        </Navbar.Brand>
        {shouldNavBarTitleRender && (
          <Navbar.Brand className="navbar-header_item"></Navbar.Brand>
        )}
        {shouldShowSearch && (
          <>
            <Input
              onChange={handleChangeSearch}
              value={searchText}
              className="searchfood"
              placeholder="Search any food..."
            ></Input>
            <SearchOutlined className="icon-search" />
          </>
        )}
        {/* {userName && <p className="welcomeUser">{`Hi ${userName} !`}</p>} */}
        {!isLoggedIn && login && (
          <Nav className="me-auto">
            <Nav.Link className="navbar-header_link--login" href="/login">
              {login}
            </Nav.Link>
          </Nav>
        )}
        {!isLoggedIn && signup && (
          <Nav className="me-auto">
            <Nav.Link className="navbar-header_link--signup" href="/login">
              {signup}
            </Nav.Link>
          </Nav>
        )}
        {!isLoggedIn && joinAsSeller && (
          <Nav className="me-auto">
            <Nav.Link className="navbar-header_link--seller" href="/login">
              {joinAsSeller}
            </Nav.Link>
          </Nav>
        )}
        {isLoggedIn && signout && (
          <Nav className="me-auto">
            <Nav.Link
              onClick={handleLogout}
              className="navbar-header_link--login"
              href="/"
            >
              {signout}
            </Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}
export default NavBar;
