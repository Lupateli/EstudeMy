"use client";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import { HouseDoor, Person, Gear, ThreeDots, List } from 'react-bootstrap-icons';
import React, { useState } from "react";
import Logo from "./Logo";


export default function NavbarSuperior() {
  const [toggled, setToggled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems = [
    { href: "/pages/menuTrilhas", icon: <HouseDoor />, label: "Home" },
    { href: "/pages/perfil", icon: <Person />, label: "Perfil" },
    { href: "/pages/configuracoes", icon: <Gear />, label: "Configurações" }
  ];

  const dropdownItems = [
    { href: "/pages/conta", label: "Conta" },
    { href: "/pages/calendario", label: "Calendário" },
    { href: "/pages/faleConosco", label: "Fale Conosco" },
    { href: "/pages/faq",  label: "FAQ" },
    { href: "/pages/login", label: "Sair", variant: "danger" }
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

            <Nav.Item as="li" className="dropdown-container">
              <div 
                className="dropdown-toggle"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <div className="d-flex align-items-center nav-link2">
                  <ThreeDots className="me-2" />
                  Mais
                </div>
                
                {showDropdown && (
                  <div className="custom-dropdown">
                    {dropdownItems.map((item, index) => (
                      <Link 
                        href={item.href} 
                        key={index}
                        className={`dropdown-item ${item.variant === 'danger' ? 'text-danger' : ''}`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}