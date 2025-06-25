import React from "react";
import CriarTrilha from "@/app/components/CriarTrilha";
import Footer from "@/app/components/Footer";
import Topo from "@/app/components/Topo";

export default function CriarTrilhaPage() {
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
          <div className="flex flex-6">
            <CriarTrilha />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}