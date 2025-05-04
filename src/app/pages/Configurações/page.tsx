import React from "react";
import NavbarSuperior from "@/app/components/NavbarSuperior";
import MenuLateral from "@/app/components/MenuLateral";
import Configuracoes from "@/app/components/Configurações";
import Footer from "@/app/components/Footer";

export default function ConfiguracoesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavbarSuperior />
      <div className="flex flex-1">
        <MenuLateral />
        <Configuracoes />
      </div>
      <Footer />
    </div>
  );
}