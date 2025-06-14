"use client";
import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/components/Logo";
import {
  List,
  Book,
  BarChart,
  BookmarkFill,
  Envelope,
  BackpackFill,
  HouseDoor,
  Person,
  ThreeDots,
  Gear,
} from "react-bootstrap-icons";

const Topo = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [sidebarToggled, setSidebarToggled] = useState(false);
  const [navbarToggled, setNavbarToggled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se é mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Dados dos menus
  const sidebarItems = [
    {
      icon: <Book size={18} />,
      label: "Meus Cursos",
      href: "/pages/meusCursos",
    },
    { icon: <BarChart size={18} />, label: "Ranking", href: "/pages/ranking" },
    {
      icon: <BookmarkFill size={18} />,
      label: "Lições Salvas",
      href: "/pages/salvas",
    },
    {
      icon: <Envelope size={18} />,
      label: "Caixa de Entrada",
      href: "/pages/mensagens",
    },
    {
      icon: <BackpackFill size={18} />,
      label: "Criar Trilhas",
      href: "/pages/criarTrilha",
    },
  ];

  const navItems = [
    {
      href: "/pages/menuTrilhas",
      icon: <HouseDoor size={18} />,
      label: "Home",
    },
    { href: "/pages/perfil", icon: <Person size={18} />, label: "Perfil" },
    {
      href: "/pages/configuracoes",
      icon: <Gear size={18} />,
      label: "Configurações",
    },
  ];

  const dropdownItems = [
    { href: "/pages/conta", label: "Conta" },
    { href: "/pages/calendario", label: "Calendário" },
    { href: "/pages/faleConosco", label: "Fale Conosco" },
    { href: "/pages/faq", label: "FAQ" },
    { href: "/", label: "Sair", variant: "danger" },
  ];

  // Fechar sidebar ao clicar em um link (apenas no mobile)
  const handleSidebarLinkClick = () => {
    if (isMobile) {
      setSidebarToggled(false);
    }
  };

  // Calcular margem do logo baseado no estado da sidebar
  const getLogoMargin = () => {
    if (isMobile) {
      return sidebarToggled ? "320px" : "50px";
    } else {
      return collapsed ? "20px" : "300px";
    }
  };

  // Calcular margem do conteúdo principal
  const getMainContentMargin = () => {
    if (isMobile) {
      return "0px";
    } else {
      return collapsed ? "60px" : "280px";
    }
  };

  return (
    <div className="flex">
      {/* Botão da Sidebar para Mobile */}
      {isMobile && (
        <button
          onClick={() => setSidebarToggled(!sidebarToggled)}
          style={{
            position: "fixed",
            top: "10px",
            left: "10px",
            zIndex: 1100,
            background: "#007aff",
            border: "none",
            borderRadius: "8px",
            padding: "8px",
            color: "white",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease-in-out",
          }}
          aria-label="Toggle Sidebar"
        >
          <List size={20} />
        </button>
      )}

      {/* Overlay para fechar sidebar no mobile */}
      {isMobile && sidebarToggled && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
          onClick={() => setSidebarToggled(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        collapsed={isMobile ? false : collapsed}
        toggled={false}
        breakPoint="never"
        onMouseEnter={() => !isMobile && setCollapsed(false)}
        onMouseLeave={() => !isMobile && setCollapsed(true)}
        width={isMobile ? "280px" : collapsed ? "60px" : "280px"}
        rootStyles={{
          height: "100vh",
          position: "fixed",
          zIndex: 1000,
          backgroundColor: "#007aff",
          overflow: "hidden",
          transform:
            isMobile && !sidebarToggled ? "translateX(-100%)" : "translateX(0)",
          transition: "transform 0.3s ease-in-out, width 0.3s ease-in-out",
          "& > div": {
            backgroundColor: "#007aff",
            overflow: "hidden !important",
            "& ul": {
              height: "100%",
              overflow: "hidden",
            },
          },
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
            onClick={() => {
              if (isMobile) {
                setSidebarToggled(false);
              } else {
                setCollapsed(!collapsed);
              }
            }}
            style={{
              textAlign: "center",
              padding: "10px 0",
              color: "white",
              marginBottom: "10px",
            }}
          >
            {(!collapsed || isMobile) && (
              <span className="text-white">MENU</span>
            )}
          </MenuItem>

          {/* Itens da sidebar */}
          <div
            style={{
              height: "calc(100vh - 120px)",
              overflowY: "auto",
              scrollbarWidth: "none",
            }}
          >
            {sidebarItems.map((item, index) => (
              <MenuItem
                key={index}
                icon={<div className="text-white">{item.icon}</div>}
                component={<Link href={item.href} />}
                onClick={handleSidebarLinkClick}
                style={{
                  padding: "8px 15px",
                  color: "white",
                }}
              >
                {(!collapsed || isMobile) && item.label}
              </MenuItem>
            ))}
          </div>

          {/* ConsultAI no bottom */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              backgroundColor: "#007aff",
            }}
          >
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
              onClick={handleSidebarLinkClick}
              style={{
                padding: "8px 15px",
                color: "white",
              }}
            >
              {(!collapsed || isMobile) && "ConsultAI"}
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>

      {/* Main Content */}
      <div
        style={{
          marginLeft: getMainContentMargin(),
          transition: "margin-left 0.3s ease-in-out",
          width: "100%",
        }}
      >
        <Navbar expand="lg" className="menu-central">
          <Container fluid className="px-0">
            <Link href="/" passHref legacyBehavior>
              <div
                style={{
                  marginLeft: getLogoMargin(),
                  transition: "margin-left 0.3s ease-in-out",
                }}
              >
                <Navbar.Brand className="logo">
                  <Logo />
                </Navbar.Brand>
              </div>
            </Link>

            {/* Botão do Navbar (apenas para itens do navbar) */}
            <Navbar.Toggle
              aria-controls="top-navbar"
              onClick={() => setNavbarToggled(!navbarToggled)}
              className="border-0 me-3"
            >
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>

            <Navbar.Collapse id="top-navbar" className="justify-content-end">
              <Nav as="ul" className="item-menu-central">
                {navItems.map((item, index) => (
                  <Nav.Item as="li" key={index}>
                    <Link href={item.href} passHref legacyBehavior>
                      <Nav.Link
                        className="d-flex align-items-center"
                        onClick={() => setNavbarToggled(false)}
                      >
                        {React.cloneElement(item.icon, { className: "me-1" })}
                        {item.label}
                      </Nav.Link>
                    </Link>
                  </Nav.Item>
                ))}

                {/* Desktop: Dropdown "Mais" */}
                {!isMobile && (
                  <Nav.Item as="li" className="dropdown-container">
                    <div
                      className="dropdown-toggle"
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                      style={{ cursor: "pointer" }}
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
                              className={`dropdown-item ${
                                item.variant === "danger" ? "text-danger" : ""
                              }`}
                              onClick={() => setShowDropdown(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </Nav.Item>
                )}

                {/* Mobile: Itens do "Mais" direto na navbar */}
                {isMobile &&
                  dropdownItems.map((item, index) => (
                    <Nav.Item as="li" key={`mobile-${index}`}>
                      <Link href={item.href} passHref legacyBehavior>
                        <Nav.Link
                          className={`d-flex align-items-center ${
                            item.variant === "danger" ? "text-danger" : ""
                          }`}
                          onClick={() => setNavbarToggled(false)}
                        >
                          {item.label}
                        </Nav.Link>
                      </Link>
                    </Nav.Item>
                  ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Topo;
