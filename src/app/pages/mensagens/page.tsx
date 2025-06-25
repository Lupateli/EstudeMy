import React from "react";
import Mensagens from "@/app/components/Mensagens";
import Footer from "@/app/components/Footer";
import Topo from "@/app/components/Topo";

export default function CaixaDeEntradaPage() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/img/backgroundteste1.png')",
        backgroundColor: '#f3f4f6'
      }}
    >
      <div className="relative z-10">
        <div className="flex flex-col min-h-screen">
          <Topo />
          <div className="flex flex-1">
            <Mensagens />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}