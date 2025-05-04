import React from "react";
import NavbarSuperior from "@/app/components/NavbarSuperior";
import MenuLateral from "@/app/components/MenuLateral";
import Mensagens from "@/app/components/Mensagens";
import Footer from "@/app/components/Footer";

export default function CaixaDeEntradaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavbarSuperior />
      <div className="flex flex-1">
        <MenuLateral />
        <Mensagens />
      </div>
      <Footer />
    </div>
  );
}