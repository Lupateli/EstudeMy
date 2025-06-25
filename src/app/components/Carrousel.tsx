"use client";

import Link from "next/link";
import { ChevronRightIcon, ChevronLeftIcon } from "lucide-react";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Geografia",
    image: "../img/geo.png",
    description: "Paises americanos",
  },
  {
    id: 2,
    title: "História",
    image: "../img/hist.png",
    description: "Nosso país",
  },
  {
    id: 3,
    title: "Banco de dados",
    image: "../img/bd.png",
    description: "Banco de dados relacional",
  },
  {
    id: 4,
    title: "Matemática",
    image: "../img/mate.png",
    description: "Logaritmo",
  },
  {
    id: 5,
    title: "Português",
    image: "../img/port.png",
    description: "Substantivo",
  },
  {
    id: 6,
    title: "Ciências",
    image: "../img/cienc.png",
    description: "Biologia",
  },
];

function CarouselItem({ item }: { item: (typeof items)[0] }) {
  return (
    
    <Link href={`/pages/trilha?id=${item.id}`}>
      <div className="bg-white p-4 rounded-3xl shadow-md text-center hover:scale-105 transition-transform min-w-[220px] sm:min-w-[240px] md:min-w-[260px] lg:min-w-[280px] max-w-[90vw] flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="max-w-60 max-h-50 min-w-60 min-h-50 object-contain mb-2 rounded-2xl"
        />
        <h2 className="text-white font-semibold bg-amber-500 rounded px-2 py-1 text-sm md:text-base lg:text-lg xl:text-xl truncate">
          {item.title}
        </h2>
        <p className="text-sm text-black-500 mt-1">{item.description}</p>
      </div>
    </Link>
  );
}

function Carrousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 bg-slate-200 p-4 rounded-xl w-full max-w-screen-xl mx-auto">
      <div className="flex items-center gap-2 w-full">
        <button
          onClick={() => scroll(-300)}
          className="p-2 hover:bg-slate-300 rounded-full"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth w-full py-2"
        >
          {items.map((item) => (
            <CarouselItem key={item.id} item={item} />
          ))}
        </div>
        <button
          onClick={() => scroll(300)}
          className="p-2 hover:bg-slate-300 rounded-full"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default Carrousel;
