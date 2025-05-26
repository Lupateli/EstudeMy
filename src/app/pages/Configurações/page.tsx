import React from "react";
import Configuracoes from "@/app/components/Configurações";
import Footer from "@/app/components/Footer";
import Topo from "@/app/components/Topo";

export default function ConfiguracoesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Topo />
      <div className="flex flex-1">

        <Configuracoes />
      </div>
      <Footer />
    </div>
  );
}