import React from "react";
import CriarTrilha from "@/app/components/CriarTrilha";
import Footer from "@/app/components/Footer";
import Topo from "@/app/components/Topo";

export default function CriarTrilhaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Topo />
      <div className="flex flex-6">
        <CriarTrilha />
      </div>
      <Footer />
    </div>
  );
}