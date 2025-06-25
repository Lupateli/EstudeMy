import Topo from "@/app/components/Topo";
import Footer from "@/app/components/Footer";
import Conquistas from "@/app/components/Conquistas";
import React from "react";

export default function ConquistasPage() {
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
            <Conquistas />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}