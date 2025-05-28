"use client";
import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Navbar, Nav, Container} from 'react-bootstrap';
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/components/Logo";
import {List,Book,BarChart,BookmarkFill,Envelope,BackpackFill,HouseDoor,Person,ThreeDots,Gear} from "react-bootstrap-icons";

const Topo = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [toggled, setToggled] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);

  // Dados dos menus
  const sidebarItems = [
    { icon: <Book size={18} />, label: "Meus Cursos", href: "/pages/meusCursos" },
    { icon: <BarChart size={18} />, label: "Ranking", href: "/pages/ranking" },
    { icon: <BookmarkFill size={18} />, label: "Lições Salvas", href: "/pages/salvas" },
    { icon: <Envelope size={18} />, label: "Caixa de Entrada", href: "/pages/mensagens" },
    { icon: <BackpackFill size={18} />, label: "Criar Trilhas", href: "/pages/criar-trilhas" },
  ];

  const navItems = [
    { href: "/pages/menuTrilhas", icon: <HouseDoor size={18} />, label: "Home" },
    { href: "/pages/perfil", icon: <Person size={18} />, label: "Perfil" },
    { href: "/pages/configuracoes", icon: <Gear size={18} />, label: "Configurações" },
  ];

  const dropdownItems = [
    { href: "/pages/conta", label: "Conta" },
    { href: "/pages/calendario", label: "Calendário" },
    { href: "/pages/faleConosco", label: "Fale Conosco" },
    { href: "/pages/faq",  label: "FAQ" },
    { href: "/pages/landingPage", label: "Sair", variant: "danger" }
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar
        collapsed={collapsed}
        toggled={toggled}
        onToggle={() => setToggled(!toggled)}
        breakPoint="md"
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
        rootStyles={{
          height: "100vh",
          position: "fixed",
          zIndex: 1000,
          backgroundColor: "#007aff",
          overflow: "hidden",
          "& > div": {
            backgroundColor: "#007aff",
            overflow: "hidden !important",
            "& ul": {
              height: "100%",
              overflow: "hidden",
            }
          }
        }}
      >
        <Menu
          menuItemStyles={{
            button: {
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                backgroundColor: "#0063cc",
                transform: "scale(0.95)",
              },
            },
          }}
        >
          {/* Ícone do menu */}
          <MenuItem
            icon={<List className="text-white" size={20} />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ 
              textAlign: "center",
              padding: "10px 0",
              color: "white",
              marginBottom: "10px",
            }}
          >
            {!collapsed && <span className="text-white">MENU</span>}
          </MenuItem>

          {/* Itens da sidebar */}
          <div style={{
            height: "calc(100vh - 120px)",
            overflowY: "auto",
            scrollbarWidth: "none",
          }}>
            {sidebarItems.map((item, index) => (
              <MenuItem
                key={index}
                icon={<div className="text-white">{item.icon}</div>}
                component={<Link href={item.href} />}
                style={{ 
                  padding: "8px 15px",
                  color: "white",
                }}
              >
                {!collapsed && item.label}
              </MenuItem>
            ))}
          </div>
          <div style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: "#007aff",
          }}>
            <MenuItem
              icon={
                <div className="w-6 h-6 relative">
                  <Image
                    src="/img/ConsultAi.png"
                    fill
                    alt="ConsultAI"
                    className="object-contain"
                    sizes="24px"
                  />
                </div>
              }
              component={<Link href="/pages/consultAi" />}
              style={{ 
                padding: "8px 15px",
                color: "white",
              }}
            >
              {!collapsed && "ConsultAI"}
            </MenuItem>
          </div>
        </Menu>
            </Sidebar>

      <div style={{ 
        marginLeft: collapsed ? "80px" : "250px",
        transition: "margin-left 0.3s",
        width: "100%",
      }}>
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
      </div>
    </div>
  );
};

export default Topo;