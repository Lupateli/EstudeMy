import { BookText } from "lucide-react";

function TooltipStart() {
  return (
    <div
      className="absolute -top-14 animate-float bg-white text-blue-500 px-4 py-1 rounded shadow-md text-sm font-medium z-10
                before:content-[''] before:absolute before:bottom-[-6px] before:left-1/2 before:-translate-x-1/2 
                before:border-4 before:border-transparent before:border-t-white"
    >
      Começar
    </div>
  );
}

export default function Trilhas() {
  const buttons = [1, 2, 3, 4, 5];

  return (
    <div className="bg-white min-h-screen flex flex-col items-center pt-10">
      {/* Cabeçalho com azul igual aos botões */}
      <div className="bg-blue-500 rounded-t-xl px-6 py-4 mb-12 shadow-md text-white w-[90%] max-w-3xl flex justify-between items-center">
        <div>
          <p className="text-sm font-bold opacity-80">SEÇÃO 1, UNIDADE 1</p>
          <h2 className="text-xl font-bold">Geografia</h2>
        </div>
        <button className="flex items-center gap-2 border-2 border-white rounded-xl px-3 py-1 text-white font-bold">
          <BookText className="w-4 h-4" />
          GUIA
        </button>
      </div>

      {/* Trilhas */}
      <div className="relative w-full max-w-3xl flex flex-col items-center gap-12 px-6">
        {/* Linha vertical suave */}
        <div className="absolute top-10 bottom-0 left-1/2 w-[2px]  -translate-x-1/2"></div>

        {buttons.map((_, index) => {
          const isLocked = index >= buttons.length - 2;
          const isLeft = index % 2 === 0;

          const buttonClass = isLocked
            ? "bg-blue-500 text-gray-400 cursor-pointer" // Removido cursor-not-allowed
            : "bg-blue-500 text-yellow-300 cursor-pointer";

          return (
            <div
              key={index}
              className={`w-full flex items-center ${isLeft ? "justify-start pl-70" : "justify-end pr-60"}`}
            >
              <div className="relative flex flex-col items-center">
                {/* Linha curta conectando botão à linha central */}
                <div
                  className={`w-6 h-0.5  mb-2 ${isLeft ? "mr-auto" : "ml-auto"}`}
                ></div>

                {index === 3 && <TooltipStart />}

                <button
                  disabled={isLocked}
                  aria-disabled={isLocked}
                  className={`w-20 h-20 rounded-circle shadow-xl flex items-center justify-center 
                    transform active:translate-y-1 active:shadow-inner transition-all duration-100
                    ${buttonClass}`}
                >
                  ★
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}