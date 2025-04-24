"use client";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import {Person, Gear, List } from 'react-bootstrap-icons';
import React, { useState } from "react";
import Logo from "./Logo";


export default function NavbarSuperior() {
  const [toggled, setToggled] = useState(false);
  const navItems = [
    { href: "/page/login", icon: <Person />, label: "Login" },
    { href: "/pages/cadastro", icon: <Gear />, label: "Cadastro" }
  ];

  return (
    <Navbar expand="lg" className="menu-central">
      <Container fluid className="px-0">
        <Link href="/" passHref legacyBehavior>
          <Navbar.Brand className="logo">
            <Logo />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle 
          aria-controls="top-navbar" 
          onClick={() => setToggled(!toggled)}
          className="border-0 me-3"
        >
          <List size={24} />
        </Navbar.Toggle>

        <Navbar.Collapse id="top-navbar" className="justify-content-end">
          <Nav as="ul" className="item-menu-central">
            {navItems.map((item, index) => (
              <Nav.Item as="li" key={index}>
                <Link href={item.href} passHref legacyBehavior>
                  <Nav.Link className="d-flex align-items-center">
                    {React.cloneElement(item.icon, { className: "me-1" })}
                    {item.label}
                  </Nav.Link>
                </Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}