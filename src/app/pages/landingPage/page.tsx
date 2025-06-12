"use client";

import CoinRain from "@/app/components/CoinRain";
import NavbarSuperiorLP from "@/app/components/NavbarSuperiorLP";
import { Jaro } from "next/font/google";
import { Button } from "react-bootstrap";

const jaro = Jaro({
  subsets: ["latin"],
  weight: "400",
});

export default function LandingPage() {
  return (
    <main className="h-screen flex flex-col text-white relative overflow-hidden bg-gradient-to-br from-[#ffffff] to-[#0158a5]">
      {/* Coin rain animado */}
      <CoinRain />

      {/* Navbar 
      <div className="shrink-0 relative z-20">
        <NavbarSuperiorLP />
      </div>*/}

      {/* Conteúdo principal */}
      <div className="flex-grow flex flex-col justify-center items-center px-4 py-6 overflow-hidden relative z-10">
        {/* Hero */}
        <section className="text-center max-w-3xl mb-10">
          <div className="mb-4">
            <img
              src="/EstudeMyLogo.svg"
              alt="Logo Estude.My"
              className="m-auto h-30"
            />
          </div>
         {/* <h2 className="text-2xl md:text-4xl mb-6 text-[#ff0000] ">
            Transforme seus estudos em uma aventura!
          </h2>
          <p className="text-lg md:text-xl mb-6 text-white">
            Com nossa plataforma gamificada, aprender se torna divertido e recompensador.
          </p>*/}

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button className="bg-[#ff0000] text-white px-10 py-3 border-4 border-white shadow-[4px_4px_0_0_#000] rounded-none font-bold text-lg transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none" href="/pages/cadastro">
              Começar agora!
            </Button>
            <Button className="bg-[#ffe600] text-black px-10 py-3 border-4 border-white shadow-[4px_4px_0_0_#000] rounded-none font-bold text-lg transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none" href="/pages/login">
              Entrar
            </Button>
          </div>
        </section>

        {/* Benefícios */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-5xl text-sm md:text-base">
          <div className="bg-[#155dfc] text-white p-6 border-4 border-[#000000] shadow-[4px_4px_0_0_#f2cb07] rounded-md font-semibold transition-transform hover:scale-105 hover:shadow-lg">
            <h3 className={`${jaro.className} text-3xl md:text-4xl mb-4`}>Estude Jogando 🎮</h3>
            <p>Transforme seus estudos em uma jornada divertida, com desafios e recompensas.</p>
          </div>
          <div className="bg-[#155dfc] text-white p-6 border-4 border-[#000000] shadow-[4px_4px_0_0_#f24c27] rounded-md font-semibold transition-transform hover:scale-105 hover:shadow-lg">
            <h3 className={`${jaro.className} text-3xl md:text-4xl mb-4`}>Suba no Ranking 🏆</h3>
            <p>Conquiste seu lugar entre os melhores e evolua junto com a comunidade.</p>
          </div>
          <div className="bg-[#155dfc] text-white p-6 border-4 border-[#000000] shadow-[4px_4px_0_0_#ff00ff] rounded-md font-semibold transition-transform hover:scale-105 hover:shadow-lg">
            <h3 className={`${jaro.className} text-3xl md:text-4xl mb-4`}>Desafie Records 💎</h3>
            <p>Complete trilhas de conhecimento e ganhe recompensas exclusivas.</p>
          </div>
        </section>
      </div>
    </main>
  );
}