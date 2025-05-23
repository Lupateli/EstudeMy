'use client'
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const items = [
  {
    id: 1,
    title: 'Geografia',
    image: 'https://i.imgur.com/9T8QZtG.png',
    description: 'Paises americanos',
  },
  {
    id: 2,
    title: 'História',
    image: 'https://i.imgur.com/6z2LgQ2.png',
    description: 'Nosso país',
  },
  {
    id: 3,
    title: 'Banco de dados',
    image: 'https://i.imgur.com/NhZWq1E.png',
    description: 'Banco de dados relacional',
  },
  {
    id: 4,
    title: 'Matematica',
    image: 'https://i.imgur.com/9T8QZtG.png',
    description: 'Logaritimo',
  },
  {
    id: 5,
    title: 'Portugues',
    image: 'https://i.imgur.com/6z2LgQ2.png',
    description: 'Substantivo',
  },
  {
    id: 6,
    title: 'Ciencias',
    image: 'https://i.imgur.com/NhZWq1E.png',
    description: 'Biologia',
  },
];

type CarouselItemProps = {
    item: {
      id: number;
      title: string;
      image: string;
      description: string;
    };
  };

function CarouselItem({ item }: CarouselItemProps) {
  return (
    <div className="bg-white p-4 rounded-3xl shadow-md w-64 text-center" >
      <a href="/pages/trilha">lol</a>
      <img src={item.image} alt={item.title} className="w-full h-auto object-contain mb-2 rounded-2xl" />
      <h2 className="text-white font-semibold bg-amber-500 rounded max-h-10 " style={{ fontSize: "clamp(1rem, 2vw, 2rem)" }}>{item.title}</h2>
      <p className="text-sm text-black-500">{item.description}</p>
    </div>
  );
}

function ChevronLeftIcon() {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    );
  }
  
  function ChevronRightIcon() {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    );
  }

function Carousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + items.length) % items.length);
  const next = () => setIndex((index + 1) % items.length);

  return (
    <button><div className="flex flex-col m-auto items-center gap-4 bg-slate-200 p-4 rounded-xl max-w-5xl">
    <div className="relative flex items-center justify-center gap-4">
      <button onClick={prev} className="text-black px-2 py-5 hover:bg-slate-300 rounded">
        <ChevronLeftIcon />
      </button>
      <div className="flex gap-4 overflow-hidden">
        {[0, 1, 2].map(i => {
            const item = items[(index + i) % items.length];
            return <CarouselItem key={item.id} item={item} />;
        })}
      </div>
      <button onClick={next} className="text-black px-2 py-5  rounded-full hover:bg-slate-300 rounded" >
        <ChevronRightIcon />
      </button>
    </div>
    <div className="flex gap-2">
      {items.map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-gray-400'}`}
        />
      ))}
    </div>
  </div>
  </button>
  );
}

export default Carousel;