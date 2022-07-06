import React from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavLink,
  NavItem,
} from "reactstrap";
import { setAuthToken } from "../helpers/setAuthToken";

const Navi = () => {
  return (
    <Navbar className="mb-3 rounded" color="primary" expand="md" dark>
      <NavbarBrand href="/home">Soru - Cevap</NavbarBrand>
      <NavbarToggler onClick={function noRefCheck() { }} />
      <Collapse navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/home">
              Anasayfa
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/users">
              Kullanıcılar
            </NavLink>
          </NavItem>
        </Nav>
        <NavLink href="/login" className="text-light" onClick={() => {
          setAuthToken(false)
          localStorage.removeItem("token")
        }}>Çıkış Yap</NavLink>
      </Collapse>
    </Navbar>
  );
};

export default Navi;
