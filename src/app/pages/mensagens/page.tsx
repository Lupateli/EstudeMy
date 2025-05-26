import React from "react";


import Mensagens from "@/app/components/Mensagens";
import Footer from "@/app/components/Footer";
import Topo from "@/app/components/Topo";

export default function CaixaDeEntradaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Topo/>
      <div className="flex flex-1">
       
        <Mensagens />
      </div>
      <Footer />
    </div>
  );
}