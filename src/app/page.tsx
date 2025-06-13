"use client";

import CoinRain from "@/app/components/CoinRain";
import { Jaro } from "next/font/google";
import { motion } from "framer-motion";

const jaro = Jaro({
  subsets: ["latin"],
  weight: "400",
});

const tooltips = [
  { icon: "🎮", text: "Estude jogando!", color: "#9CC5EB" },
  { icon: "🏆", text: "Suba no ranking!", color: "#f9bc60" },
  { icon: "💎", text: "Ganhe recompensas!", color: "#7f5af0" },
];

export default function LandingPage() {
  return (
    <main
      className="h-screen flex flex-col text-white relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('/img/background-image.png')` }}
    >
      <CoinRain />

      {/* BANNERS MAIS VISÍVEIS */}
      <div className="fixed top-1/2 left-4 z-30 flex flex-col gap-6 -translate-y-1/2">
        {tooltips.map(({ icon, text, color }, index) => (
          <div className="group relative flex items-center" key={index}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-[#163043cc] backdrop-blur-md border-2 p-4 rounded-xl shadow-md cursor-pointer"
              style={{
                borderColor: color,
                boxShadow: `0 0 12px ${color}`,
              }}
            >
              <span className="text-3xl">{icon}</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute left-16 bg-[#9CC5EB] text-[#163043] px-4 py-2 rounded-md whitespace-nowrap text-md font-bold shadow-lg"
            >
              {text}
            </motion.div>
          </div>
        ))}
      </div>

      {/* CONTEÚDO CENTRAL */}
      <div className="flex-grow flex flex-col justify-center items-center px-4 py-6 overflow-hidden relative z-10">
        <section className="text-center max-w-3xl mb-12">
          <div className="mb-6">
            <img
              src="/EstudeMyLogo.svg"
              alt="Logo Estude.My"
              className="m-auto h-32 drop-shadow-[4px_4px_0_#000]"
            />
          </div>

          {/* BOTÕES GRANDES COM DESTAQUE */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-10">
            <motion.a
              href="/pages/cadastro"
              whileHover={{ scale: 1.05 }}
              className="bg-[#2b9348] text-white px-8 py-4 border-4 border-[#1b1b1b] shadow-[8px_8px_0_0_#000000] rounded-xl font-extrabold text-1xl transition-transform"
            >
              Começar agora!
            </motion.a>
            <motion.a
              href="/pages/login"
              whileHover={{ scale: 1.05 }}
              className="bg-[#f9bc60] text-black px-8 py-4 border-4 border-[#1b1b1b] shadow-[8px_8px_0_0_#000000] rounded-xl font-extrabold text-1xl transition-transform"
            >
              Entrar
            </motion.a>
          </div>
        </section>
      </div>
    </main>
  );
}
