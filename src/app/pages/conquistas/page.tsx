import Topo from "@/app/components/Topo";
import Footer from "@/app/components/Footer";
import Conquistas from "@/app/components/Conquistas";
import React from "react";

export default function ConquistasPage() {
return (
<div className="flex flex-col min-h-screen bg-gray-100">
      <Topo />
      <div className="flex flex-1">
        <Conquistas />
      </div>
      <Footer />
    </div>
);
}