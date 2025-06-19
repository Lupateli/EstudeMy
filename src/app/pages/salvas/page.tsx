import React from "react";
import Footer from "@/app/components/Footer";

import Topo from "@/app/components/Topo";
import Carrousel from "@/app/components/Carrousel";

export default function PaginaLicoesSalvas() {
  return (
    <>
      <div className="flex min-h-screen flex-col transition-all duration-300 justify-space-between bg-gray-50">
        <Topo />
        <div className="pt-3 w-full max-w-6xl mx-auto px-4">
          <div className=" text-3xl p-4 rounded-xl al">Lições Salvas</div>
        </div>
        <Carrousel />
      </div>
      <Footer />
    </>
  );
}
