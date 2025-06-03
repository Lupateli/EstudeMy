import React from "react";
import DadosPessoais from "@/app/components/DadosPessoais";
import Footer from "@/app/components/Footer";
import Topo from "@/app/components/Topo";

export default function DadosPessoaisPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Topo />
      <div className="flex flex-6">
        <DadosPessoais />
      </div>
      <Footer />
    </div>
  );
}