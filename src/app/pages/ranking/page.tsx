import React from "react";
import Topo from "@/app/components/Topo";
import Footer from "@/app/components/Footer";
import Ranking from "@/app/components/Ranking";

export default function RankingPage() {
  return (
    <div className="flex min-h-screen flex-col transition-all duration-300 justify-space-between bg-gray-50">
      <Topo />
      <div className="pt-3 w-full max-w-6xl mx-auto px-4">
        
          <div className="text-3xl p-4 rounded-xl">Ranking</div>
          <Ranking />
        
      </div>
      <Footer />
    </div>
  );
}
