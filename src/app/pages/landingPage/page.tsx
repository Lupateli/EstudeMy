"use client";

import Logo from "@/app/components/Logo";
import NavbarSuperiorLP from "@/app/components/NavbarSuperiorLP";
import { Jaro } from "next/font/google";

const jaro = Jaro({
  subsets: ["latin"],
  weight: "400", // Jaro só tem um peso
});

export default function LandingPage() {
  return (
    <main className="h-screen flex flex-col bg-white text-gray-900">
      {/* Navbar */}
      <div className="shrink-0">
        <NavbarSuperiorLP />
      </div>

      {/* Conteúdo principal (Hero + Benefícios) */}
      <div className="flex-grow flex flex-col justify-center items-center px-4 py-6 overflow-hidden">
        {/* Hero */}
        <Logo />
        
        <section className="text-center max-w-3xl mb-10">
          <h1 className={`${jaro.className} text-3xl md:text-5xl mb-4 text-blue-600`}>
          Transforme seus estudos em uma aventura!
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Com nossa plataforma gamificada, aprender se torna divertido e recompensador.
          </p>
           
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-blue-600 text-white px-20 py-3 border-4 border-black shadow-[4px_4px_0_0_#000] rounded-none font-bold transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">
            Começar agora!
            </button>
            
            <button className="bg-blue-600 text-white px-20 py-3 border-4 border-black shadow-[4px_4px_0_0_#000] rounded-none font-bold transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">
            Entrar 
            </button>
          </div>

       
        </section>

        {/* Benefícios compactados */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl text-sm md:text-base">
  <div className="bg-green-600 text-white p-4 border-4 border-black shadow-[4px_4px_0_0_#000] rounded-none font-semibold transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">
    <h3 className={`${jaro.className} text-3xl md:text-5xl mb-4`}>Estude Jogando 🎮</h3>
    <p>Transforme seus estudos em uma jornada divertida, com desafios e recompensas.</p>
  </div>
  <div className="bg-yellow-400 text-black p-4 border-4 border-black shadow-[4px_4px_0_0_#000] rounded-none font-semibold transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">
    <h3 className={`${jaro.className} text-3xl md:text-5xl mb-4`}>Suba no Ranking 🏆</h3>
    <p>Conquiste seu lugar entre os melhores e evolua junto com a comunidade.</p>
  </div>
  <div className="bg-pink-500 text-white p-4 border-4 border-black shadow-[4px_4px_0_0_#000] rounded-none font-semibold transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none">
    <h3 className={`${jaro.className} text-3xl md:text-5xl mb-4`}>Desafie Records 💎</h3>
    <p>Complete trilhas de conhecimento e ganhe recompensas exclusivas.</p>
  </div>
</section>
      </div>
      </main>
  );
}