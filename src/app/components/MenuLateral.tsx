"use client";
import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Link from "next/link";
import Image from "next/image";
import {
  List,
  Book,
  BarChart,
  BookmarkFill,
  Envelope,
  BackpackFill
} from "react-bootstrap-icons";

const MenuLateral = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [toggled, setToggled] = useState(false);

  const menuItems = [
    { icon: <Book size={18} />, label: "Meus Cursos", href: "/pages/meusCursos" },
    { icon: <BarChart size={18} />, label: "Ranking", href: "/pages/ranking" },
    { icon: <BookmarkFill size={18} />, label: "Lições Salvas", href: "/pages/salvas" },
    { icon: <Envelope size={18} />, label: "Caixa de Entrada", href: "/pages/mensagens" },
    { icon: <BackpackFill size={18} />, label: "Criar Trilhas", href: "/criar-trilhas" },
  ];

  return (
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
      }}
    >
      <Menu>
        {/* Cabeçalho do menu */}
        <MenuItem
          icon={<List className="text-white" size={22} />}
          onClick={() => setCollapsed(!collapsed)}
          style={{ 
            textAlign: "center",
            padding: "10px 0",
            marginBottom: "10px",
          }}
        >
          {!collapsed && <span className="text-white">MENU</span>}
        </MenuItem>

        {/* Itens do menu */}
        <div style={{ padding: "0 10px" }}>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              icon={<div className="flex justify-center items-center w-6">{item.icon}</div>}
              component={<Link href={item.href} />}
              style={{ 
                padding: "8px 15px",
                margin: "4px 0",
              }}
            >
              {!collapsed && (
                <div className="flex items-center gap-3">
                  <span className="text-white">{item.label}</span>
                </div>
              )}
            </MenuItem>
          ))}
        </div>

        {/* Rodapé com ConsultAI */}
        <div style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          padding: "0 10px",
        }}>
          <MenuItem
            icon={
              <div className="relative w-6 h-6">
                <Image
                  src="/img/ConsultAi.png"
                  alt="ConsultAI"
                  fill
                  className="object-contain"
                />
              </div>
            }
            component={<Link href="/ConsultAi"/>}
            style={{
              padding: "8px 15px",
              margin: "4px 0",
            }}
          >
            {!collapsed && (
              <div className="flex items-center gap-3">
                <span className="text-white">ConsultAI</span>
              </div>
            )}
          </MenuItem>
        </div>
      </Menu>
    </Sidebar>
  );
};

export default MenuLateral;