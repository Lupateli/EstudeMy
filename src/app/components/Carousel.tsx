"use client";
// components/Carousel.tsx
import { useRef } from "react";
import CarouselItem from "./CarouselItem";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Item {
  title: string;
  subtitle?: string;
  image: string;
}

interface CarouselProps {
  title: string;
  subtitle?: string;
  items: Item[];
}

const Carousel: React.FC<CarouselProps> = ({ title, items }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="mb-1 relative">
      <h2 className="text-xl font-bold text-blue mb-4">{title}</h2>

      {/* Setas */}
      <button
        onClick={() => scroll("left")}
        className="absolute z-10 left-0 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute z-10 right-0 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white"
      >
        <ChevronRight size={28} />
      </button>

      {/* Itens do carrossel */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth space-x-4 pb-2 px-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
      >
        {items.map((item, index) => (
          <CarouselItem key={index} title={item.title} image={item.image} />
        ))}
      </div>
      <h2 className="text-xl font-bold text-blue mb-4">{subtitle}</h2>
    </div>
  );
};

export default Carousel;