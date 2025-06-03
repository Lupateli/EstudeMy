import React from "react";
import Progresso from "@/app/components/Progresso";
import Footer from "@/app/components/Footer";
import Topo from "@/app/components/Topo";

export default function ProgressoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Topo />
      <div className="flex flex-6">
        <Progresso />
      </div>
      <Footer />
    </div>
  );
}