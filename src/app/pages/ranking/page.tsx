import React from "react";
import Topo from "@/app/components/Topo";
import Footer from "@/app/components/Footer";
import Ranking from "@/app/components/Ranking";

export default function RankingPage() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/img/backgroundteste1.png')",
        backgroundColor: '#f3f4f6'
      }}
    >
      <div className="relative z-10">
      <Topo />
      <div className="pt-3 w-full max-w-6xl mx-auto px-4">
        
          <div className="text-3xl p-4 rounded-xl">Ranking</div>
          <Ranking />
        
      </div>
      <Footer />
    </div>
    </div>
  );
}
