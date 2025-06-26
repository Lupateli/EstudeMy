"use client";

import Footer from "@/app/components/Footer";
import Topo from "@/app/components/Topo";
import Questao from "@/app/components/Questao";

export default function Curso() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/img/backgroundteste1.png')",
        backgroundColor: "#f3f4f6",
      }}
    >
      <div className="relative z-10">
        <Topo />
        <main className="min-h-screen bg-transparent">
          <Questao />
        </main>
        <Footer />
      </div>
    </div>
  );
}
