"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const NUM_COINS = 20;

export default function CoinRain() {
  const [coins, setCoins] = useState<{ id: number; left: number; delay: number }[]>([]);

  useEffect(() => {
    const generatedCoins = Array.from({ length: NUM_COINS }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // percentual
      delay: Math.random() * 5, // em segundos
    }));
    setCoins(generatedCoins);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-10">
      {coins.map((coin) => (
        <div
          key={coin.id}
          className="absolute animate-fall"
          style={{
            left: `${coin.left}%`,
            animationDelay: `${coin.delay}s`,
          }}
        >
          <Image
            src="/coin-pixel.png"
            alt="Moeda pixelada"
            width={32}
            height={32}
          />
        </div>
      ))}
    </div>
  );
}
