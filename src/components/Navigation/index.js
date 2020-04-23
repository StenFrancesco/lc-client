import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import "./style.css"

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;


  return (

    <Navbar variant="dark">

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/overview" linkText="Overview" />
          <NavbarItem path="/items" linkText="Items" />
          <NavbarItem path="/wishlist" linkText="Wishlist" />
          <NavbarItem path="/assign" linkText="Assign items" />
          <NavbarItem path="/settings" linkText="Settings" />
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}
